import React, { Fragment, Component } from 'react';
import ResultsContainer from './ResultsContainer';

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPlace: {},
      activeMarker: {},
      showingInfoWindow: false,
      showForm: false
    };
  }

  onMarkerClick = (props, marker, e) => {
    console.log('this is the marker', marker);
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showInfoWindow: true
    });

    // console.log('Marker click state', this.state);
  };

  onClose = props => {
    if (this.state.showingInfoWindow && this.state.showModal) {
      this.setState({
        showInfoWindow: false,
        activeMarker: null
      });
    }
  };

  handleFormOpen = e => {
    e.preventDefault();

    this.setState({
      showForm: true
    });
  };

  handleCloseForm = () => {
    this.setState({
      showForm: false
    });
  };

  render() {
    return (
      <Fragment>
        <ResultsContainer
          {...this.state}
          {...this.props}
          onClose={this.onClose}
          onIconClick={this.onMarkerClick}
          handleCloseForm={this.handleCloseForm}
          handleFormDisplay={this.handleFormOpen} // onPageChange={onPageChange}
        />
      </Fragment>
    );
  }
}

export default Container;
