import { Flex, Spinner } from "@chakra-ui/react";
import { useEffect } from "react";
import { fetchScenes } from "../../stores/scenesSlice";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import Scene from "./scene";

function Scenes() {
  const dispatch = useAppDispatch();
  const state = useAppSelector((sceneState) => sceneState.scenes);
  useEffect(() => {
    dispatch(fetchScenes());
  }, []);
  return (
    <Flex direction="column" gap={2}>
      {state.scenes.map((scene) => (
        <Scene scene={scene} />
      ))}
    </Flex>
  );
}
export default Scenes;
