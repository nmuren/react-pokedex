import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Link } from "react-router-dom";

import search from "assets/img/search-icon.png";

const SearchBox = ({ baseUrl = "", className = "", placeholder = "" }) => {
  const [searchText, setSearchText] = useState("");

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
              setSearchText(event.target.value);
            }}
          />
          <InputGroup.Append>
            <button type="button">
              <Link to={`${baseUrl}/${searchText}`}>
                <img src={search} alt="search" width="24" height="24" />
              </Link>
            </button>
          </InputGroup.Append>
        </InputGroup>
      </Card.Body>
    </Card>
  );
};
export default SearchBox;
