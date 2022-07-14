import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DiscoService } from 'src/app/services/disco.service';

@Component({
  selector: 'app-agregar-disco',
  templateUrl: './agregar-disco.component.html',
  styleUrls: ['./agregar-disco.component.css']
})
export class AgregarDiscoComponent implements OnInit {

  formatos:any = ['Single','EP (Extended Play)','LP (Long Play)','CD (Compact Disc)'];
  velocidades:any = ['33 ⅓ RPM', '45 RPM', 'N/A'];
  condiciones:any = ['Poor (P)','Fair (F)','Good (G)','Good Plus (G+)','Very Good (VG)','Very Good Plus (VG+)','Near Mint (NM o M-)','Mint (M)',]
  paises:any = ['US','France','Italy','Mexico','UK','Japan','Europe','Germany','Brazil','Spain','Israel','India','Canada','Australia','Belgium'];
  generos:any = ['Funk','Soul','Hip Hop','Jazz','Disco','Rhythm & Blues','Pop','Rock','House','Hi NRG','Country','Europop','Eurodance','Synth-pop','Techno'];

  discoForm: FormGroup;
  enviado = false;

  constructor(
    public formBuilder:FormBuilder, 
    private router:Router, 
    private ngZone:NgZone, 
    private discoService: DiscoService
    ) { 
      this.mainForm();
    }

  ngOnInit(): void {
  }

  
  mainForm() {
    this.discoForm = this.formBuilder.group({
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


  //Actualizar formato del select
  actualizarFormato(d) {
    this.discoForm.get('formato').setValue(d,{
      onlySelf:true,
    });
  }

  //Actualizar velocidad del select
  actualizarVelocidad(d) {
    this.discoForm.get('velocidad').setValue(d,{
      onlySelf:true,
    });
  }

  //Actualizar condición del select
  actualizarCondicion(d) {
    this.discoForm.get('condicion').setValue(d,{
      onlySelf:true,
    });
  }

  //Actualizar país del select
  actualizarPais(d) {
    this.discoForm.get('pais').setValue(d,{
      onlySelf:true,
    });
  }

  //Actualizar género del select
  actualizarGenero(d) {
    this.discoForm.get('genero').setValue(d,{
      onlySelf:true,
    });
  }

  //Getter para acceder al form control
  get myForm() {
    return this.discoForm.controls;
  }

  //Método que se ejecuta cuando se envía el formulario
  onSubmit() {
    this.enviado = true;
    if (!this.discoForm.valid) {
      return false;
    }else {
      return this.discoService.agregarDisco(this.discoForm.value).subscribe({
        complete: () => {
          this.ngZone.run(() => this.router.navigateByUrl('/listar-discos'));
        },
        error: (e) => {
          console.log(e);
        }
      });
    }
  }
}
