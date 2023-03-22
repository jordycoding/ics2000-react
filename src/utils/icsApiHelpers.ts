import type RoomDto from "../types/roomDto";
import type Room from "../types/room";
import type Device from "../types/device";
import Scene from "../types/scene";

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

async function turnOn(deviceId: number) {
  await fetch(`/api/devices/${deviceId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ state: "On" }),
  });
}

async function turnOff(deviceId: number) {
  await fetch(`/api/devices/${deviceId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ state: "Off" }),
  });
}

async function dimDevice(deviceId: number, percentage: number) {
  await fetch(`/api/devices/${deviceId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ state: { Dim: percentage } }),
  });
}

async function startScene(sceneId: number) {
  await fetch(`/api/scenes/${sceneId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ state: "Play" }),
  });
}

async function stopScene(sceneId: number) {
  await fetch(`/api/scenes/${sceneId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ state: "Stop" }),
  });
}

async function getLoggedIn(): Promise<boolean> {
  const response = await fetch("/api/logged_in");
  return await response.json();
}

async function getScenes(): Promise<Scene> {
  const response = await fetch("/api/scenes");
  return await response.json();
}

export {
  getRoomsRaw,
  getRooms,
  getDevices,
  turnOn,
  turnOff,
  dimDevice,
  startScene,
  stopScene,
  getLoggedIn,
  getScenes,
};
