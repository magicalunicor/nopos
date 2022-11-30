import { React, useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
export default function Home() {
  const [viewport, setViewport] = useState({
    latitude: 45.464664,
    longitude: 9.18854,
    width: "100vw",
    height: "100vh",
    zoom: 12,
  });

  return (
    <div className="flex h-screen w-screen">
      <ReactMapGL
      onClick={(e)=>(console.log(e))}
        {...viewport}
        onMove={(viewport) => {
          setViewport(viewport);
        }}
        mapStyle={"mapbox://styles/caporetto/clb3eipel000215qvgt65l533"}
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_PUBLIC_ACCESS_TOKEN}
      >
      </ReactMapGL>
    </div>
  );
}
