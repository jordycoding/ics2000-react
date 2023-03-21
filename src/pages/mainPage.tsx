import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import NavBar from "../components/navbar";
import Rooms from "../features/rooms";
import { getLoggedIn } from "../utils/icsApiHelpers";
import LoginPage from "./login";

function MainPage() {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    getLoggedIn().then((res) => setLoggedIn(res));
  }, []);
  return (
    <>
      <NavBar />
      <Box p={5}>
        <Outlet />
      </Box>
    </>
  );
}

export default MainPage;
