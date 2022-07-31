import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from 'rxjs/operators';
import { PaisInterface } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html'
})
export class VerPaisComponent implements OnInit {

  pais!: PaisInterface;

  constructor(
      private activateRoute: ActivatedRoute,
      private paisService: PaisService
    ) { }

  ngOnInit(): void {

    this.activateRoute.params
    .pipe(
      switchMap(({ id })=>this.paisService.paisPorCodigo( id)),
      tap(console.log)
    )
        
    .subscribe( pais =>this.pais = pais[0]);

  }

}
