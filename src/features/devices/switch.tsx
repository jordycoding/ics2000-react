import { Button, ButtonGroup, Flex, Text, Box, Spacer } from "@chakra-ui/react";
import React from "react";
import Device from "../../types/device";
import { turnOff, turnOn } from "../../utils/icsApiHelpers";

interface Props {
  device: Device;
}
function Switch(props: Props) {
  function onClick() {
    turnOn(props.device.id);
  }
  function offClick() {
    turnOff(props.device.id);
  }
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
        <Button colorScheme="green" onClick={() => onClick()}>
          On
        </Button>
        <Button colorScheme="red" onClick={() => offClick()}>
          Off
        </Button>
      </ButtonGroup>
    </Flex>
  );
}

export default Switch;
