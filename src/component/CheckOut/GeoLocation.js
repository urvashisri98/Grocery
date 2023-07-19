import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import { GOOGLE_API_KEY } from "../Constant/Constant";
import styled from "styled-components";

const Container = styled.div`
  align-items: center;
  width: 1000px;
  height: 600px;
  // background : green;
`;
class GeoLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      longitude: null,
      userAddress: null,
    };
    this.getlocation = this.getlocation.bind(this);
    this.getCoordinates = this.getCoordinates.bind(this);
    this.reverseGeocodeCoordinates = this.reverseGeocodeCoordinates.bind(this);
  }
  getlocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this.getCoordinates,
        this.handleLocationError,
        // this.reverseGeocodeCoordinates
      );
    } else {
      alert("Geolocation not supported");
    }
  }

  getCoordinates(position) {
    // console.log(position.coords.latitude);
    this.setState({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    });
  }

  reverseGeocodeCoordinates() {
    const Lat = 50.1;
    const Lng = -97.3;
    let url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${Lat},${Lng}&key=${GOOGLE_API_KEY}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log("Address",data);
      }
      ).catch(err =>console.warn(err.message))
  }
  

  handleLocationError(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        alert("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        alert("The request to get user location timed out.");
        break;
      case error.UNKNOWN_ERROR:
        alert("An unknown error occurred.");
        break;
      default:
        alert("An unknown error occurred.");
    }
  }

  render() {
    return (
      <Container>
        <button onClick={this.getlocation}>Get coordinates</button>
        <p>latitude:{this.state.latitude}</p>
        <p>longitude:{this.state.longitude}</p>
        <p>Address : {this.state.userAddress}</p>
        <button onClick={this.reverseGeocodeCoordinates}>Get Address</button>
        {this.state.latitude && this.state.longitude ? (
          <Map
            google={this.props.google}
            style={{ width: "65%", height: "65%" }}
            zoom={14}
            initialCenter={{
              lat: this.state.latitude,
              lng: this.state.longitude,
            }}
          >
            <Marker onClick={this.onMarkerClick} name={"Current location"} />

            <InfoWindow onClose={this.onInfoWindowClose}></InfoWindow>
          </Map>
        ) : (
          " "
        )}
      </Container>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: GOOGLE_API_KEY,
})(GeoLocation);
