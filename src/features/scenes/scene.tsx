import { Flex, Text, Spacer, IconButton } from "@chakra-ui/react";
import { FaEdit, FaPlay, FaStop } from "react-icons/fa";
import SceneType from "../../types/scene";

interface Props {
    scene: SceneType;
}
function Scene(props: Props) {
    return (
        <Flex direction="row" alignItems="center" gap={2}>
            <Text>{props.scene.name}</Text>
            <Spacer />
            <IconButton colorScheme="green" aria-label="start" icon={<FaPlay />} />
            <IconButton colorScheme="red" aria-label="stop" icon={<FaStop />} />
            <IconButton colorScheme="blue" aria-label="edit" icon={<FaEdit />} />
        </Flex>
    );
}
export default Scene;
