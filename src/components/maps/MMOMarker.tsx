import L from "leaflet";
import { Marker, Popup } from "react-leaflet";
import { MMOInfo } from "../../types";

function MMOMarker({ info }: { info: MMOInfo }) {
  const icon = L.icon({
    iconUrl: `img/sprite/c_${info.pokemon.index}.png`,
    iconSize: [68, 56],
  });
  return (
    <Marker icon={icon} position={[-info.coords.z / 2, info.coords.x / 2]}>
      <Popup>{info.pokemon.species}</Popup>
    </Marker>
  );
}

export default MMOMarker;
