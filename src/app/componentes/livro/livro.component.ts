import {Component, Input} from '@angular/core';
import {faEye} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.scss']
})
export class LivroComponent {
  faEye = faEye;

  @Input() titulo = '';
  @Input() autor = '';
  @Input() imagem!: string;
  @Input() ano_publicacao!: number;
  @Input() id_livro!: number;
}
