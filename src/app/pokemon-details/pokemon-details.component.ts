import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../shared/models/Pokemon.model';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {
  @Input() pokemonDetails: Pokemon|undefined
  constructor() { }

  ngOnInit(): void {
  }

}
