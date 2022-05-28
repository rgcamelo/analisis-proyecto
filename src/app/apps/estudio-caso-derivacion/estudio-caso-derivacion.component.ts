import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estudio-caso-derivacion',
  templateUrl: './estudio-caso-derivacion.component.html',
  styleUrls: ['./estudio-caso-derivacion.component.css']
})
export class EstudioCasoDerivacionComponent implements OnInit {

  opcionSeleccionada:number =1;

  constructor() { }

  ngOnInit(): void {
  }

  seleccionarOpcion(op:number){
    this.opcionSeleccionada = op;
  }

}
