import React, { createContext } from "react";
import { makeAutoObservable } from "mobx";

class MainStore {
  // observable
  itemPerPage = 12;
  searchKey = "";
  favoritePokemons = [];

  constructor({ storedFavoritePokemons }) {
    this.favoritePokemons = storedFavoritePokemons;
    makeAutoObservable(this);
  }

  // action
  setValue = (key, value) => {
    this[key] = value;
  };
}
export default MainStore;

export const MainContext = createContext(null);

export const MainProvider = ({ store, children }) => (
  <MainContext.Provider value={store}>{children}</MainContext.Provider>
);
