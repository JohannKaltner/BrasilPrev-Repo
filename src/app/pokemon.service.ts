import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Pokemon } from './pokemon-list/pokemon'; 
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(
    private http: HttpClient, ) { }

  protected getHeaders() {
    const requestHeaders = new HttpHeaders();
    requestHeaders.set('Content-Type', 'application/json'); 
    requestHeaders.set('X-Api-Key', environment.apiKey);
    return { headers: requestHeaders };
  } 
  
  getPokemonList(page) {
     const Params = new HttpParams()
     .set('page', page)
     .set('pageSize', '15'); 
    return this.http.get(environment.urls.pokemonList +'?'+ Params.toString(), this.getHeaders())
      .toPromise()
      .then((res:any) => {
        let response = res;
        let pokemonList = [];
        // let index:number;
        response['cards'].forEach((entry, i) => { 
          let pokemon = entry;
          pokemon['index'] = i  
          pokemonList.push(entry); 
         });
        return pokemonList; 
      });
  }

  getPokemonInfo(id: number) {
    return this.http.get(environment.urls.pokemonList+'/' + id, this.getHeaders())
      .toPromise()
      .then((res:any) => {
        let pokemon = res.card;
       
        return pokemon;
      });
  }
}
