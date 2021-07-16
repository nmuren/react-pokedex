import React, { useContext } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { observer } from "mobx-react-lite";

import { MainContext } from "store/MainStore";
import { ITEM_PER_PAGE_LIST } from "contants/listContants";
import DropdownCard from "components/DropdownCard";
import SearchBox from "components/SearchBox";

const TopBar = () => {
  const store = useContext(MainContext);

  return (
    <Row className="pt-3">
      <Col>asdasd</Col>
      <Col className="d-flex justify-content-end ">
        <DropdownCard
          className="mx-4 p-2"
          text="Items per page:"
          value={store.itemPerPage}
          itemList={ITEM_PER_PAGE_LIST}
          onClick={(event) => {
            store.setValue("itemPerPage", event.target.innerText);
          }}
        />
        <SearchBox
          className="p-2"
          onSearchChanged={(searchKey) => {
            store.setValue("searchKey", searchKey);
          }}
          placeholder="Pokemon ID or Name..."
        />
      </Col>
    </Row>
  );
};
export default observer(TopBar);
