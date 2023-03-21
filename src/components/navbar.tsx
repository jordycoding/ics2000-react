import {
  Flex,
  Heading,
  Link,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

function NavBar() {
  const { colorMode } = useColorMode();
  return (
    <Flex
      direction="row"
      alignItems="center"
      backgroundColor={colorMode === "dark" ? "gray.700" : "gray.200"}
      padding={3}
      gap={3}
      shadow="md"
    >
      <Text fontSize="xl">
        Klik<span style={{ color: "#38A169" }}>Aan</span>Klik
        <span style={{ color: "#E53E3E" }}>Uit</span>
      </Text>
      <RouterLink to="/rooms">
        <Link>Rooms</Link>
      </RouterLink>
      <RouterLink to="/scenes">
        <Link>Scenes</Link>
      </RouterLink>
    </Flex>
  );
}

export default NavBar;
