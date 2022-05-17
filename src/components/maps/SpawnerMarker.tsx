import { Marker, Popup } from "react-leaflet";
import { Spawner } from "../../types";
import { MarkerClickHandler } from "../../types-app";

function SpawnerMarker({
  spawner,
  clickHandler,
}: {
  spawner: Spawner;
  clickHandler?: MarkerClickHandler;
}) {
  return (
    <Marker
      position={[-spawner.coords[2] / 2, spawner.coords[0] / 2]}
      eventHandlers={{
        click: () => {
          if (clickHandler !== undefined) {
            clickHandler(spawner);
          }
        },
      }}
    >
      <Popup>{spawner.name}</Popup>
    </Marker>
  );
}

export default SpawnerMarker;
