import React, { useContext } from "react";
import { observer } from "mobx-react-lite";

import PokemonList from "views/content/PokemonList";
import PokemonSearchList from "views/content/PokemonSearchList";
import { MainContext } from "store/MainStore";
import TopBar from "views/layout/TopBar";

const PokemonListContainer = () => {
  const store = useContext(MainContext);

  return (
    <>
      <TopBar />
      {store.searchKey ? <PokemonSearchList /> : <PokemonList />}
    </>
  );
};

export default observer(PokemonListContainer);
