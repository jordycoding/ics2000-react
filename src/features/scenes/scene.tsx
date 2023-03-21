import { Flex, Text, Spacer, IconButton } from "@chakra-ui/react";
import { FaPlay } from "react-icons/fa";
import SceneType from "../../types/scene";

interface Props {
  scene: SceneType;
}
function Scene(props: Props) {
  return (
    <Flex direction="row" alignItems="center">
      <Text>{props.scene.name}</Text>
      <Spacer />
      <IconButton aria-label="start-scene" icon={<FaPlay />} />
    </Flex>
  );
}
export default Scene;
