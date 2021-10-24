import React from "react";
import {
    ComposableMap,
    Geographies,
    Geography,
    Marker,
    ZoomableGroup
} from "react-simple-maps";
import Pagetitle from "../elements/Pagetitle";

const geoUrl =
    "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const markers = [
    {markerOffset: 15, name: "Mer Rouge", coordinates: [34.23984760329544,27.261408494184618] },
    { markerOffset: 15, name: "Océan Indien", coordinates: [ 39.86329952569493,-6.3001878887338245] },
    { markerOffset: 15, name: "Océan Indien", coordinates: [57.80234682092755,-20.43991839987648] },
    { markerOffset: 15, name: "Mer Méditerranée", coordinates: [6.4013487579846995,42.949655036781856] },
    { markerOffset: 15, name: "Océan Atlantique", coordinates: [-24.0083947,16.0000552] },
];

const rounded = num => {
    if (num > 1000000000) {
        return Math.round(num / 100000000) / 10 + "B";
    } else if (num > 1000000) {
        return Math.round(num / 100000) / 10 + "M";
    } else {
        return Math.round(num / 100) / 10 + "K";
    }
};

const MapChart = ({ setTooltipContent }) => {
    return (
        <section id="works">
            <div className="container">
                <Pagetitle title="Loisirs" />
                <div className="row">
                    <div className="col-md-6">
                        <div className="timeline edu bg-white rounded shadow-dark padding-30 overflow-hidden">
                            <h4>Lieux de plongée</h4>

                            <ComposableMap data-tip="" projection={"geoEqualEarth"} projectionConfig={{ scale: 200 }}>
                                <ZoomableGroup>
                                    <Geographies geography={geoUrl}>
                                        {({ geographies }) =>
                                            geographies.map(geo => (
                                                <Geography
                                                    key={geo.rsmKey}
                                                    geography={geo}
                                                    onMouseEnter={() => {
                                                        const { NAME, POP_EST } = geo.properties;
                                                        setTooltipContent(`${NAME} — ${rounded(POP_EST)}`);
                                                    }}
                                                    onMouseLeave={() => {
                                                        setTooltipContent("");
                                                    }}
                                                    style={{
                                                        default: {
                                                            fill: "#D6D6DA",
                                                            outline: "none"
                                                        },
                                                        hover: {
                                                            fill: "#F53",
                                                            outline: "none"
                                                        },
                                                        pressed: {
                                                            fill: "#E42",
                                                            outline: "none"
                                                        }
                                                    }}
                                                />
                                            ))
                                        }
                                    </Geographies>
                                    {markers.map(({ name, coordinates, markerOffset }) => (
                                        <Marker key={name} coordinates={coordinates}>
                                            <g
                                                fill="none"
                                                stroke="#FF5533"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                transform="translate(-12, -24)"
                                            >
                                                <circle cx="12" cy="10" r="3" />
                                                <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
                                            </g>
                                            <text
                                                textAnchor="middle"
                                                y={markerOffset}
                                                style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
                                            >
                                                {name}
                                            </text>
                                        </Marker>
                                    ))}
                                </ZoomableGroup>
                            </ComposableMap>

                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="spacer d-md-none d-lg-none" data-height="30"></div>
                        <div className="timeline exp bg-white rounded shadow-dark padding-30 overflow-hidden">
                            <h3>Cuisine</h3>

                        </div>
                        <br></br>
                        <div className="spacer d-md-none d-lg-none" data-height="30"></div>
                        <div className="timeline exp bg-white rounded shadow-dark padding-30 overflow-hidden">
                            <h3>Avancées scientifiques</h3>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MapChart;
