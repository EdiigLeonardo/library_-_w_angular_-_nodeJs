import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'livraria';
  favoritos: any = [];

  adicionarFavorito(id: number) {
    this.favoritos.push(id);
  }
}
