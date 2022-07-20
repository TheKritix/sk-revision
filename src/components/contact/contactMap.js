import React from "react";

import { GoogleMap, LoadScript } from "@react-google-maps/api";
const lib = ["places"];
const id = ["8e0a97af9386fef"];
const key = "AIzaSyCUvWxBDGy5fk52SrJcX52ehCElbogMwW0"; // PUT GMAP API KEY HERE
const defaultLocation = { lat: 40.756795, lng: -73.954298 };

class Map extends React.Component {
  render() {
    return (
      <div>
        <LoadScript googleMapsApiKey={key} libraries={lib} mapIds={id}>
          <GoogleMap
            center={defaultLocation}
            zoom={5}
            options={{ mapId: "8e0a97af9386fef" }}
            mapContainerStyle={{ height: "400px", width: "800px" }}
          />
        </LoadScript>
      </div>
    );
  }
}

export default Map;
