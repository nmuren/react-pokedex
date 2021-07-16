import React from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import search from "assets/img/search-alternative-icon.png";

const SearchBox = ({
  className = "",
  placeholder = "",
  onSearchChanged = () => {},
}) => {
  return (
    <Card className={className}>
      <Card.Body>
        <InputGroup className="custom-searcbox">
          <Form.Control
            type="search"
            placeholder={placeholder}
            autoComplete="off"
            spellCheck="false"
            onChange={(event) => {
              onSearchChanged(event.target.value);
            }}
          />
          <InputGroup.Append>
            <img src={search} alt="search" width="24" height="24" />
          </InputGroup.Append>
        </InputGroup>
      </Card.Body>
    </Card>
  );
};
export default SearchBox;
