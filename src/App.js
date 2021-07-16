import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "routing/Routes";
import Header from "views/layout/Header";
import Footer from "views/layout/Footer";
import MainStore, { MainProvider } from "store/MainStore";

function App() {
  const storedFavoritePokemons = localStorage.getItem("favoritePokemons") || [];
  const store = new MainStore({ storedFavoritePokemons });

  return (
    <MainProvider store={store}>
      <Router>
        <Header />
        <Routes />
        <Footer />
      </Router>
    </MainProvider>
  );
}

export default App;
