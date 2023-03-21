import { ChakraProvider } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Provider, useSelector } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavBar from "./components/navbar";
import Rooms from "./features/rooms";
import LoginPage from "./pages/login";
import MainPage from "./pages/mainPage";
import { fetchLoggedIn } from "./stores/loginSlice";
import theme from "./theme";
import { useAppDispatch, useAppSelector } from "./utils/hooks";

function App() {
    const loggedIn = useAppSelector((state) => state.login.loggedIn);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchLoggedIn());
    }, []);
    const router = createBrowserRouter([
        {
            path: "/",
            element: <MainPage />,
            children: [
                {
                    path: "rooms",
                    element: <Rooms />,
                },
                {
                    path: "scenes",
                    element: <h1>Scenes</h1>,
                },
            ],
        },
        { path: "/rooms", element: <Rooms /> },
        { path: "/login", element: <LoginPage /> },
    ]);
    return (
        <ChakraProvider theme={theme}>
            <RouterProvider router={router} />
        </ChakraProvider>
    );
}

export default App;
