import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pokemon } from 'src/app/shared/models/Pokemon.model';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  @Input() pokemonList: Pokemon[]|undefined
  @Output() emitPokemonDetails: EventEmitter<Pokemon> = new EventEmitter<Pokemon>()

  constructor(){ }

  ngOnInit(): void {
  }

  sendPokemonDetails(pokemon: Pokemon){
    this.emitPokemonDetails.emit(pokemon)
  }

}
