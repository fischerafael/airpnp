import { Flex, HStack, Input, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { Header } from "../src/components/Header";
import { DateRangePicker } from "react-date-range";

const HomePage = () => {
  const [dates, setDates] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });

  const selectionRange = {
    startDate: dates.startDate,
    endDate: dates.endDate,
    key: "Selection",
  };

  return (
    <VStack w="full" minH="100vh">
      <Header />

      <DateRangePicker ranges={[selectionRange]} />
    </VStack>
  );
};

export default HomePage;
