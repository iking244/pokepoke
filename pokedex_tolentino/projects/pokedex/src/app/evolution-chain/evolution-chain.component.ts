import { Component, OnInit, Input } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Chain } from '../_evolution/evolution';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-evolution-chain',
  templateUrl: './evolution-chain.component.html',
  styleUrls: ['./evolution-chain.component.css']
})
export class EvolutionChainComponent implements OnInit {
@Input() specieUrl: string;
subscription;
evolution_data;
  constructor(private pokemonService:PokemonService,private router:Router) { }

  ngOnInit() {
  
    this.subscription = this.pokemonService.getEvolutionChain(this.specieUrl).
    subscribe((data)=>{
    this.evolution_data= data.chain;
    console.log(this.evolution_data);
    }
    )

  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  onSelect(name){
    this.router.navigate(['/pokemon-list',name])
  }

}
