import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';
import { SpriteUrls, PokemonDetails, PokemonTypes } from '../_models/pokemon';
import { switchMap } from 'rxjs/operators';



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
  pokemonSpecieDetails;
  pokemonDescription: string;
  public errorMsg;

  constructor(private route: ActivatedRoute, private pokemonService: PokemonService, private router: Router) { }

  ngOnInit() {

    this.subscription = this.route.params.pipe(
      switchMap((params)=>{
        this.pokemonName = params.name;
        return this.pokemonService.getPokemonInfo(this.pokemonName).pipe(
          switchMap((data :PokemonDetails)=>{
            this.pokemonSprite = data.sprites;
            this.pokemonInfo = data;
            this.pokemonDetails = data.types;
            return this.pokemonService.getPokemonDesc(this.pokemonName);
          })
        )
      })
    ).subscribe(data => {
    
      this.pokemonSpecieDetails = data;
      
      for (let i of data.flavor_text_entries) {
        if (i.language.name == "en") {
          this.pokemonDescription = i.flavor_text;
          break;
        }
      }
    },
      error => this.errorMsg = error)
   
      
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();

  }

  onSelect(type) {
    this.router.navigate(['/pokemon-list/pokemon/', type]);
  }
}
