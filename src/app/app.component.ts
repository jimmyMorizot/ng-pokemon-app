// on importe les éléments dont on va avoir besoin dans notre fichier
import { Component, OnInit } from "@angular/core";
import { POKEMONS } from "./mock-pokemon-list";
import { Pokemon } from "./pokemon";

// on utilise ici le fichier importé sous la forme d'un décorateur, qui va nous permettre de construire un composant web avec Angular
@Component({
  selector: "app-root", // permet de donner un nom à notre composant afin de l'identifier par la suite.
  templateUrl: "app.component.html", // pour séparer la logique et la vue, on créer un composant html dédié à ça
})
// permet d'exporter notre composant pour le rendre disponible ailleurs dans l'application
export class AppComponent implements OnInit {
  pokemonList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon | undefined;

  ngOnInit(): void {
    console.table(this.pokemonList);
  }

  selectPokemon(pokemonId: string) {
    const pokemon: Pokemon | undefined = this.pokemonList.find(
      (pokemon) => pokemon.id == +pokemonId
    );

    if (pokemon) {
      console.log(`Vous avez demandé le pokemon ${pokemon.name}`);
      this.pokemonSelected = pokemon;
    } else {
      console.log(`Vous avez demandé un pokemon qui n'existe pas.`);
      this.pokemonSelected = pokemon;
    }
  }
}
