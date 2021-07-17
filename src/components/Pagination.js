import React, { useMemo } from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({
  active = 1,
  total = 0,
  dataPerPage = 1,
  marginPagesDisplayed = 2,
  pageRangeDisplayed = 5,
  onChange,
}) => {
  const pageCount = useMemo(
    () => Math.ceil(total / Math.max(1, dataPerPage)),
    [total, dataPerPage]
  );

  const handlePageChange = ({ selected }) => {
    onChange(selected + 1);
  };

  return (
    <ReactPaginate
      previousLabel="previous"
      previousClassName="text-muted"
      nextLabel="next"
      nextClassName="text-muted"
      breakLabel="..."
      breakClassName="text-muted"
      pageCount={pageCount}
      pageClassName="text-muted"
      initialPage={active - 1}
      forcePage={active - 1}
      marginPagesDisplayed={marginPagesDisplayed}
      pageRangeDisplayed={pageRangeDisplayed}
      onPageChange={handlePageChange}
      containerClassName="custom-pagination"
      activeClassName="custom-pagination-active"
      disabledClassName="custom-pagination-disabled"
    />
  );
};

export default Pagination;
