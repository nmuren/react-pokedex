import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

import { capitalizeText } from "utils/commonUtils";

const StyledCard = ({ url = "", img = "", title = "", text = "" }) => {
  return (
    <Link to={url}>
      <Card className="h-100">
        <Card.Img
          variant="top"
          src={img}
          className="pt-2 align-self-center sized-img"
        />
        <Card.Body>
          <Card.Title className="mb-3">
            <span className="text-muted text-medium mx-1 s">
              {`#${text.padStart(3, 0)}`}
            </span>
            {capitalizeText(title)}
          </Card.Title>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default StyledCard;
