

import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { useEffect, useState } from "react";
import { Marker } from "@react-google-maps/api";


const Map = ({ location }) => {
  const mapStyles = {
    width: "400px",
    height: "200px",
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyAwABroHb-gi9J33U6UjOB0IX9X5AlG1xY">
      <GoogleMap mapContainerStyle={mapStyles} zoom={15} center={location}>
        <Marker position={location} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;