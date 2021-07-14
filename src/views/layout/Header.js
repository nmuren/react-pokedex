import React from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

import logo from "assets/img/logo.png";

const Header = () => (
  <Container fluid>
    <div className="d-flex justify-content-center my-4">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
    </div>
  </Container>
);
export default Header;
