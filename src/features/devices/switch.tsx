import { Button, ButtonGroup, Flex, Text, Box } from "@chakra-ui/react";
import React from "react";
import Device from "../../types/device";

interface Props {
  device: Device;
}
function Switch(props: Props) {
  return (
    <Flex flexDirection="row" justifyContent="start" alignItems="center">
      <Box>
        <Text>{props.device.name}</Text>
      </Box>
      <ButtonGroup>
        <Button>On</Button>
        <Button>Off</Button>
      </ButtonGroup>
    </Flex>
  );
}

export default Switch;
