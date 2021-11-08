import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from  '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { PokedexPageComponent } from './pages/pokedex-page/pokedex-page.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PokedexPageComponent,
    PokemonListComponent,
    PokemonDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
