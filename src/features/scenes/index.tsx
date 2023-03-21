import { Flex, Spinner } from "@chakra-ui/react";
import { useEffect } from "react";
import { fetchScenes } from "../../stores/scenesSlice";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import Scene from "./scene";

function Scenes() {
  const dispatch = useAppDispatch();
  const scenes = useAppSelector((state) => state.scenes.scenes);
  const status = useAppSelector((state) => state.scenes.loading);
  useEffect(() => {
    if (scenes.length === 0) {
      dispatch(fetchScenes());
    }
  }, [scenes]);
  if (status === "pending") {
    return <Spinner />;
  }
  return (
    <Flex direction="column" gap={2}>
      {scenes.map((scene) => (
        <Scene key={scene.id} scene={scene} />
      ))}
    </Flex>
  );
}
export default Scenes;
