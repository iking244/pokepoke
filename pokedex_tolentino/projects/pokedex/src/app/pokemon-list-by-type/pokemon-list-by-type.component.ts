import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-pokemon-list-by-type',
  templateUrl: './pokemon-list-by-type.component.html',
  styleUrls: ['./pokemon-list-by-type.component.css']
})
export class PokemonListByTypeComponent implements OnInit {
pokemons = {};
pokemonType;
errorMsg;
subscription;
page=45;
  constructor(private pokemonService: PokemonService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.subscription = this.route.params.pipe(
      switchMap((params)=>{
        return  this.pokemonService.getPokemonByType(params.type);
      })
    ).subscribe(data => this.pokemons = data,
      error =>   this.router.navigate(['**']));
}
   
     
loadMore(){
  this.page += 45;
}
  onSelect(name) {
    this.router.navigate(['/list', name]);
  }

}

