import React from "react";
import Clock from "./components/Clock";
import Waves from "./components/Waves";
import { Flex, Box } from "rebass";
import Search from "./components/Search";

const Layout: React.FC = () => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "48px repeat(4, 1fr)",
        gridTemplateRows: "repeat(5, 1fr)",
        columnGap: "0px",
        rowGap: "0px",
      }}
      minHeight="100vh"
    >
      <Flex
        sx={{
          gridArea: "1 / 1 / 6 / 2",
          backgroundColor: "#131313",
          zIndex: "2000",
        }}
        flexDirection="column"
        justifyContent="space-between"
      >
        <Flex flexDirection="column">
          <Flex
            justifyContent="center"
            alignItems="center"
            marginBottom="4px"
            height="48px"
            color="rgb(186, 182, 192)"
          >
            <Box
              as="i"
              className="codicon codicon-home"
              fontSize="24px !important"
            />
          </Flex>
          <Flex
            justifyContent="center"
            alignItems="center"
            marginBottom="4px"
            height="48px"
            color="rgb(186, 182, 192)"
          >
            <Box
              as="i"
              className="codicon codicon-files"
              fontSize="24px !important"
            />
          </Flex>
          <Flex
            justifyContent="center"
            alignItems="center"
            marginBottom="4px"
            height="48px"
            color="rgb(186, 182, 192)"
          >
            <Box
              as="i"
              className="codicon codicon-source-control"
              fontSize="24px !important"
            />
          </Flex>
          <Flex
            justifyContent="center"
            alignItems="center"
            marginBottom="4px"
            height="48px"
            color="rgb(186, 182, 192)"
          >
            <Box
              as="i"
              className="codicon codicon-extensions"
              fontSize="24px !important"
            />
          </Flex>
        </Flex>
        <Flex flexDirection="column">
          <Flex
            justifyContent="center"
            alignItems="center"
            marginBottom="4px"
            height="48px"
            color="rgb(186, 182, 192)"
          >
            <Box
              as="i"
              className="codicon codicon-account"
              fontSize="24px !important"
            />
          </Flex>
          <Flex
            justifyContent="center"
            alignItems="center"
            marginBottom="4px"
            height="48px"
            color="rgb(186, 182, 192)"
          >
            <Box
              as="i"
              className="codicon codicon-settings-gear"
              fontSize="24px !important"
            />
          </Flex>
        </Flex>
      </Flex>
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        sx={{ gridArea: "1 / 2 / 6 / 6" }}
      >
        <Clock />
        <Search />
      </Flex>
      <Waves />
    </Box>
  );
};

const App: React.FC = () => <Layout />;

export default App;
