import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estudio-caso-introduccion',
  templateUrl: './estudio-caso-introduccion.component.html',
  styleUrls: ['./estudio-caso-introduccion.component.css']
})
export class EstudioCasoIntroduccionComponent implements OnInit {

  opcionSeleccionada:number =1;

  constructor() { }

  ngOnInit(): void {
  }

  seleccionarOpcion(op:number){
    this.opcionSeleccionada = op;
  }


}
