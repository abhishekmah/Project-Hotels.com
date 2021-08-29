import React from 'react'
import { Component } from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},

    mapCenter:{
      lat: 49.28,
      lng: -123.12
    },
    size: {
      width: "600px",
      height: "400px"
  }
  };
 
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      zoom: "4",
      showingInfoWindow: false,
      size: {
        width: "600px",
        height: "400px"
    }
    });
 
  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };
 
  render() {
    console.log(this.props)
    return (
      <Map 
      google={this.props.google}
      initialCenter={{
        lat: this.state.mapCenter.lat,
        lng: this.state.mapCenter.lng
      }}
          >
        <Marker 
         position = {{
          lat: this.state.mapCenter.lat,
          lng: this.state.mapCenter.lng,
         }}
         />
 
      </Map>
    )
  }
}
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyDXWDIoMaLBrQ3p1zE0_XgWBvoaARcDbRQ")
})(MapContainer)