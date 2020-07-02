import React from "react";
import Clock from "./components/Clock";
import Waves from "./components/Waves";
import { Flex } from "rebass";
import Search from "./components/Search";

const App: React.FC = () => (
  <Flex
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
    minHeight="100vh"
  >
    <Clock />
    <Search />
    <Waves />
  </Flex>
);

export default App;
