import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  device: Device;
}
function Switch(props: Props) {
  return (
    <Flex flexDirection="row" justifyContent="start" alignItems="center">
      <Box>
        <Text>{props.device.name}</Text>
      </Box>
      <ButtonGroup>
        <Button>On</Button>
        <Button>Off</Button>
      </ButtonGroup>
    </Flex>
