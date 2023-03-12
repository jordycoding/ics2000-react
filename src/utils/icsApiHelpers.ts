import type RoomDto from "../types/roomDto";
import type Room from "../types/room";
import type Device from "../types/device";

async function getRoomsRaw(): Promise<RoomDto[]> {
  const response = await fetch("/api/rooms");
  return await response.json();
}

async function getRooms(): Promise<Room[]> {
  const response: RoomDto[] = await (await fetch("/api/rooms")).json();

  const devices = await getDevices();
  return response.map((room) => {
    return {
      id: room.id,
      name: room.name,
      modules: devices.filter((device) => room.modules?.includes(device.id)),
    };
  });
}

async function getDevices(): Promise<Device[]> {
  const response = await fetch("/api/devices");
  return await response.json();
}

export { getRoomsRaw, getRooms, getDevices };
