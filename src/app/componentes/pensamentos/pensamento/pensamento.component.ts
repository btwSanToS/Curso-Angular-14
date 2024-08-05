import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {

  @Input() pensamento = {
    conteudo: 'Estudando Angular',
    autoria: 'Santos',
    modelo: 'modelo2'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
