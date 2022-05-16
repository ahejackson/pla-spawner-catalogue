import { Navbar, Text } from "@mantine/core";

type PlaNavbarProps = {
  navOpened: boolean;
};

function PlaNavbar({ navOpened }: PlaNavbarProps) {
  return (
    <Navbar
      p="md"
      hiddenBreakpoint="sm"
      hidden={!navOpened}
      width={{ sm: 200, lg: 300 }}
    >
      <Text>Application navbar</Text>
    </Navbar>
  );
}

export default PlaNavbar;
