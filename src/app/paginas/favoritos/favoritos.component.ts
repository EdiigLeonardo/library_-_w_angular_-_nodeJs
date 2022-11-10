import {Component, OnInit} from '@angular/core';
// @ts-ignore
import favoritos from '../../../dados/favoritos.js';
import {LivrariaService} from "../../service/livraria.service";

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.scss']
})
export class FavoritosComponent implements OnInit {
  lista_favoritos : any[]=[];
  constructor(private livraria: LivrariaService) {
  }
  ngOnInit(): void {
    this.lista_favoritos = this.livraria.getLivros();
  }
}
