import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Stack,
} from "@chakra-ui/react";
import Switch from "../devices/switch";
import React from "react";
import Device, { DeviceType } from "../../types/device";
import type RoomType from "../../types/room";
import Dimmer from "../devices/dimmer";

interface Props {
  room: RoomType;
}

function Room({ room }: Props) {
  return (
    <Card>
      <CardHeader>
        <Heading size="md">{room.name}</Heading>
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
