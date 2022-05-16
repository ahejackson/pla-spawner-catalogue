import { useState } from "react";
import { AppShell, MediaQuery, useMantineTheme } from "@mantine/core";
import {
  PlaHeader,
  PlaFooter,
  PlaSidebar,
  PlaNavbar,
} from "./components/layout";
import PlaMap from "./components/maps/PlaMap";

function App() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      padding={0}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      fixed
      navbar={<PlaNavbar navOpened={opened} />}
      aside={
        <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
          <PlaSidebar />
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
      <PlaMap />
    </AppShell>
  );
}

export default App;
