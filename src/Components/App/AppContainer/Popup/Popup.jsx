import React, { Fragment } from 'react';

const Popup = ({ setHomeDefault }) => {
  return (
    <Fragment>
      <section className="popup--container">
        <section className="popup--content">
          <p>Do you want to save this location as default?</p>
          <div className="options--content">
            <div
              role="button"
              className=" option--btn option--content-yes"
              onClick={() => setHomeDefault('yes')}
            >
              Yes
            </div>
            <div
              role="button"
              className=" option--btn option--content-no"
              onClick={() => setHomeDefault('no')}
            >
              No
            </div>
          </div>
        </section>
      </section>
    </Fragment>
  );
};

export default Popup;
