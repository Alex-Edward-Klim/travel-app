import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "./map.scss";

mapboxgl.accessToken =
  "pk.eyJ1IjoieXVyYTI1MDY5MSIsImEiOiJja203emdiMjIxMnVxMm9tdGxlcDRkZXpyIn0.MBn74R_hf0eodqa26JqMHg";

function Map({ name }) {
  const relCountryCode = {
    France: "FRA",
    Australia: "AUS",
    Egypt: "EGY",
    Japan: "JPN",
    Switzerland: "CHE",
    Mexico: "MEX",
    USA: "USA",
    UK: "GBR",
  };
  const reCountryLngLtd = {
    France: [2.351556, 48.856663],
    Australia: [149.125529, -35.306904],
    Egypt: [31.2469, 30.050747],
    Japan: [139.753882, 35.6817],
    Switzerland: [8.534139, 47.386966],
    Mexico: [-99.133296, 19.432605],
    USA: [-77.036527, 38.899513],
    UK: [-0.12766, 51.507351],
  };
  const mapContainerRef = useRef(null);
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: reCountryLngLtd[name],
      zoom: 4,
      minZoom: 2,
    });

    map.addControl(new mapboxgl.NavigationControl(), "bottom-right");
    map.addControl(new mapboxgl.FullscreenControl());
    map.on("load", function () {
      map.addLayer({
        id: "countries",
        source: {
          type: "vector",
          url: "mapbox://byfrost-articles.74qv0xp0",
        },
        "source-layer": "ne_10m_admin_0_countries-76t9ly",
        type: "fill",
        paint: {
          "fill-color": "rgba( 21, 209, 4, .35)",
          "fill-outline-color": "rgba( 21, 209, 4, .35)",
        },
      });
      new mapboxgl.Marker().setLngLat(reCountryLngLtd[name]).addTo(map);

      map.setFilter(
        "countries",
        ["in", "ADM0_A3_IS", relCountryCode[name]]
      );
    });
    return () => map.remove();
  }, []);
  return <div className="map-container" ref={mapContainerRef} />;
}

export default Map;
