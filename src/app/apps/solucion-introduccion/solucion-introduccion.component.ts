import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-solucion-introduccion',
  templateUrl: './solucion-introduccion.component.html',
  styleUrls: ['./solucion-introduccion.component.css']
})
export class SolucionIntroduccionComponent implements OnInit {

  opcionSeleccionada:number =1;

  constructor(activatedRouter: ActivatedRoute) {
    let n = activatedRouter.snapshot.paramMap.get('n');
    if (n) {
      this.opcionSeleccionada = parseInt(n);
    }
   }


  ngOnInit(): void {
  }

  seleccionarOpcion(op:number){
    this.opcionSeleccionada = op;
  }

}
