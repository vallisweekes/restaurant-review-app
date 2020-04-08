import React, { Fragment } from 'react';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import PropTypes from 'prop-types';

const RestaurantClose = () => {
  return (
    <Fragment>
      <p className="restaurant--hours-close ml-1">
        Closed
        <span className="restaurant--hours-close-icon">
          <FiberManualRecordIcon fontSize={'small'}>
            FiberManualRecordIcon
          </FiberManualRecordIcon>
        </span>
      </p>
    </Fragment>
  );
};

RestaurantClose.propTypes = {
  openingHours: PropTypes.object,
};

export default RestaurantClose;
