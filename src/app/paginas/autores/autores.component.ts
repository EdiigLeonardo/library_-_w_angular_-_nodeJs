import {Component, OnInit} from '@angular/core';
// @ts-ignore
import autores from "../../../dados/autores";
import {LivrariaService} from "../../service/livraria.service";

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.scss']
})
export class AutoresComponent implements OnInit {
  autores: any[] = [];

  constructor(private livraria: LivrariaService) {
  }

  ngOnInit(): void {
    this.autores = this.livraria.getAutores();
  }
}
