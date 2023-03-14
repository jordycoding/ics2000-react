import React, { useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import LoginPage from "./pages/login";
import { Provider } from "react-redux";
import store from "./stores/store";
import MainPage from "./pages/mainPage";
import theme from "./theme";

function App() {
  return (
      <ChakraProvider theme={theme}>
    <Provider store={store}>
        <MainPage />
    </Provider>
      </ChakraProvider>
  );
}

export default App;
