import React from "react";
import Layout from "../components/layout";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const NeighborhoodMapPage = ({ data }) => (
  <Layout>
    <GoogleMapReact
      bootstrapURLKeys={{ key: "AIzaSyA0MfBo0tSiZouSEJCINIPmnDcoGR5mEgc" }}
      defaultCenter={{
        lat: 59.95,
        lng: 30.33
      }}
      defaultZoom={11}
    >
      <AnyReactComponent
        // lat={59.955413}
        // lng={30.337844}
        text="My Marker"
      />
    </GoogleMapReact>
  </Layout>
);

export default NeighborhoodMapPage;
