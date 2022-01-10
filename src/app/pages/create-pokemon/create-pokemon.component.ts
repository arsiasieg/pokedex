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
  soundPokemon : string
  typePokemon : string []
  selectedType : string
  pokemonAdded : boolean

  constructor(private pokedexService : PokedexService){
    this.namePokemon = ""
    this.urlPokemon = ""
    this.descriptionPokemon = ""
    this.soundPokemon = ""
    this.typePokemon = []
    this.selectedType = ""
    this.pokemonAdded = false
  }

  addType(type : string){
      if(this.typePokemon.find(element => element == type) == undefined){
        this.typePokemon.push(type)
      }
  }

  deleteType(type : string){
    console.log(type)
    this.typePokemon = this.typePokemon.filter(element => element != type)
  }

  createPokemon(){
    this.pokedexService.addPokemon(this.namePokemon, this.urlPokemon, this.descriptionPokemon, this.soundPokemon, this.typePokemon)
    this.pokemonAdded = true
  }
}
