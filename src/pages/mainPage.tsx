import { Box } from "@chakra-ui/react";
import React from "react";
import Rooms from "../features/rooms";

function MainPage() {
  return (
    <Box p={6}>
      <Rooms />
    </Box>
  );
}

export default MainPage;
