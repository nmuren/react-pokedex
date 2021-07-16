import React from "react";
import Card from "react-bootstrap/Card";
import { Link, useHistory, useLocation } from "react-router-dom";

const StyledCard = ({ url = "", img = "", title = "", text = "" }) => {
  const { pathname } = useLocation();
  const history = useHistory();

  return (
    <Link
      to={url}
      onClick={() => {
        history.push(pathname);
      }}
    >
      <Card className="h-100">
        <Card.Img
          variant="top"
          src={img}
          className="pt-2 align-self-center sized-img"
        />
        <Card.Body>
          <Card.Title className="mb-3">
            <span className="text-muted text-medium mx-1 ">{text}</span>
            {title}
          </Card.Title>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default StyledCard;
