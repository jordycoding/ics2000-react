import {
  Slider,
  Flex,
  Text,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Tooltip,
  Spacer,
  Button,
} from "@chakra-ui/react";
import { debounce, throttle } from "lodash";
import React, { useCallback, useEffect, useState } from "react";
import type Device from "../../types/device";
import { dimDevice, turnOff, turnOn } from "../../utils/icsApiHelpers";

interface Props {
  device: Device;
}

function Dimmer({ device }: Props) {
  const [sliderValue, setSliderValue] = useState(0);
  const [showTooltip, setShowTooltip] = useState(false);
  const [ready, setReady] = useState(false);

  const dim = useCallback(
    throttle((value) => {
      // dimDevice(device.id, value);
      console.log(value);
    }, 500),
    []
  );
  function onClick() {
    turnOn(device.id);
  }
  function offClick() {
    turnOff(device.id);
  }
  useEffect(() => {
    if (ready) {
      dim(sliderValue);
    }
  }, [sliderValue]);
  useEffect(() => setReady(true), []);

  return (
    <Flex flexDirection="column" width="100%">
      <Flex flexDirection="row" gap={2}>
        <Text>{device.name}</Text>
        <Spacer />
        <Button size="sm" onClick={() => onClick()}>
          On
        </Button>
        <Button size="sm" onClick={() => offClick()}>
          Off
        </Button>
      </Flex>
      <Slider
        min={0}
        max={100}
        onChange={(v) => setSliderValue(v)}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <Tooltip
          hasArrow
          bg="teal.500"
          color="white"
          placement="top"
          isOpen={showTooltip}
          label={`${sliderValue}%`}
        >
          <SliderThumb />
        </Tooltip>
      </Slider>
    </Flex>
  );
}
export default Dimmer;
