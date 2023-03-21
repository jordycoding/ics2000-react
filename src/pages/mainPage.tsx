import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "../components/navbar";
import { useAppSelector } from "../utils/hooks";

function MainPage() {
  const login = useAppSelector((state) => state.login);
  const navigate = useNavigate();
  useEffect(() => {
    if (!login.loggedIn && login.loading === "idle") {
      navigate("/login");
    }
    if (login.loggedIn && login.loading === "idle") {
      navigate("/rooms");
    }
  }, [login.loggedIn, login.loading]);
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
