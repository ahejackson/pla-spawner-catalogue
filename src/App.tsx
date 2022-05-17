import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  AppShell,
  MantineProvider,
  MediaQuery,
  useMantineTheme,
} from "@mantine/core";
import {
  PlaHeader,
  PlaFooter,
  PlaSidebar,
  PlaNavbar,
} from "./components/layout";
import Spawners from "./pages/Spawners";
import SpawnerInfo from "./components/SpawnerInfo";
import { MapInfo, Spawner } from "./types";
import maps from "./resources/maps.json";

function App() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const [spawner, setSpawner] = useState<Spawner | undefined>(undefined);
  const [map, setMap] = useState<MapInfo | undefined>(
    maps.find((m) => `/spawners/${m.slug}` === location.pathname)
  );

  return (
    <MantineProvider
      theme={{ colorScheme: "dark" }}
      withGlobalStyles
      withNormalizeCSS
    >
      <BrowserRouter>
        <AppShell
          styles={{
            main: {
              background:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[8]
                  : theme.colors.dark[8],
            },
          }}
          padding={0}
          navbarOffsetBreakpoint="sm"
          asideOffsetBreakpoint="sm"
          fixed
          navbar={<PlaNavbar navOpened={opened} />}
          aside={
            <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
              <PlaSidebar>
                <SpawnerInfo map={map} spawner={spawner} />
              </PlaSidebar>
            </MediaQuery>
          }
          footer={<PlaFooter />}
          header={
            <PlaHeader
              burgerOpened={opened}
              burgerOnClicked={() => setOpened((o) => !o)}
            />
          }
        >
          <Routes>
            <Route path="/"></Route>
            <Route
              path="/spawners/:mapId"
              element={
                <Spawners markerClickHandler={(s: Spawner) => setSpawner(s)} />
              }
            />
          </Routes>
        </AppShell>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
