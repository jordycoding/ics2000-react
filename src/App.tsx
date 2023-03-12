import React, { useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import LoginPage from "./pages/login";

function App() {
  return (
    <ChakraProvider>
      <LoginPage />
    </ChakraProvider>
  );
}

export default App;
