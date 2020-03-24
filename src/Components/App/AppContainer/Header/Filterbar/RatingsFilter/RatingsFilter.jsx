import React, { Fragment } from 'react';
import RatingsFilterItems from './RatingsFilterItems/RatingsFilterItems';
// import PropTypes from 'prop-types';

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

class RatingsFilter extends React.Component {
  state = {
    showItems: false
  };

  onShowItems = () => {
    this.setState(state => ({
      showItems: !this.state.showItems
    }));
  };

  closeFilterBackgrond = () => {
    console.log('Background');
    // this.setState({
    //   showItems: false
    // });
  };
  render() {
    return (
      <Fragment>
        <span>Filter By:</span>
        <button
          className=" btn btn__style"
          type="button"
          onClick={this.onShowItems}
        >
          {this.props.label}
          {this.state.showItems ? (
            <span>
              <ArrowDropUpIcon> ArrowDropUpIcon </ArrowDropUpIcon>{' '}
            </span>
          ) : (
            <ArrowDropDownIcon> ArrowDropDownIcon </ArrowDropDownIcon>
          )}{' '}
        </button>
        <div
          onClick={this.closeFilterBackgrond}
          className="ratings__dropdown-background"
          style={{ display: this.state.showItems ? 'block' : 'none' }}
        >
          <div className="ratings__dropdown-menu">
                  
            <RatingsFilterItems
              onSelectedNum={this.props.selectedRating}
              onRatingChecked={this.props.onRatingChecked}
              ratings={this.props.ratings}
            />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default RatingsFilter;
