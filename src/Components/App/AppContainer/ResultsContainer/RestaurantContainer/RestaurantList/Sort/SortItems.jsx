import React, { Component } from 'react';
import './sort.css';
class SortItems extends Component {
  render() {
    const { onSort } = this.props;
    const sortOptions = ['name'];
    return (
      <ul className="sort--dropdown" aria-labelledby="SortDropDown">
        {sortOptions.map((sort, i) => (
          <li
            key={i}
            className="sort--dropdown-items"
            onClick={() => onSort(sort)}
          >
            {sort}
          </li>
        ))}{' '}
      </ul>
    );
  }
}

export default SortItems;
