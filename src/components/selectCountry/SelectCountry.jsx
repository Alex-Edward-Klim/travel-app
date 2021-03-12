import React from "react";
import "./selectCounty.scss";
import { useParams } from "react-router-dom";

import Map from "../map/Map";
import WidgetsWrapper from "../widgets-wrapper/WidgetsWrapper"

function SelectCountry() {
  const pr = useParams();

  return (
    <div>
      <div className="map">
        <Map name={pr.name} />
      </div>
        <WidgetsWrapper country={pr.name} />
    </div>
  );
}

export default SelectCountry;
