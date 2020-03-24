import React from 'react';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
// import PropTypes from 'prop-types';

const RestaurantOpen = ({ restarauntResults }) => {
  restarauntResults &&
    restarauntResults.map(result => {
      return (
        <footer className="b_times rest__card-footer ">
          <div className="rest__card-footer-inner flex__items-row">
            <div className="businessHours-left">
              {result.opening_hours ? (
                <div className="rest__card-opentimes">
                  <span className="open">
                    <FiberManualRecordIcon fontSize={'small'}>
                      FiberManualRecordIcon
                    </FiberManualRecordIcon>
                  </span>
                  Open Now{' '}
                </div>
              ) : (
                <div className="rest__card-close">
                  <span className="close">
                    <FiberManualRecordIcon fontSize={'small'}>
                      FiberManualRecordIcon
                    </FiberManualRecordIcon>
                  </span>
                  Closed
                </div>
              )}
            </div>{' '}
            <div className="businessHours-right">
              {' '}
              {/*time !== result.opening_hours.periods[0].close.time ? (
              <div className="rest__card-opentimes">
                Opens At {result.opening_hours.periods[0].open.time}{" "}
              </div>
            ) : (
              <div className="rest__card-close">
                Closes At {result.opening_hours.periods[0].close.time}{" "}
              </div>
            )*/}
            </div>
          </div>
        </footer>
      );
    });
};

// esult.opening_hours

export default RestaurantOpen;
