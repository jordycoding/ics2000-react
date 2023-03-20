import { Flex, Heading, Link, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

function NavBar() {
  return (
    <Flex direction="row" backgroundColor="gray.500" padding={3} shadow="md">
      <RouterLink to="/login">
        <Link>Rooms</Link>
      </RouterLink>
    </Flex>
  );
}

export default NavBar;
