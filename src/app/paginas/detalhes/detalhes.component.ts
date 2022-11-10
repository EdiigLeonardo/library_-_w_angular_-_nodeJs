import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {faBookmark} from "@fortawesome/free-regular-svg-icons";
import {faBookmark as faBookmarkSolid, faChevronDown} from "@fortawesome/free-solid-svg-icons";
// @ts-ignore
import detalhes_livros from "../../../dados/detalhes_livros";
import {LivrariaService} from "../../service/livraria.service";

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss']
})
export class DetalhesComponent implements OnInit {
  detalhes: any;
  faBookmarkSolid = faBookmarkSolid;
  faBookmark = faBookmark;
  faChevronDown = faChevronDown;
  isFavorite = false;
  isOpen = false;

  constructor(private route: ActivatedRoute, private livraria: LivrariaService) {

  }

  ngOnInit(): void {
    let id_livro = this.route.snapshot.params['id_livro'];
    this.detalhes = this.livraria.getDetalhes(id_livro);
  }

  toggleFavorite(){
    this.livraria.alternarFavorito(this.detalhes.id)
    //this.isFavorite = !this.isFavorite;
  }

  get favorito(){
    return this.livraria.efavorito(this.detalhes.id)
  }

}
