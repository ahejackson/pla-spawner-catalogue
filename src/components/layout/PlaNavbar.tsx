import { createStyles, Navbar, Text } from "@mantine/core";
import maps from "../../resources/maps.json";

type PlaNavbarProps = {
  navOpened: boolean;
};

const useStyles = createStyles((theme, _params, getRef) => {
  return {
    link: {
      ...theme.fn.focusStyles(),
      display: "flex",
      alignItems: "center",
      textDecoration: "none",
      fontSize: theme.fontSizes.sm,
      color:
        theme.colorScheme === "dark"
          ? theme.colors.dark[1]
          : theme.colors.gray[7],
      padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
      borderRadius: theme.radius.sm,
      fontWeight: 500,

      "&:hover": {
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[6]
            : theme.colors.gray[0],
        color: theme.colorScheme === "dark" ? theme.white : theme.black,
      },
    },

    linkActive: {
      "&, &:hover": {
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.fn.rgba(theme.colors[theme.primaryColor][8], 0.25)
            : theme.colors[theme.primaryColor][0],
        color:
          theme.colorScheme === "dark"
            ? theme.white
            : theme.colors[theme.primaryColor][7],
      },
    },
  };
});

function PlaNavbar({ navOpened }: PlaNavbarProps) {
  const { classes, cx } = useStyles();

  const links = maps.map((item) => (
    <a
      className={cx(classes.link, {
        [classes.linkActive]: `/spawners/${item.slug}` === location.pathname,
      })}
      href={`/spawners/${item.slug}`}
      key={item.id}
    >
      <span>{item.name}</span>
    </a>
  ));

  return (
    <Navbar
      p="md"
      hiddenBreakpoint="sm"
      hidden={!navOpened}
      width={{ sm: 200, lg: 300 }}
    >
      {links}
    </Navbar>
  );
}

export default PlaNavbar;
