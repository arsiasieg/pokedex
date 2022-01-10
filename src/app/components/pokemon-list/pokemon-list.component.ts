import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pokemon } from 'src/app/shared/models/Pokemon.model';
import { PokedexService } from 'src/app/shared/services/pokedex.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  @Input() pokemonList: Pokemon[]|undefined
  @Output() emitPokemonDetails: EventEmitter<Pokemon> = new EventEmitter<Pokemon>()

  constructor(private pokedexService : PokedexService){ }

  ngOnInit(): void {
  }

  sendPokemonDetails(pokemon: Pokemon){
    this.emitPokemonDetails.emit(pokemon)
  }

}
