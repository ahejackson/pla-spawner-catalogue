import { Marker, Popup } from "react-leaflet";
import { Spawner } from "../../types";

function SpawnerMarker({ spawner }: { spawner: Spawner }) {
  return (
    <Marker position={[-spawner.coords[2] / 2, spawner.coords[0] / 2]}>
      <Popup>{spawner.name}</Popup>
    </Marker>
  );
}

export default SpawnerMarker;
