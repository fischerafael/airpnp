import { Flex, HStack, Input, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Header } from "../src/components/Header";

const HomePage = () => {
  return (
    <VStack w="full" minH="100vh">
      <Header />
    </VStack>
  );
};

export default HomePage;
