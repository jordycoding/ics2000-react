import { Grid } from "@chakra-ui/react";
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
    <Grid templateColumns='repeat(3, 1fr)' gap={6}>
      {rooms.map((room) => (
        <Room key={room.id} room={room} />
      ))}
    </Grid>
  );
}

export default Rooms;
