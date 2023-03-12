import {
  Slider,
  Flex,
  Text,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Tooltip,
} from "@chakra-ui/react";
import React, { useState } from "react";
import type Device from "../../types/device";

interface Props {
  device: Device;
}

function Dimmer({ device }: Props) {
  const [sliderValue, setSliderValue] = useState(0);
  const [showTooltip, setShowTooltip] = useState(false);
  return (
    <Flex flexDirection="column" width="100%">
      <Text>{device.name}</Text>
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
