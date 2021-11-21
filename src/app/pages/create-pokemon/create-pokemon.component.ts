import { Component } from '@angular/core';
import { PokedexService } from 'src/app/shared/services/pokedex.service';

@Component({
  selector: 'app-create-pokemon',
  templateUrl: './create-pokemon.component.html',
  styleUrls: ['./create-pokemon.component.css']
})
export class CreatePokemonComponent {
  namePokemon: string
  urlPokemon: string
  descriptionPokemon :string

  constructor(private pokedexService : PokedexService){
    this.namePokemon = ""
    this.urlPokemon = ""
    this.descriptionPokemon = ""
  }

  createPokemon(){
    this.pokedexService.addPokemon(this.namePokemon, this.urlPokemon, this.descriptionPokemon)
  }
}
