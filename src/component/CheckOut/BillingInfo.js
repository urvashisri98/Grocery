import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { GOOGLE_API_KEY, User_URL } from "../Constant/Constant";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Geocode from "react-geocode";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  width: 670px;
  // height: 495px;
  background: white;
`;
const Wrapper1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 32px;
  width: "670px";
  position: relative;
  // height: 495px;
`;
const Heading = styled.div`
  width: 670px;
  height: 53px;
`;
const Title = styled.div`
  display: flex;
  width: 116px;
  height: 33px;
  left: 0px;
  top: 0px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 33px;
  color: #151515;
`;
const Instruction = styled.div`
  display: flex;
  align-items: center;
  width: 160px;
  height: 16px;
  left: 0px;
  top: 37px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #a9a9a9;
`;
const Step1 = styled.div`
  position: absolute;
  width: 60.01px;
  height: 16px;
  right: 0px;
  top: 37px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  text-align: right;
`;

const InputData = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 32px;
  width: 670px;
  height: 270px;
`;
const InputLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 32px;
  width: 319px;
  height: 336px;
`;

const InputBox = styled.div`
  position: relative;
  width: 319px;
  height: 60px;
`;
const InputHeading = styled.div`
  position: absolute;
  height: 18px;
  left: 0px;
  right: 0px;
  top: 0px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  color: #151515;
`;
const Input = styled.input`
  box-sizing: border-box;
  position: absolute;
  left: 0px;
  right: 0px;
  top: 18px;
  bottom: 0px;
  background: #f9f9f9;
  border: 1px solid #d1d1d1;
  border-radius: 12px;
  color: black;
`;
const InputRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 32px;

  width: 319px;
  height: 336px;
`;

const Checkbox = styled.button`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 9px 16px;
  gap: 8px;
  width: 160px;
  height: 42px;
  // background: chartreuse;
  border: 1px solid #d1d1d1;
  border-radius: 12px;
  cursor: pointer;
`;
const AddAddress = styled.button`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  // padding: 12px;
  gap: 6px;
  width: 150px;
  height: 42px;
  background: #6a983c;
  border: 2px solid #46760a;
  border-radius: 12px;
  cursor: pointer;
`;
const TextOrder = styled.div`
  // width: 122px;
  height: 23px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 19px;
  color: #ffffff;
`;
const Address = styled.div`
  width: 670px;
  height: 42px;
  flex-direction: row;
  display: flex;
  justify-content: space-between;
`;
const Locate = styled.div`
  color: green;
  cursor: pointer;
`;
const MapBox = styled.div`
  // width: 670px;
  height: 395px;
`;
function BillingInfo({ google }) {
  const [house, setHouse] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [disable, setDisable] = useState(false);
  const [place, setPlace] = useState({
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  });
  const [address, setAddress] = useState([]);

  let userInfo = JSON.parse(localStorage.getItem("userInfo"));

  const [location, setLocation] = useState({
    loaded: false,
    coordinates: { lat: null, lng: null },
  });

  const onSuccess = (location) => {
    // console.log(location);
    setLocation({
      loaded: true,
      coordinates: {
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      },
    });
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(onSuccess);
  }, []);

  const getlocation = () => {
    setDisable(true);
    setLatitude(location.coordinates.lat);
    setLongitude(location.coordinates.lng);
  };
  const onClose = () => {
    setDisable(false);
  };
  const onMarkerClick = (props, marker) => {
    setPlace({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });
    let url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${GOOGLE_API_KEY}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // const response = data.results;
        const address = data.results[0].formatted_address,
          addressArray = data.results[0].address_components,
          house = getHouse(addressArray),
          city = getCity(addressArray),
          street = getStreet(addressArray),
          district = getDistrict(addressArray),
          State = getState(addressArray),
          pincode = getPincode(addressArray);
        // console.log("===", response);
        // console.log("Address", addressArray);
        console.log(
          "House:",
          house,
          "city:",
          city,
          "District:",
          district,
          "State:",
          State,
          "Pincode:",
          pincode,
          "Street:",
          street
        );
        setHouse(house);
        setAddress(address);
        setDistrict(district);
        setStreet(street);
        setCity(city);
        setState(State);
        setPincode(pincode);
      })
      .catch((err) => console.warn(err.message));
  };

  const getHouse = (addressArray) => {
    let house = "";
    // for (let i = 0; i < addressArray.length; i++) {
    //   if (addressArray[i].types[0]) {
    //     for (let j = 0; j < addressArray[i].types.length; j++) {
    //       if ("plus_code" === addressArray[i].types[j]) {
    house = addressArray[0].long_name;
    return house;
  };
  // }
  //     }
  //   }
  // };

  const getStreet = (addressArray) => {
    let street = "";
    for (let i = 0; i < addressArray.length; i++) {
      if (addressArray[i].types[0]) {
        for (let j = 0; j < addressArray[i].types.length; j++) {
          if (
            "political" === addressArray[i].types[j] ||
            "sublocality" === addressArray[i].types[j]
          ) {
            street = addressArray[i].long_name;
            return street;
          }
        }
      }
    }
  };

  const getCity = (addressArray) => {
    let city = "";
    for (let i = 0; i < addressArray.length; i++) {
      if (
        addressArray[i].types[0] &&
        "administrative_area_level_2" === addressArray[i].types[0]
      ) {
        city = addressArray[i].long_name;
        return city;
      }
    }
  };

  const getDistrict = (addressArray) => {
    let area = "";
    for (let i = 0; i < addressArray.length; i++) {
      if (addressArray[i].types[0]) {
        for (let j = 0; j < addressArray[i].types.length; j++) {
          if (
            // "sublocality_level_1" === addressArray[i].types[j] ||
            "locality" === addressArray[i].types[j]
          ) {
            area = addressArray[i].long_name;
            return area;
          }
        }
      }
    }
  };

  const getState = (addressArray) => {
    let state = "";
    for (let i = 0; i < addressArray.length; i++) {
      for (let i = 0; i < addressArray.length; i++) {
        if (
          addressArray[i].types[0] &&
          "administrative_area_level_1" === addressArray[i].types[0]
        ) {
          state = addressArray[i].long_name;
          return state;
        }
      }
    }
  };
  const getPincode = (addressArray) => {
    let pincode = "";
    for (let i = 0; i < addressArray.length; i++) {
      if (
        addressArray[i].types[0] &&
        "postal_code" === addressArray[i].types[0]
      ) {
        pincode = addressArray[i].long_name;
        return pincode;
      }
    }
  };

  Geocode.setApiKey(GOOGLE_API_KEY);

  const onMarkerDragEnd = (event) => {
    console.log("Event", event.map.center);
    let newLat = event.map.center.lat(),
      newLng = event.map.center.lng();

    Geocode.fromLatLng(newLat, newLng).then(
      (response) => {
        const address = response.results[0].formatted_address,
          addressArray = response.results[0].address_components,
          house = getHouse(addressArray),
          city = getCity(addressArray),
          street = getStreet(addressArray),
          district = getDistrict(addressArray),
          State = getState(addressArray),
          pincode = getPincode(addressArray);
        console.log("NewAddress", addressArray);
        console.log(
          "city:",
          city,
          "District:",
          district,
          "State:",
          State,
          "Pincode:",
          pincode,
          "Street:",
          street
        );
        setHouse(house);
        setAddress(address);
        setDistrict(district);
        setStreet(street);
        setCity(city);
        setState(State);
        setPincode(pincode);
        setLatitude(newLat);
        setLongitude(newLng);
      },
      (error) => {
        console.error(error);
      }
    );
  };

  const collectAddress = async (
    Id,
    mobile,
    house,
    street,
    city,
    district,
    state,
    pincode,
    latitude,
    longitude
  ) => {
    console.log("running");

    let result = await fetch(`${User_URL}/api/address`, {
      method: "POST",
      body: JSON.stringify({
        id: Id,
        mobile,
        house,
        street,
        city,
        dist: district,
        state,
        pincode,
        latitude,
        longitude,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();

    console.log("Address", result);
    alert("Address added Successfully", result);
  };

  return (
    <Container>
      {console.log("Latitude", latitude, "Longitude", longitude)}
      <Wrapper1>
        <Heading>
          <Title>Billing Info</Title>
          <Instruction>Please enter your billing info</Instruction>
          <Step1>Step 1 of 5</Step1>
        </Heading>
        <InputData>
          <InputLeft>
            <InputBox>
              <InputHeading>House No:</InputHeading>
              <Input
                type="text"
                placeholder="House"
                value={house}
                onChange={(e) => setHouse(e.target.value)}
              />
            </InputBox>
            <InputBox>
              <InputHeading>City</InputHeading>
              <Input
                type="text"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </InputBox>
            <InputBox>
              <InputHeading>State</InputHeading>
              <Input
                type="text"
                placeholder="State"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
            </InputBox>
          </InputLeft>
          <InputRight>
            <InputBox>
              <InputHeading>Street</InputHeading>
              <Input
                type="text"
                placeholder="Street"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
              />
            </InputBox>
            <InputBox>
              <InputHeading>District</InputHeading>
              <Input
                type="text"
                placeholder="District"
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
              />
            </InputBox>
            <InputBox>
              <InputHeading>Pin Code</InputHeading>
              <Input
                type="number"
                placeholder="Pincode"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
              />
            </InputBox>
          </InputRight>
        </InputData>
        <InputBox>
          <InputHeading>Address</InputHeading>
          <Input
            style={{
              position: "absolute",
              width: 670,
              height: 40,
              background: "#f9f9f9",
              color: "black",
            }}
            type="text"
            placeholder="Address"
            value={address}
            readOnly="readOnly"
            onChange={(e) => setPincode(e.target.value)}
          />
        </InputBox>
        <Address>
          <AddAddress
            onClick={() =>
              collectAddress(
                userInfo.data.id,
                userInfo.data.mobile,
                house,
                street,
                city,
                district,
                state,
                pincode,
                latitude,
                longitude
              )
            }
          >
            <TextOrder>Add Address</TextOrder>
          </AddAddress>
          {!disable && (
            <Checkbox onClick={() => getlocation()}>
              <Instruction style={{ fontSize: 14 }}>
                <Locate>
                  <LocationOnIcon />
                </Locate>
                Use Location
              </Instruction>
            </Checkbox>
          )}
          {disable && <Checkbox onClick={() => onClose()}>Close</Checkbox>}
        </Address>
        {latitude && longitude && disable ? (
          <MapBox>
            <Map
              google={google}
              style={{ width: "100%", height: "48%" }}
              zoom={14}
              initialCenter={{
                lat: latitude,
                lng: longitude,
              }}
            >
              <Marker
                draggable={true}
                onDragend={onMarkerDragEnd}
                onClick={onMarkerClick}
                // name={"Current location"}
              />

              <InfoWindow
                marker={place.activeMarker}
                visible={place.showingInfoWindow}
              >
                <div>
                  <span>{address}</span>
                </div>
              </InfoWindow>
            </Map>
          </MapBox>
        ) : (
          ""
        )}
      </Wrapper1>
    </Container>
  );
}

export default GoogleApiWrapper({
  apiKey: GOOGLE_API_KEY,
})(BillingInfo);
