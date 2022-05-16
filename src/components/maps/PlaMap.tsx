import L, { LatLngBoundsExpression } from "leaflet";
import { ReactNode, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import mmoinfo from "../../../mmoinfo.json";
import MMOMarker from "./MMOMarker";
import SpawnerMarker from "./SpawnerMarker";
import spawners from "../../../resources/spawners/obsidianfieldlands.json";
import { Spawner } from "../../types";

const bounds: LatLngBoundsExpression = [
  [0, 0],
  [-512, 512],
];

const scrollBoundsPadding = 64;

const scrollBounds: LatLngBoundsExpression = [
  [scrollBoundsPadding, -scrollBoundsPadding],
  [-512 - scrollBoundsPadding, 512 + scrollBoundsPadding],
];

function PlaMap(props: { children?: ReactNode }) {
  // const [markers, setMarkers] = useState(mmoinfo);
  const [markers, setMarkers] = useState(spawners as { [k: string]: Spawner });

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
          url="img/tiles/obsidianfieldlands/tile_{z}-{x}-{y}.png"
          bounds={bounds}
          maxNativeZoom={2}
        />
        {Object.keys(markers).map((key) => (
          <SpawnerMarker spawner={markers[key]} key={key} />
        ))}
      </MapContainer>
    </div>
  );
}

export default PlaMap;
