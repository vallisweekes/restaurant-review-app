import React from 'react';

const Photo = ({ onChange }) => {
  return (
    <section className="add--photo">
      <div className="add--photo-content indent-left">
        <img
          className="add--photo-image"
          src="https://www.vallisweekes.com/img/cameraicon.png"
          alt=""
        />
      </div>
      <div className="add-photo-checkbox">
        <label>Default Image</label>
        <input type="checkbox" checked onChange={onChange} />
      </div>
    </section>
  );
};

export default Photo;
