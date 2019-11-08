import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";
import "./pagination.css";

const Pagination = props => {
  const { itemsCount, pageSize, currentPage, onPageChange } = props;

  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);
  return (
    <nav aria-label="pagination">
      <div className="pagination__">
        {pages.map(page => (
          <div
            key={page}
            className={
              page === currentPage
                ? "page-item active pagination__item-link"
                : "page-item pagination__item-link"
            }
            onClick={() => onPageChange(page)}
          >
            {page}
          </div>
        ))}
      </div>
    </nav>
  );
};

Pagination.prototype = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
};
export default Pagination;
