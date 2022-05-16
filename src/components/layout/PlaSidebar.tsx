import { Aside, Text } from "@mantine/core";

function PlaSidebar() {
  return (
    <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
      <Text>Information about the Spawner goes here</Text>
    </Aside>
  );
}

export default PlaSidebar;
