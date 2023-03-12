import { Button, ButtonGroup, Flex, Text, Box, Spacer } from "@chakra-ui/react";
import React from "react";
import Device from "../../types/device";

interface Props {
  device: Device;
}
function Switch(props: Props) {
  return (
    <Flex
      flexDirection="row"
      width="100%"
      justifyContent="start"
      alignItems="center"
    >
      <Box>
        <Text>{props.device.name}</Text>
      </Box>
      <Spacer />
      <ButtonGroup>
        <Button colorScheme="green">On</Button>
        <Button colorScheme="red">Off</Button>
      </ButtonGroup>
    </Flex>
  );
}

export default Switch;
