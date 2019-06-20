import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {  PokemonLink, PokemonDetails } from './_models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
private url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=100';
private pokemonUrl = 'https://pokeapi.co/api/v2/pokemon/';
private pokemonSpeciesUrl = 'https://pokeapi.co/api/v2/pokemon-species/';
  constructor(private http: HttpClient) { }

  getPokemon(): Observable<PokemonLink[]> {
    return this.http.get<any>(this.url);
  }
  getPokemonInfo(name){
    return this.http.get<PokemonDetails>(this.pokemonUrl + name);
  }

  getPokemonDesc(name){
    return this.http.get<any>(this.pokemonSpeciesUrl+ name);
  }



 
}
