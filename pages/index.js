import { React, useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import {RemoveScrollBar} from 'react-remove-scroll-bar';
import * as BarData from "../data/features.json";

export default function Home() {
  const [selectedBar, setSelectedBar] = useState();

  const [viewport, setViewport] = useState({
    latitude: 45.464664,
    longitude: 9.18854,
    width: "100vw",
    height: "100vh",
    zoom: 12,
  });

  useEffect(() => {
    if (selectedBar) {
      console.log("NAME: " + selectedBar.properties.name);
      console.log("ADDRESS: " + selectedBar.properties.full_address);
      console.log("ID: " + selectedBar.id);
    }
  }, [selectedBar]);

  return (
    <div className="flex h-screen w-screen justify-center items-center">
      <RemoveScrollBar />
     <div className="flex w-1/2 h-1/2">
     <ReactMapGL
        {...viewport}
        onDblClick={(viewport) => {
          setViewport(viewport);
        }}
        mapStyle={"mapbox://styles/caporetto/clb3eipel000215qvgt65l533"}
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_PUBLIC_ACCESS_TOKEN}
        onClick={(e)=>{console.log(e)}}
      >
       {
        /*
         {BarData.features.map((bar) => (
          <Marker
            pitchAlignment="viewport"
            key={bar.id}
            latitude={bar.geometry.coordinates[1]}
            longitude={bar.geometry.coordinates[0]}
          >
            <div
              onClick={() => {
                setSelectedBar(bar);
              }}
              className="flex w-fit h-fit p-1 rounded-md bg-white border border-black cursor-pointer"
            >
              <h2 className="font-extrabold">{bar.properties.name}</h2>
            </div>
          </Marker>
        ))}
        */
       }
      </ReactMapGL>
     </div>
    </div>
  );
}
