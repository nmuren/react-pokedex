import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => (
  <Container fluid>
    <Row className="p-4 footer">
      <Col sm={12} md={6}>
        Copyright 2021 by Nebil. All Rights Reserved.
      </Col>
      <Col sm={12} md={6}>
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
          alt="javascript"
          width="30"
          height="30"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png"
          alt="react"
          width="30"
          height="30"
        />
        <img
          src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
          alt="git"
          width="30"
          height="30"
        />
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
          alt="bootstrap"
          width="30"
          height="30"
        />
        <img
          src="https://sass-lang.com/assets/img/styleguide/seal-color-aef0354c.png"
          alt="sass"
          width="30"
          height="30"
        />
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
          alt="css3"
          width="30"
          height="30"
        />
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
          alt="html5"
          width="30"
          height="30"
        />
      </Col>
    </Row>
  </Container>
);
export default Footer;
