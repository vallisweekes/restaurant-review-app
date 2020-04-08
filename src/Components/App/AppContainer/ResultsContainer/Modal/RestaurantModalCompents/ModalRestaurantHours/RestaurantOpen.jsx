import React, { Fragment } from 'react';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import PropTypes from 'prop-types';

const RestaurantOpen = () => {
  return (
    <Fragment>
      <p className="restaurant--hours-open ml-1">
        Open
        <span className="restaurant--hours-open-icon">
          <FiberManualRecordIcon fontSize={'small'}>
            FiberManualRecordIcon
          </FiberManualRecordIcon>
        </span>
      </p>
    </Fragment>
  );
};

RestaurantOpen.propTypes = {
  openingHours: PropTypes.object,
};

export default RestaurantOpen;
