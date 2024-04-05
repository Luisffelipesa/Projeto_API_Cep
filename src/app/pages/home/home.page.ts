import { Component } from '@angular/core';
import { CepService } from '../../services/cep.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  correio: any = {};

  constructor(private cepService: CepService) {}

  localizarCep(evento: any){

  let codigocep: string = evento.detail.value;
  this.cepService.localizarCep(codigocep).then(response => {
    this.correio = response;
  })

}}
