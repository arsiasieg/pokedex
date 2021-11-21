
import { Injectable } from '@angular/core';
import { POKEMONS } from 'src/assets/pokemons-mock';
import { Pokemon } from '../models/Pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {
  pokedex : Pokemon[]

  constructor(){
    this.pokedex = this.getPokemon()
  }

  getPokemon(){
    return POKEMONS
  }

  addPokemon(name: string, url:string, description: string ){
    if(this.pokedex.length < 9){
      this.pokedex.push(new Pokemon("00"+(this.pokedex.length+1).toString(), name, url, description))
    } else {
      this.pokedex.push(new Pokemon("0"+(this.pokedex.length+1).toString(), name, url, description))
    }
  }

  deletePokemon(pokemon : Pokemon){
    console.log("Id du pokemon à supp :" + pokemon.id)
    for (let i=1; i < this.pokedex.length; i++){
      if (this.pokedex[i].id == pokemon.id)
        console.log("Index dans le tableau : " + i)
        this.pokedex.splice(i, 1)
    }
  }
}
