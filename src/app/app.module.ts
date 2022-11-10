import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {LivroComponent} from './componentes/livro/livro.component';
import {LivrosComponent} from './paginas/livros/livros.component';
import {CabecalhoComponent} from './componentes/cabecalho/cabecalho.component';
import {NavegacaoComponent} from './componentes/navegacao/navegacao.component';
import {AppRoutingModule} from './app-routing.module';
import {DetalhesComponent} from './paginas/detalhes/detalhes.component';
import {VendasComponent} from './paginas/vendas/vendas.component';
import {FavoritosComponent} from './paginas/favoritos/favoritos.component';
import {AutoresComponent} from './paginas/autores/autores.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LivroComponent,
    LivrosComponent,
    CabecalhoComponent,
    NavegacaoComponent,
    DetalhesComponent,
    VendasComponent,
    FavoritosComponent,
    AutoresComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
