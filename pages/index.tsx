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

  console.log(dates);

  const selectionRange: ISelectRange = {
    startDate: dates.startDate,
    endDate: dates.endDate,
    key: "selection",
  };

  function handleSelect(ranges: any) {
    setDates({ ...dates, startDate: ranges.selection.startDate });
    setDates({ ...dates, endDate: ranges.selection.endDate });
  }

  return (
    <VStack w="full" minH="100vh">
      <Header />

      <DateRangePicker
        ranges={[selectionRange]}
        minDate={today}
        rangeColors={rangeColors}
        onChange={handleSelect}
      />
    </VStack>
  );
};

export default HomePage;
