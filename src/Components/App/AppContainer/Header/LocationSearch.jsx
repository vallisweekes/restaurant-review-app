import React, { Fragment } from 'react';
// import Input from './Input';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from 'react-places-autocomplete';
class LocationSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      coordinates: { lat: this.props.lat, lng: this.props.lat },
      showDropDown: false
    };
    this.seachInput = React.createRef();
  }

  componentDidMount() {
    this.handleChange = address => {
      this.setState({ address });
    };

    this.handleSelect = async value => {
      const results = await geocodeByAddress(value);
      const latLng = await getLatLng(results[0]);
      this.setState({
        address: value,
        coordinates: {
          lat: latLng.lat,
          lng: latLng.lng
        }
      });

      this.props.searchLatLng(this.state.coordinates);
      // this.clearSearch();
    };
  }

  render() {
    const { address } = this.state;
    const searchClass = address
      ? 'search--input-wrap box-shadow-none'
      : ' search--input-wrap';
    return (
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
        highlightFirstSuggestion={true}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <Fragment>
            <div className={searchClass}>
              <i className="fa fa-search"></i>
              <input
                id="search--box"
                className="mt-2 search  justify-content-center"
                {...getInputProps({
                  placeholder: 'Search Places ...',
                  className: 'location-search-input'
                })}
              />
            </div>
            <div
              className="autocomplete-dropdown-container"
              style={{
                borderBottomLeftRadius: '10px',
                borderBottomRightRadius: '10px',
                borderRight: '1px solid #d4d4d4',
                borderLeft: '1px solid #d4d4d4',
                borderBottom: '1px solid #d4d4d4'
              }}
            >
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };

                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </Fragment>
        )}
      </PlacesAutocomplete>
    );
  }
}

export default LocationSearch;
