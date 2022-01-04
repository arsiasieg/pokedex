import { Component, Input } from '@angular/core';
import { PokedexService } from 'src/app/shared/services/pokedex.service';
import { Pokemon } from '../../shared/models/Pokemon.model';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent {
  @Input() pokemonDetails: Pokemon|undefined

  constructor(private pokedexService : PokedexService){}
  
  deletePokemon(pokemon: Pokemon){
    this.pokedexService.deletePokemon(pokemon)
  }

}
