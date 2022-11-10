import { Injectable } from '@angular/core';
// @ts-ignore
import vendas from '../../dados/vendas.js';
// @ts-ignore
import autores from '../../dados/autores.js';
// @ts-ignore
import detalhes_livros from '../../dados/detalhes_livros.js';
// @ts-ignore
import livros from '../../dados/livros.js';
// @ts-ignore
import favoritos from '../../dados/favoritos.js';

@Injectable({
  providedIn: 'root'
})
export class LivrariaService {
  favoritos: number[] = [];

  constructor() { }

  getVendas() {
    return vendas;
  }

  getAutores() {
    return autores;
  }

  getDetalhes(id_livro: number){
    return detalhes_livros[id_livro];
  }

  getLivros(){
    return livros;
  }

  getFavoritos(){
    return favoritos
  }

  alternarFavorito(id_livro: number){
    if(!this.efavorito(id_livro)){
      this.favoritos.push(id_livro)
    }else{
      let indice = this.favoritos.indexOf(id_livro)
      this.favoritos.splice(indice,1)
    }
  }

  efavorito(id_livro: number): boolean{
    return this.favoritos.includes(id_livro);
  }
}
