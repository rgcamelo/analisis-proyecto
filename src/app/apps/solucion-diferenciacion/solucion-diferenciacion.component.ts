import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-solucion-diferenciacion',
  templateUrl: './solucion-diferenciacion.component.html',
  styleUrls: ['./solucion-diferenciacion.component.css']
})
export class SolucionDiferenciacionComponent implements OnInit {

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
