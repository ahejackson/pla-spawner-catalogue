import L, { LatLngBoundsExpression } from "leaflet";
import { ReactNode, useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import SpawnerMarker from "./SpawnerMarker";
import type { MapInfo, Spawner } from "../../types";
import { MarkerClickHandler } from "../../types-app";
import maps from "../../resources/maps.json";

const bounds: LatLngBoundsExpression = [
  [0, 0],
  [-512, 512],
];

const scrollBoundsPadding = 64;

const scrollBounds: LatLngBoundsExpression = [
  [scrollBoundsPadding, -scrollBoundsPadding],
  [-512 - scrollBoundsPadding, 512 + scrollBoundsPadding],
];

function PlaMap(props: {
  mapName: string;
  markerClickHandler?: MarkerClickHandler;
  children?: ReactNode;
}) {
  const [markers, setMarkers] = useState({} as { [k: string]: Spawner });
  const [map, setMap] = useState(maps.find((m) => m.id === props.mapName)!);

  useEffect(() => {
    requestMarkers(map);
  }, []);

  async function requestMarkers(map: MapInfo) {
    const res = await fetch(`/resources/spawners/${map.id}.json`);
    const json = await res.json();
    setMarkers(json);
  }

  return (
    <div className="App">
      <MapContainer
        crs={L.CRS.Simple}
        maxBounds={scrollBounds}
        center={[-256, 256]}
        zoom={1}
        minZoom={0}
        maxZoom={3}
        scrollWheelZoom={false}
        attributionControl={false}
      >
        <TileLayer
          url={`/img/tiles/${props.mapName}/tile_{z}-{x}-{y}.png`}
          bounds={bounds}
          maxNativeZoom={2}
        />
        {Object.keys(markers).map((key) => (
          <SpawnerMarker
            spawner={markers[key]}
            clickHandler={props.markerClickHandler}
            key={key}
          />
        ))}
      </MapContainer>
    </div>
  );
}

export default PlaMap;
