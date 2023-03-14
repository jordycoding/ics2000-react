import { SimpleGrid } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { fetchRooms } from "../../stores/roomsSlice";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import Room from "./room";

function Rooms() {
  const dispatch = useAppDispatch();
  const rooms = useAppSelector((state) => state.rooms.rooms);
  useEffect(() => {
    dispatch(fetchRooms());
  }, []);
  return (
    <SimpleGrid minChildWidth="400px" spacing="20px">
      {rooms.map((room) => (
        <Room key={room.id} room={room} />
      ))}
    </SimpleGrid>
  );
}

export default Rooms;
