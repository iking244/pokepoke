import { Component, OnInit, Input } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { SpriteUrls, PokemonDetails, PokemonTypes } from '../_models/pokemon';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonSpritesComponent implements OnInit {

@Input() pokemonUrl: string;
@Input() pokemonName: string;

pokemonSprites: SpriteUrls;
pokemonId: PokemonDetails;
subscription;
  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
   

  }
  ngOnChanges(){
  this.subscription =this.pokemonService.getPokemonInfo(this.pokemonName)
  .subscribe(data => {
  
    this.pokemonSprites = data.sprites;
    this.pokemonId = data;

  });
}

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }


}


