
import { Injectable } from '@angular/core';
import { POKEMONS } from 'src/assets/pokemons-mock';
import { Pokemon } from '../models/Pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  constructor(){
  }

  getPokemon(){
    return POKEMONS
  }
}
