import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "routing/Routes";
import Header from "views/layout/Header";
import Footer from "views/layout/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes />
      <Footer />
    </Router>
  );
}

export default App;
