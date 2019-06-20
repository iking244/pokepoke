import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError as observableThrowError, Observable } from 'rxjs';
import {  PokemonLink, PokemonDetails } from './_models/pokemon';
import { catchError } from 'rxjs/operators';

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
private url = 'https://pokeapi.co/api/v2/pokemon?offset=850&limit=100';
private pokemonUrl = 'https://pokeapi.co/api/v2/pokemon/';
private pokemonSpeciesUrl = 'https://pokeapi.co/api/v2/pokemon-species/';
  constructor(private http: HttpClient, private router: Router) { }

  getPokemon(): Observable<PokemonLink[]> {
    return this.http.get<any>(this.url);
  }
  getPokemonInfo(name): Observable<PokemonDetails>{
    return this.http.get<PokemonDetails>(this.pokemonUrl + name).pipe(
      catchError(this.errorHandler));
  }

  getPokemonDesc(name){
    return this.http.get<any>(this.pokemonSpeciesUrl+ name);
  }

  errorHandler(error : HttpErrorResponse){
    console.log(error.message);
    return observableThrowError(error.message || 'server error ');
  }



 
}
