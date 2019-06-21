import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-list-by-type',
  templateUrl: './pokemon-list-by-type.component.html',
  styleUrls: ['./pokemon-list-by-type.component.css']
})
export class PokemonListByTypeComponent implements OnInit {
pokemons = {};
pokemonType;
errorMsg;
  constructor(private pokemonService: PokemonService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    const type = this.route.snapshot.paramMap.get('type');
    this.pokemonType = type;
      this.pokemonService.getPokemonByType(this.pokemonType)
      .subscribe(data => this.pokemons = data,
        error =>   this.router.navigate(['**']));
  }

  onSelect(name) {
    this.router.navigate(['/list', name]);
  }

}

