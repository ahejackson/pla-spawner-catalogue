import { useEffect, useState } from "react";
import { Accordion, Group, Text } from "@mantine/core";
import type { EncounterTable, MapInfo, Spawner } from "../types";

function SpawnerInfo({ map, spawner }: { map?: MapInfo; spawner?: Spawner }) {
  const [enctables, setEnctables] = useState<
    { [k: string]: EncounterTable } | undefined
  >(undefined);

  const [enctable, setEnctable] = useState<EncounterTable | undefined>(
    undefined
  );

  useEffect(() => {
    if (map) {
      console.log("req tables");
      requestEncounterTables(map);
    }
  }, [map]);

  useEffect(() => {
    if (map && spawner && enctables) {
      console.log("setting table");
      const spawnerInfo = enctables[spawner.name];
      if (spawnerInfo) {
        setEnctable(spawnerInfo as EncounterTable);
      }
    }
  }, [map, spawner]);

  async function requestEncounterTables(map: MapInfo): Promise<void> {
    console.log("requesting");
    const res = await fetch(`/resources/encounters/${map.id}.json`);
    const json = await res.json();
    setEnctables(json);
  }

  if (spawner === undefined || map === undefined) {
    return <div></div>;
  }

  return (
    <div>
      <Text>Group ID: {spawner.groupID}</Text>
      <Text>Spawner Name: {spawner.name}</Text>
      {enctable ? <EncounterTableInfo enctable={enctable} /> : ""}
    </div>
  );
}

function EncounterTableInfo({ enctable }: { enctable: EncounterTable }) {
  return (
    <Accordion multiple>
      {Object.keys(enctable).map((condition) => (
        <Accordion.Item label={condition} key={condition}>
          {Object.keys(enctable[condition]).map((pokemon) => (
            <Group position="apart" key={pokemon}>
              <Text>{pokemon}</Text>
              <Text>{enctable[condition][pokemon]}</Text>
            </Group>
          ))}
        </Accordion.Item>
      ))}
    </Accordion>
  );
}

export default SpawnerInfo;
