import {
  Header,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
} from "@mantine/core";

type PlaHeaderProps = {
  burgerOpened: boolean;
  burgerOnClicked: () => void;
};

function PlaHeader({ burgerOpened, burgerOnClicked }: PlaHeaderProps) {
  const theme = useMantineTheme();
  return (
    <Header height={70} p="md">
      <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
        <MediaQuery largerThan="sm" styles={{ display: "none" }}>
          <Burger
            opened={burgerOpened}
            onClick={burgerOnClicked}
            size="sm"
            color={theme.colors.gray[6]}
            mr="xl"
          />
        </MediaQuery>

        <h1>PLA Spawner Catalogue</h1>
      </div>
    </Header>
  );
}

export default PlaHeader;
