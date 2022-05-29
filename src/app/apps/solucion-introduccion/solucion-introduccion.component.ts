import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solucion-introduccion',
  templateUrl: './solucion-introduccion.component.html',
  styleUrls: ['./solucion-introduccion.component.css']
})
export class SolucionIntroduccionComponent implements OnInit {

  opcionSeleccionada:number =1;

  constructor() { }

  ngOnInit(): void {
  }

  seleccionarOpcion(op:number){
    this.opcionSeleccionada = op;
  }

}
