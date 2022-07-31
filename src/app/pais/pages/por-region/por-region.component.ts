import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles:[`
    button:{
      margin-right:10px;
    }
  `
  ]
})
export class PorRegionComponent implements OnInit {

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva:string='';

  constructor() { }

  ngOnInit(): void {
  }

  activarRegion(region:string){
      this.regionActiva = region;

      //Cargar tabla de paises con la informacion de paises de la region seleccionada
  }

}
