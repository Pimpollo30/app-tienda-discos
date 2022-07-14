import { Component, OnInit } from '@angular/core';
import { DiscoService } from 'src/app/services/disco.service';

@Component({
  selector: 'app-listar-discos',
  templateUrl: './listar-discos.component.html',
  styleUrls: ['./listar-discos.component.css']
})
export class ListarDiscosComponent implements OnInit {

  discos:any = [];

  constructor(private discoService:DiscoService) {
    this.getDiscos();
  }

  ngOnInit(): void {
  }


  //Método para obtener todos los productos
  getDiscos() {
    this.discoService.getDiscos().subscribe((data) => {
      this.discos = data;
    });
  }

  //Método para eliminar un producto
  eliminarDisco(disco, index) {
    if (window.confirm("¿Estás seguro que lo deseas eliminar?")) {
      this.discoService.deleteDisco(disco._id).subscribe((data) => {
        this.discos.splice(index,1);
      });
    }
  }

}
