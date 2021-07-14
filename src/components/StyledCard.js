import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const StyledCard = ({ url = "", img = "", title = "", text = "" }) => {
  return (
    <Card className={`styled-card`}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        {url ? (
          <Link to={url}>
            <Card.Title className="mb-3">{title}</Card.Title>
          </Link>
        ) : (
          <Card.Title className="mb-3">{title}</Card.Title>
        )}
        <Card.Text className="text-muted">{text}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default StyledCard;
