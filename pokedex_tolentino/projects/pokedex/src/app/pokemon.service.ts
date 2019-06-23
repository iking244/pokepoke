import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError as observableThrowError, Observable } from 'rxjs';
import {  PokemonLink, PokemonDetails } from './_models/pokemon';
import { catchError, map } from 'rxjs/operators';

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
private url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=964';
private pokemonUrl = 'https://pokeapi.co/api/v2/pokemon/';
private pokemonSpeciesUrl = 'https://pokeapi.co/api/v2/pokemon-species/';
private pokemonTypes= 'https://pokeapi.co/api/v2/type/';
  constructor(private http: HttpClient, private router: Router) { }

  getPokemon(): Observable<PokemonLink[]> {
    return this.http.get<any>(this.url);
  }
  getPokemonInfo(name): Observable<PokemonDetails>{
    return this.http.get<PokemonDetails>(this.pokemonUrl + name).pipe(
      catchError(this.errorHandler));
  }

  getPokemonDesc(name){
    return this.http.get<any>(this.pokemonSpeciesUrl+ name).pipe(
      catchError(this.errorHandler));
  }

  getPokemonByType(type){
    return this.http.get<any>(this.pokemonTypes + type).pipe(
      catchError(this.errorHandler));
  }

  getEvolutionChain(url){
    return this.http.get<any>(url);
  }

  errorHandler(error : HttpErrorResponse){
    console.log(error.message);
    return observableThrowError(error.message || 'server error ');
  }

 



 
}
