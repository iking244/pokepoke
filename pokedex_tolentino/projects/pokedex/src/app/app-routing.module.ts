import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonSpeciesComponent } from './pokemon-species/pokemon-species.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PokemonListByTypeComponent } from './pokemon-list-by-type/pokemon-list-by-type.component';

const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'list', component: PokemonListComponent },
  { path: 'list/:name', component: PokemonSpeciesComponent},
  { path: 'list/pokemon/:type' , component: PokemonListByTypeComponent },
  { path: "**", component: PageNotFoundComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [PokemonListComponent, PokemonSpeciesComponent,PokemonListByTypeComponent
                                  ,PageNotFoundComponent,]
