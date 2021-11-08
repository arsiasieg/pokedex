import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/shared/models/Pokemon.model';
import { PokedexService } from 'src/app/shared/services/pokedex.service';

@Component({
  selector: 'app-pokedex-page',
  templateUrl: './pokedex-page.component.html',
  styleUrls: ['./pokedex-page.component.css']
})
export class PokedexPageComponent implements OnInit {
  listPokemon: Pokemon[]

  constructor(public pokedexService: PokedexService) {
    this.listPokemon = []
   }

  ngOnInit(): void {
    this.listPokemon = this.pokedexService.getPokemon()
  }

}