export type PokedexEntry = {
  form_id: string;
  form_name: string;
  gender_ratio: number;
  id: string;
  index: number;
  is_gender_dimorphic: boolean;
  species: string;
};

export type PlaCoords = {
  x: number;
  y: number;
  z: number;
};

export type PlaCoordsArr = [x: number, y: number, z: number];

export type MMOInfo = {
  br_spawns: number;
  brencounter: string;
  coords: PlaCoords;
  fr_spawns: number;
  frencounter: string;
  group_id: number;
  group_seed: number;
  has_bonus: boolean;
  map_index: number;
  map_name: string;
  pokemon: PokedexEntry;
};

export type Spawner = {
  coords: number[];
  icon: string;
  groupID: number;
  ivs: number;
  name: string;
};

export type MapInfo = {
  id: string;
  name: string;
  slug: string;
  number: number;
};

export type EncounterTable = {
  [s: string]: { [s: string]: number };
};
