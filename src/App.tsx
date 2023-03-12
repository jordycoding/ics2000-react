import React, { useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import LoginPage from "./pages/login";
import { Provider } from "react-redux";
import store from "./stores/store";
import MainPage from "./pages/mainPage";

function App() {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <MainPage />
      </ChakraProvider>
    </Provider>
  );
}

export default App;
