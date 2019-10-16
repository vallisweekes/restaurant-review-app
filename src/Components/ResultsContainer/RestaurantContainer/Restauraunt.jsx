import React from "react";

const Restauraunt = ({ data: results }) => {
  console.log(results[0]);
  return (
    <section className="rest__card">
      <div className="rest__card-img">
        <img alt="my img" />
      </div>
      <div className="rest__card-info">
        <div className="rest__card-type">{}</div>
        <div className="rest__card-name"></div>
        <div className="rest__card-address"></div>
        <div className="rest__card-starrating"></div>
        <div className="rest__card-reviewstotal"></div>
        <div className="rest__card-opentimes"></div>
        <div className="rest__card-close"></div>
      </div>
    </section>
  );
};

export default Restauraunt;
