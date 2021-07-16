import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { reaction } from "mobx";

import Routes from "routing/Routes";
import Header from "views/layout/Header";
import Footer from "views/layout/Footer";
import TopBar from "views/layout/TopBar";
import MainStore, { MainProvider } from "store/MainStore";

function App() {
  const storedFavoritePokemons =
    JSON.parse(localStorage.getItem("favoritePokemons")) || [];
  const store = new MainStore({ storedFavoritePokemons });
  window.store = store;

  reaction(
    () => JSON.stringify(store.favoritePokemons),
    (favoritePokemons) => {
      localStorage.setItem("favoritePokemons", favoritePokemons);
    }
  );

  return (
    <MainProvider store={store}>
      <Router>
        <Header />
        <div className="content">
          <Container className="pb-3">
            <TopBar />
            <Routes />
          </Container>
        </div>
        <Footer />
      </Router>
    </MainProvider>
  );
}

export default App;
