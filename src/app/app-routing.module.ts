import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePokemonComponent } from './pages/create-pokemon/create-pokemon.component';
import { PokedexPageComponent } from './pages/pokedex-page/pokedex-page.component';

const routes: Routes = [
  {path:"pokedex", component: PokedexPageComponent},
  {path:"create", component:CreatePokemonComponent},
  {path: "", component: PokedexPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
