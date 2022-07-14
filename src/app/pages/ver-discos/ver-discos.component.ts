import { Component, OnInit } from '@angular/core';
import { DiscoService } from 'src/app/services/disco.service';

@Component({
  selector: 'app-ver-discos',
  templateUrl: './ver-discos.component.html',
  styleUrls: ['./ver-discos.component.css']
})
export class VerDiscosComponent implements OnInit {


  discos:any = [];

  constructor(private discoService:DiscoService) {
    this.getDiscos();
  }

  ngOnInit(): void {
  }


  getDiscos() {
    this.discoService.getDiscos().subscribe((data) => {
      this.discos = data;
    });
  }
}
