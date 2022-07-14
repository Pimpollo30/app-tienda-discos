import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DiscoService } from 'src/app/services/disco.service';

@Component({
  selector: 'app-editar-disco',
  templateUrl: './editar-disco.component.html',
  styleUrls: ['./editar-disco.component.css']
})
export class EditarDiscoComponent implements OnInit {


  editForm: FormGroup;
  enviado = false;
  formatos:any = ['Single','EP (Extended Play)','LP (Long Play)','CD (Compact Disc)'];
  velocidades:any = ['33 ⅓ RPM', '45 RPM', 'N/A'];
  condiciones:any = ['Poor (P)','Fair (F)','Good (G)','Good Plus (G+)','Very Good (VG)','Very Good Plus (VG+)','Near Mint (NM o M-)','Mint (M)',]
  paises:any = ['US','France','Italy','Mexico','UK','Japan','Europe','Germany','Brazil','Spain','Israel','India','Canada','Australia','Belgium'];
  generos:any = ['Funk','Soul','Hip Hop','Jazz','Disco','Rhythm & Blues','Pop','Rock','House','Hi NRG','Country','Europop','Eurodance','Synth-pop','Techno'];


  constructor(
    public formBuilder:FormBuilder, 
    private router:Router, 
    private discoService: DiscoService,
    private actRoute: ActivatedRoute
  ) {
    
  }

  ngOnInit(): void {
    this.mainForm();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getDisco(id);

    this.editForm = this.formBuilder.group({
      nombre: ['',[Validators.required]],
      artista: ['',[Validators.required]],
      sello: ['',[Validators.required]],
      formato: ['',[Validators.required]],
      velocidad: ['',[Validators.required]],
      condicion: ['',[Validators.required]],
      pais: ['',[Validators.required]],
      year: ['',[
        Validators.required,
        Validators.pattern('^[0-9]+$')
      ]],
      genero: ['',[Validators.required]],
      cantidad: ['',[
        Validators.required,
        Validators.pattern('^[0-9]+$')
      ]],
      precio: ['',[
        Validators.required,
        Validators.pattern('^[0-9]+$')
      ]],
      url: ['',[Validators.required]],
    });
  }

  
  
  //Construcción del formulario
  mainForm() {
    this.editForm = this.formBuilder.group({
      nombre: ['',[Validators.required]],
      departamento: ['',[Validators.required]],
      email: ['',[
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')
      ]],
      telefono: ['',[
        Validators.required,
        Validators.pattern('^[0-9]+$')
      ]],

    });
  }

   //Actualizar formato del select
   actualizarFormato(d) {
    this.editForm.get('formato').setValue(d,{
      onlySelf:true,
    });
  }
  
  //Actualizar velocidad del select
  actualizarVelocidad(d) {
    this.editForm.get('velocidad').setValue(d,{
      onlySelf:true,
    });
  }
  
  //Actualizar condición del select
  actualizarCondicion(d) {
    this.editForm.get('condicion').setValue(d,{
      onlySelf:true,
    });
  }
  
  //Actualizar país del select
  actualizarPais(d) {
    this.editForm.get('pais').setValue(d,{
      onlySelf:true,
    });
  }
  
  //Actualizar género del select
  actualizarGenero(d) {
    this.editForm.get('genero').setValue(d,{
      onlySelf:true,
    });
  }
  
  //Getter para acceder al form control
  get myForm() {
    return this.editForm.controls;
  }

  //Obtenemos al producto que se va a modificar por medio de su ID
  getDisco(id) {
    this.discoService.getDisco(id).subscribe((data) => {
      this.editForm.setValue({
        nombre: data['nombre'],
        artista: data['artista'],
        sello: data['sello'],
        formato: data['formato'],
        velocidad: data['velocidad'],
        condicion: data['condicion'],
        pais: data['pais'],
        year: data['year'],
        genero: data['genero'],
        cantidad: data['cantidad'],
        precio: data['precio'],
        url: data['url']
      })
    })
  }


  //Método que se ejecuta cuando el usuario envía el form
  onSubmit() {
    this.enviado = true;
    if (!this.editForm.valid) {
      return false;
    }else {
      if (window.confirm('¿Estás seguro que deseas modificar?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.discoService.updateDisco(id,this.editForm.value).subscribe({
          complete: () => {
            this.router.navigateByUrl('/listar-discos');
            console.log('Se actualizó correctamente');
          },
          error: (e) => {
            console.log(e);
          }
        });
      }
    }
  }
}
