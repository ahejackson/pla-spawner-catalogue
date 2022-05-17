import { useParams } from "react-router-dom";
import { PlaMap } from "../components/maps";
import type { MapInfo } from "../types";
import { MarkerClickHandler } from "../types-app";
import maps from "../resources/maps.json";

function Spawners({
  markerClickHandler,
}: {
  markerClickHandler?: MarkerClickHandler;
}) {
  const { mapId } = useParams();

  let map = maps.find((m: MapInfo) => m.slug == mapId);

  return map !== undefined ? (
    <PlaMap mapName={map.id} markerClickHandler={markerClickHandler} />
  ) : (
    <p>No map found</p>
  );
}

export default Spawners;
