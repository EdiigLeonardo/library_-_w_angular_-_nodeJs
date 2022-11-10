import {Component, OnInit} from '@angular/core';
// @ts-ignore
//import vendas from '../../../dados/vendas.js';
import {LivrariaService} from "../../service/livraria.service";

@Component({
  selector: 'app-vendas',
  templateUrl: './vendas.component.html',
  styleUrls: ['./vendas.component.scss']
})
export class VendasComponent implements OnInit {
  vendas : any[] = [];

  constructor(private livraria: LivrariaService) {
  }

  ngOnInit(): void {
    this.vendas = this.livraria.getVendas();
  }

}
