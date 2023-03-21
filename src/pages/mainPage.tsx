import { Box } from "@chakra-ui/react";
import { Navigate, Outlet } from "react-router-dom";
import NavBar from "../components/navbar";
import { useAppSelector } from "../utils/hooks";

function MainPage() {
  const login = useAppSelector((state) => state.login);
  if (!login.loggedIn && login.loading === "idle") {
    return <Navigate to="/login" />;
  }
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
