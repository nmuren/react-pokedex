import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import { observer } from "mobx-react-lite";

import PokemonList from "views/content/PokemonList";
import PokemonSearchList from "views/content/PokemonSearchList";
import { MainContext } from "store/MainStore";
import TopBar from "views/layout/TopBar";

const PokemonListContainer = () => {
  const store = useContext(MainContext);

  return (
    <div className="content">
      <Container className="pb-4">
        <TopBar />
        {store.searchKey ? <PokemonSearchList /> : <PokemonList />}
      </Container>
    </div>
  );
};

export default observer(PokemonListContainer);
