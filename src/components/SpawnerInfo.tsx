import { useEffect, useState } from "react";
import { Accordion, Group, Text, Switch, Stack } from "@mantine/core";
import type { EncounterTable, MapInfo, Spawner } from "../types";

type EncounterTablePercentages = {
  [s: string]: { [s: string]: string };
};

function getEnctablePercentages(
  enctable: EncounterTable
): EncounterTablePercentages {
  const percentages: EncounterTablePercentages = {};
  for (const conditions in enctable) {
    percentages[conditions] = {};
    let encsum = 0;
    for (const pokemon in enctable[conditions]) {
      encsum += enctable[conditions][pokemon];
    }

    let encsofar = 0;
    for (const pokemon in enctable[conditions]) {
      encsofar += enctable[conditions][pokemon];
      percentages[conditions][pokemon] = (encsofar / encsum).toFixed(3);
    }
  }
  return percentages;
}

function SpawnerInfo({ map, spawner }: { map?: MapInfo; spawner?: Spawner }) {
  const [enctables, setEnctables] = useState<
    { [k: string]: EncounterTable } | undefined
  >(undefined);

  const [enctable, setEnctable] = useState<EncounterTable | undefined>(
    undefined
  );

  const [enctablePercentages, setEnctablePercentages] =
    useState<EncounterTablePercentages>({});

  const [showPercentages, setShowPerecentages] = useState(true);

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
        setEnctablePercentages(
          getEnctablePercentages(spawnerInfo as EncounterTable)
        );
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
    <Stack>
      <Text>Group ID: {spawner.groupID}</Text>
      <Text>Spawner Name: {spawner.name}</Text>
      <Switch
        checked={showPercentages}
        onChange={(event) => setShowPerecentages(event.currentTarget.checked)}
        label="Show encounters as range"
      />
      {enctable ? (
        <EncounterTableInfo
          enctable={showPercentages ? enctablePercentages! : enctable}
        />
      ) : (
        ""
      )}
    </Stack>
  );
}

function EncounterTableInfo({
  enctable,
}: {
  enctable: EncounterTable | EncounterTablePercentages;
}) {
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
