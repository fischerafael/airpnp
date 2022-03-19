import { Flex, Input, Text } from "@chakra-ui/react";
import React from "react";

export const Header = () => {
  return (
    <Flex w="full" maxW="container.md" justify="space-between">
      <Text>AirBnb</Text>

      <Input placeholder="Search" />

      <Text>Other Stuff</Text>
    </Flex>
  );
};
