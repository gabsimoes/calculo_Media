import { UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  titulo: string = "Notas";
  codigoRMA: number = 170535;
  nome: string = 'Gabrielle Simões';
  nota1: number = 7;
  nota2: number = 7.5;
  nota3: number = 8;
  nota4: number = 9.5;
  media:  number = 8;
  foto: string = 'assets/img/poster.png';
  dataCalendario: string = '2021-10-20';

  constructor() {}



  ngOnInit(): void {
  }
}
