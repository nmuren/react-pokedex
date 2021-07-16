import React, { createContext } from "react";
import { makeAutoObservable } from "mobx";

export const MainContext = createContext(null);

export const MainProvider = ({ store, children }) => (
  <MainContext.Provider value={store}>{children}</MainContext.Provider>
);
class MainStore {
  //#region observable
  itemPerPage = 12;

  searchKey = "";

  favoritePokemons = [];
  //#endregion observable

  constructor({ storedFavoritePokemons }) {
    this.favoritePokemons = storedFavoritePokemons;
    makeAutoObservable(this);
  }

  //#region action
  setValue = (key, value) => {
    this[key] = value;
  };

  addFavorite = (pokemon) => {
    this.favoritePokemons.push(pokemon);
  };

  removeFavorite = (id) => {
    this.favoritePokemons = this.favoritePokemons.filter(
      (pokemon) => pokemon.id !== id
    );
  };

  clearFavorites = () => {
    this.favoritePokemons = [];
  };
  //#endregion action
}
export default MainStore;
