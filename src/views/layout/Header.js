import React from "react";
import Container from "react-bootstrap/Container";

import logo from "assets/img/logo.png";

const Header = () => (
  <Container fluid>
    <div className="d-flex justify-content-center my-4">
      <img src={logo} alt="logo" />
    </div>
  </Container>
);
export default Header;
