import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Router } from '@angular/router';
import { PokemonDetails } from '../_models/pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemons = {};
  pokemonId: PokemonDetails;

  constructor(private pokemonService: PokemonService, private router: Router) { }
  ngOnInit() {
  this.pokemonService.getPokemon().subscribe(data => this.pokemons = data);

  }

  onSelect(name) {
    console.log(name);
    this.router.navigate(['/list', name]);
  }
}


