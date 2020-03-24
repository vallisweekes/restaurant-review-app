import React, { Fragment } from 'react';
import SortItems from './SortItems';
// import PropTypes from 'prop-types';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import './sort.css';
class Sort extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSortItems: false
    };
    this.onShowSort = this.onShowSort.bind(this);
  }

  onShowSort() {
    this.setState(state => ({
      showSortItems: !state.showSortItems
    }));
  }

  render() {
    const { onSort } = this.props;

    return (
      <Fragment>
        <div className="dropdown">
          <button
            className=" btn btn__style"
            type="button"
            onClick={this.onShowSort}
          >
            {this.props.label}
            {this.state.showItems ? (
              <span>
                <ArrowDropUpIcon> ArrowDropUpIcon </ArrowDropUpIcon>{' '}
              </span>
            ) : (
              <ArrowDropDownIcon> ArrowDropDownIcon </ArrowDropDownIcon>
            )}
          </button>
          <div style={{ display: this.state.showSortItems ? 'block' : 'none' }}>
                   
            <SortItems onSort={onSort} />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Sort;
