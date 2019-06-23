import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonSpritesComponent } from './pokemon-details/pokemon-details.component';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { LoadingSpinnerComponent } from './ui/loading-spinner/loading-spinner.component';
import { PokemonListByTypeComponent } from './pokemon-list-by-type/pokemon-list-by-type.component';
import { EvolutionChainComponent } from './evolution-chain/evolution-chain.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    PokemonSpritesComponent,
    routingComponents,
    PageNotFoundComponent,
    LoadingSpinnerComponent,
    PokemonListByTypeComponent,
    EvolutionChainComponent,
    HeaderComponent
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
