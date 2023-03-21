import { Flex, Heading, Link, Stack, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

function NavBar() {
  return (
    <Flex
      direction="row"
      alignItems="center"
      backgroundColor="gray.700"
      padding={3}
      gap={3}
      shadow="md"
    >
      <Text fontSize="xl">
        Klik<span style={{ color: "#38A169" }}>Aan</span>Klik
        <span style={{ color: "#E53E3E" }}>Uit</span>
      </Text>
      <RouterLink to="/login">
        <Link>Rooms</Link>
      </RouterLink>
    </Flex>
  );
}

export default NavBar;
