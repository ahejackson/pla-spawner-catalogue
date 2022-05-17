import {
  Header,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  createStyles,
} from "@mantine/core";

type PlaHeaderProps = {
  burgerOpened: boolean;
  burgerOnClicked: () => void;
};

const useStyles = createStyles((theme, _params, getRef) => {
  return {
    highlight: {
      backgroundImage: "linear-gradient(#04b2d9, #0378a6)",
      backgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
  };
});

function PlaHeader({ burgerOpened, burgerOnClicked }: PlaHeaderProps) {
  const theme = useMantineTheme();
  const { classes, cx } = useStyles();

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

        <h1>
          <span className={cx(classes.highlight)}>PLA</span> Spawner Catalogue
        </h1>
      </div>
    </Header>
  );
}

export default PlaHeader;
