import { NgModule } from '@angular/core';
import {LivrosComponent} from "./paginas/livros/livros.component";
import {RouterModule, Routes} from "@angular/router";
import {DetalhesComponent} from "./paginas/detalhes/detalhes.component";
import {AutoresComponent} from "./paginas/autores/autores.component";
import {VendasComponent} from "./paginas/vendas/vendas.component";
import {FavoritosComponent} from "./paginas/favoritos/favoritos.component";

const routes: Routes = [
  {path: '', redirectTo: '/livros', pathMatch: 'full'},
  {path: 'livros', component: LivrosComponent},
  {path: 'detalhes/:id_livro', component: DetalhesComponent},
  {path: 'autores', component: AutoresComponent},
  {path: 'vendas', component: VendasComponent},
  {path: 'favoritos', component: FavoritosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
