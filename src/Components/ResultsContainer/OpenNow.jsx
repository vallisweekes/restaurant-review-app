import React from "react";
// import PropTypes from 'prop-types';
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

class OpenNow extends React.Component {
  render() {
    console.log(this.props);
    return (
      <button className="btn__style btn__style-round" type="button">
        <span className="open">
          <FiberManualRecordIcon fontSize={"small"}>
            FiberManualRecordIcon
          </FiberManualRecordIcon>
        </span>{" "}
        {this.props.label}
      </button>
    );
  }
}

export default OpenNow;
