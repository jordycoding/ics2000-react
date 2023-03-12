import Device from "./device";

interface Room {
  id: number;
  name: string;
  modules: Device[];
}

export default Room;
