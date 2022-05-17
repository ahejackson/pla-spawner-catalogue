import { Aside, Text } from "@mantine/core";
import { ReactNode } from "react";

function PlaSidebar({ children, ...props }: { children: ReactNode }) {
  return (
    <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }} {...props}>
      {children}
    </Aside>
  );
}

export default PlaSidebar;
