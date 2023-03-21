import { Flex } from "@chakra-ui/react";
import SceneType from "../../types/scene";
import Scene from "./scene";

interface Props {
  scenes: SceneType[];
}
function Scenes(props: Props) {
  <Flex direction="column">
    {props.scenes.map((scene) => (
      <Scene scene={scene} />
    ))}
  </Flex>;
}
export default Scenes;
