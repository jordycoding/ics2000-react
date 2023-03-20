import { AtSignIcon, LockIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { fetchLoggedIn } from "../../stores/loginSlice";
import { useAppDispatch } from "../../utils/hooks";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const dispatch = useAppDispatch();
  async function icsLogin() {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    console.log(response.status === 200);
    dispatch(fetchLoggedIn());
    setError(response.status !== 200);
  }
  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="4"
        justifyContent="center"
        alignItems="center"
      >
        <Heading color="blue.400">Log into Trust account</Heading>
        <Box>
          <Stack spacing={4} p="1rem" boxShadow="md">
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<AtSignIcon color="gray.300" />}
              />
              <Input
                type="email"
                isInvalid={error}
                placeholder="Email address"
                onChange={(event) => setEmail(event.currentTarget.value)}
              />
            </InputGroup>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<LockIcon color="gray.300" />}
              />
              <Input
                type="password"
                isInvalid={error}
                placeholder="Password"
                onChange={(event) => setPassword(event.currentTarget.value)}
              />
            </InputGroup>
            <Button colorScheme="blue" onClick={() => icsLogin()}>
              Login
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}

export default Login;
