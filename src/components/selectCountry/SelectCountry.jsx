import React, { useRef, useEffect } from "react";
import "./selectCounty.scss";
import { useParams } from "react-router-dom";

import Map from "../map/Map";

function SelectCountry() {
  const pr = useParams();

  return (
    <div>
      <div>Hello from {pr.name}</div>
      <div className="map">
        <Map name={pr.name} />
      </div>
    </div>
  );
}

export default SelectCountry;
