import { Flex, HStack, Input, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { Header } from "../src/components/Header";
import { DateRangePicker } from "react-date-range";

const today = new Date();
const rangeColors = ["#FD5B61"];

interface ISelectRange {
  startDate: Date;
  endDate: Date;
  key: string;
}

const HomePage = () => {
  const [dates, setDates] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });

  const selectionRange: ISelectRange = {
    startDate: dates.startDate,
    endDate: dates.endDate,
    key: "selection",
  };

  function handleSelect(ranges: any) {
    setDates((prev) => ({ ...prev, startDate: ranges.selection.startDate }));
    setDates((prev) => ({ ...prev, endDate: ranges.selection.endDate }));
  }

  return (
    <VStack w="full" minH="100vh">
      <Header />

      <Flex w="full" maxW={"container.md"} justify="center">
        <DateRangePicker
          ranges={[selectionRange]}
          minDate={today}
          rangeColors={rangeColors}
          onChange={handleSelect}
        />
      </Flex>
    </VStack>
  );
};

export default HomePage;
