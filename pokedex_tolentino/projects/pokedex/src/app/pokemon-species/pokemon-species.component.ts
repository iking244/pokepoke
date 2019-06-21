import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';
import { SpriteUrls, PokemonDetails, PokemonTypes } from '../_models/pokemon';



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
  subscription1;
  pokemonSpecieDetails;
  pokemonDescription: string;
  public errorMsg;

  constructor(private route: ActivatedRoute, private pokemonService: PokemonService, private router: Router) { }

  ngOnInit() {
    const name = this.route.snapshot.paramMap.get('name');
    this.pokemonName = name;

    this.subscription = this.pokemonService.getPokemonInfo(this.pokemonName)
      .subscribe(data => {
        this.pokemonSprite = data.sprites;
        this.pokemonInfo = data;
        this.pokemonDetails = data.types;
      },
        error => this.errorMsg = error
      );

    this.subscription1 = this.pokemonService.getPokemonDesc(this.pokemonName)
      .subscribe(data => {
        this.pokemonSpecieDetails = data;
        for (var i = 0; i < data.flavor_text_entries.length; i++) {
          if (data.flavor_text_entries[i].language.name == "en") {
            this.pokemonDescription = data.flavor_text_entries[i].flavor_text;
            break;
          }
        }
      },
        error => this.errorMsg = error)
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.subscription1.unsubscribe();
  }

  onSelect(type) {
    this.router.navigate(['/list/pokemon/', type]);
  }
}
