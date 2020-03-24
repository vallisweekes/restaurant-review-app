import React, { Component } from 'react';

class Star extends Component {
  render() {
    const { onMouseEnter, onMouseLeave, onClick, rating, starId } = this.props;
    let styleColor = 'stars-blank';

    if (rating >= starId) {
      styleColor = 'stars-filled';
    }
    return (
      <div
        className="stars--container"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
      >
        <svg
          className={styleColor}
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="35"
          viewBox="0 0 25 25"
        >
          <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
        </svg>
      </div>
    );
  }
}

Star.propTypes = {};

export default Star;
