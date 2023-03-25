import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Spacer,
  Stack,
} from "@chakra-ui/react";
import Switch from "../devices/switch";
import React from "react";
import Device, { DeviceType } from "../../types/device";
import type RoomType from "../../types/room";
import Dimmer from "../devices/dimmer";
import { turnOff } from "../../utils/icsApiHelpers";

interface Props {
  room: RoomType;
}

function Room({ room }: Props) {
  function allOff() {
    room.modules.forEach((device: Device) => {
      if (
        device.device_type === DeviceType.Switch ||
        device.device_type === DeviceType.Dimmer
      ) {
        turnOff(device.id);
      }
    });
  }
  return (
    <Card>
      <CardHeader>
        <Flex direction="row" alignItems="center" justifyContent="center">
          <Heading size="md">{room.name}</Heading>
          <Spacer />
          <Button variant="outline" colorScheme="red" onClick={allOff}>
            All off
          </Button>
        </Flex>
      </CardHeader>
      <CardBody>
        <Flex flexDirection="column" gap={3}>
          {room.modules.map((device: Device) => {
            if (device.device_type === DeviceType.Switch) {
              return <Switch key={device.id} device={device} />;
            } else if (device.device_type === DeviceType.Dimmer) {
              return <Dimmer key={device.id} device={device} />;
            }
          })}
        </Flex>
      </CardBody>
    </Card>
  );
}

export default Room;
