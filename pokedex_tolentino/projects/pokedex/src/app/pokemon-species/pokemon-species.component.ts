import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';
import { SpriteUrls, PokemonDetails, PokemonTypes} from '../_models/pokemon';


@Component({
  selector: 'app-pokemon-species',
  templateUrl: './pokemon-species.component.html',
  styleUrls: ['./pokemon-species.component.css']
})
export class PokemonSpeciesComponent implements OnInit {
  public pokemonName;
  pokemonSprite: SpriteUrls;
  pokemonInfo: PokemonDetails;
  pokemonDetails: PokemonTypes[];
  subscription;

  constructor( private route: ActivatedRoute, private pokemonService: PokemonService) { }

  ngOnInit() {
    const name = this.route.snapshot.paramMap.get('name');
    this.pokemonName = name;

    this.subscription = this.pokemonService.getPokemonInfo(this.pokemonName)
    .subscribe(data => {
      this.pokemonSprite = data.sprites;
      this.pokemonInfo = data;
      this.pokemonDetails = data.types;
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
