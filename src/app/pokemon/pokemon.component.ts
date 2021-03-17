import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon-list/pokemon';
import { ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  pokemon: Pokemon = new Pokemon();
  isChecked: Boolean = false;
  isLoading: Boolean = true;
  error: Boolean = false;

  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];

    this.pokemonService.getPokemonInfo(id)
      .then((pokemon) => {
        this.pokemon = pokemon;
        this.isLoading = false;
      })
      .catch(() => {
        this.error = true;
        this.isLoading = false;
      });
  }
 
}
 
