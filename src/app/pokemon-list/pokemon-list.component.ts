import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from './pokemon'; 

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit { 
  pokemonList: Pokemon[] = []; 
  pokemonGrid: Pokemon[] = [];
  pager: any = {};

  isLoading: Boolean = true;
 

  error: Boolean = false;
  page:number = 1;
  constructor(
    private pokemonService: PokemonService) { }

  ngOnInit() {
    this.getPokemons(1)
  }
  getPokemons(page) {
    this.pokemonList = []
    this.pokemonGrid = []
    this.pokemonService.getPokemonList(page)
    .then((pokemon) => { 
      this.isLoading = false; 
      this.pokemonList = pokemon; 
      this.pokemonList.forEach(p => {
           this.pokemonGrid.push(p); 
       })
    })
    .catch(() => {
      this.error = true;
      this.isLoading = false;
    });
  }
 
  setPage(type) {
    switch(type){
      case 'increment':
        this.page++
      break;
        case 'decrement':
        --this.page
        break;
    }
    if(this.page < 1){
      this.page = 1
      alert('Você já está na primeira página')
      return;
    } else if( this.page > 133){
      this.page = 133
      alert('Você está na ultima página')
      return;
    } 
    this.getPokemons(this.page)
  }
}
