// import React, { Component } from 'react';

// class DistanceMatrix extends Component {
//   // constructor (props){
//   //   super(props)
//   // }
//   componentDidMount() {
//     const distance = this.callback;
//     const { lat, lng, google, restaurauntLocation } = this.props;
//     console.log(
//       lat,
//       lng,
//       google.maps.DistanceMatrixService,
//       restaurauntLocation
//     );

//     const service = new google.maps.DistanceMatrixService();
//     service.getDistanceMatrix(
//       {
//         origins: [origin],
//         destinations: [restaurauntLocation],
//         travelMode: 'DRIVING',

//         avoidHighways: true,
//         avoidTolls: true
//       },
//       distance
//     );

//     this.callback = (response, status) => {
//       if (status === 'OK') {
//         console.log('Statyus', status);
//         var origins = response.originAddresses;
//         var destinations = response.destinationAddresses;
//         console.log('Distance', origins);
//         // for (var i = 0; i < origins.length; i++) {
//         //   var results = response.rows[i].elements;
//         //   for (var j = 0; j < results.length; j++) {
//         //     var element = results[j];
//         //     var distance = element.distance.text;
//         //     var duration = element.duration.text;
//         //     var from = origins[i];
//         //     var to = destinations[j];
//         //   }
//         // }
//       }
//     };
//   }

//   render() {
//     return <div>hi</div>;
//   }
// }

// export default DistanceMatrix;
