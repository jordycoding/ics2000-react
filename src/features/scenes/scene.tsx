import { Flex, Text, Spacer, IconButton } from "@chakra-ui/react";
import { FaEdit, FaPlay, FaStop } from "react-icons/fa";
import SceneType from "../../types/scene";
import { startScene, stopScene } from "../../utils/icsApiHelpers";

interface Props {
  scene: SceneType;
}
function Scene(props: Props) {
  function startClick() {
    startScene(props.scene.id);
  }
  function stopClick() {
    stopScene(props.scene.id);
  }
  return (
    <Flex direction="row" alignItems="center" gap={2}>
      <Text>{props.scene.name}</Text>
      <Spacer />
      <IconButton
        onClick={startClick}
        colorScheme="green"
        aria-label="start"
        icon={<FaPlay />}
      />
      <IconButton
        onClick={stopClick}
        colorScheme="red"
        aria-label="stop"
        icon={<FaStop />}
      />
      <IconButton colorScheme="blue" aria-label="edit" icon={<FaEdit />} />
    </Flex>
  );
}
export default Scene;
