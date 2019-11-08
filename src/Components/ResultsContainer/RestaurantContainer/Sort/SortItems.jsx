import React from "react";
import "./sort.css";
const SortItems = props => {
  const sortOptions = ["Ascending", "Descending"];
  return (
    <ul>
      {sortOptions.map((sort, i) => (
        <li key={sort} className="sort__dropdonw-items p-2">
          {sort}
        </li>
      ))}{" "}
    </ul>
  );
};

export default SortItems;
