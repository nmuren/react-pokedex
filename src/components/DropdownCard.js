import React from "react";
import Card from "react-bootstrap/Card";
import Dropdown from "react-bootstrap/Dropdown";

const DropdownCard = ({
  className = "",
  value = "Item per page",
  itemList = [],
  separatedItemList = [],
  onClick = () => {},
}) => {
  return (
    <Card className={className}>
      <Card.Body>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            {value}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {itemList.map((item) => (
              <Dropdown.Item onClick={onClick} key={item}>
                {item}
              </Dropdown.Item>
            ))}
            {separatedItemList.length > 0 && (
              <>
                <Dropdown.Divider />
                {separatedItemList.map((item) => (
                  <Dropdown.Item onClick={onClick} key={item}>
                    {item}
                  </Dropdown.Item>
                ))}
              </>
            )}
          </Dropdown.Menu>
        </Dropdown>
      </Card.Body>
    </Card>
  );
};
export default DropdownCard;
