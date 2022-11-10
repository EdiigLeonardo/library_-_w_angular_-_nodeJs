import {Component, OnInit} from '@angular/core';
// @ts-ignore
import livros from '../../../dados/livros.js';
import {LivrariaService} from "../../service/livraria.service";

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.scss']
})
export class LivrosComponent implements OnInit {
  livros : any[]=[];

  constructor(private livraria: LivrariaService) {
  }

  ngOnInit(): void {
    this.livros = this.livraria.getLivros();
  }
}
