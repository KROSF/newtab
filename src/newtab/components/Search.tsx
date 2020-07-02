import React, { useState, useCallback, ChangeEvent } from "react";
import { Flex, Box } from "rebass";
import { Input } from "@rebass/forms";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styled from "@emotion/styled";
import { IconName } from "@fortawesome/fontawesome-svg-core";

const SearchInput = styled(Input)`
  flex: 1;
  background: none;
  outline: none;
  border: none;
  color: white;
  line-height: 40px;
  padding-left: 15px;
  font-size: 25px;
`;

const Form = styled(Flex)`
  width: 450px;
  border-radius: 5px;
  margin-bottom: 80px;
  background-color: #202124;
`;

const engineIcons: Record<string, IconName> = {
  yt: "youtube",
  gh: "github",
  rd: "reddit",
  tw: "twitter",
  az: "amazon",
};

const Search = () => {
  const [engine, setEngine] = useState<IconName>("google");

  const onChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setEngine(engineIcons[event.target.value.substr(0, 2)] || "google");
  }, []);

  return (
    <Form as="form" alignItems="center">
      <SearchInput onChange={onChange} />
      <Box paddingRight="10px">
        <FontAwesomeIcon icon={["fab", engine]} size="2x" />
      </Box>
    </Form>
  );
};

export default Search;
