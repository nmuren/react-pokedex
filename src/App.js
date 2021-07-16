import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Container from "react-bootstrap/Container";

import Routes from "routing/Routes";
import Header from "views/layout/Header";
import Footer from "views/layout/Footer";
import MainStore, { MainProvider } from "store/MainStore";

function App() {
  const storedFavoritePokemons = localStorage.getItem("favoritePokemons") || [];
  const store = new MainStore({ storedFavoritePokemons });
  window.store = store;

  return (
    <MainProvider store={store}>
      <Router>
        <Header />
        <div className="content">
          <Container className="pb-3">
            <Routes />
          </Container>
        </div>
        <Footer />
      </Router>
    </MainProvider>
  );
}

export default App;
