// on importe les éléments dont on va avoir besoin dans notre fichier
import { Component, OnInit } from "@angular/core";
import { POKEMONS } from "./mock-pokemon-list";
import { Pokemon } from "./pokemon";

// on utilise ici le fichier importé sous la forme d'un décorateur, qui va nous permettre de construire un composant web avec Angular
@Component({
  selector: "app-root", // permet de donner un nom à notre composant afin de l'identifier par la suite.
  template: `<h1>Liste de Pokémons</h1> `, // on définit le code HTML qui est associé à ce composant web
})
// permet d'exporter notre composant pour le rendre disponible ailleurs dans l'application
export class AppComponent implements OnInit {
  pokemonList: Pokemon[] = POKEMONS;

  ngOnInit(): void {
    console.table(this.pokemonList);
    this.selectPokemon(this.pokemonList[0]);
  }

  selectPokemon(pokemon: Pokemon) {
    console.log(`Vous avez cliqué sur le pokemon ${pokemon.name}`);
  }
}
