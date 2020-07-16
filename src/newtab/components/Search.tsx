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
  background-color: #363637;
`;

const engineIcons: Record<string, IconName> = {
  az: "amazon",
  dev: "dev",
  dh: "docker",
  gh: "github",
  rd: "reddit",
  tw: "twitter",
  yt: "youtube",
};

const Search = () => {
  const [query, setQuery] = useState("");
  const [engine, setEngine] = useState<IconName>("google");

  const onChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setQuery(value);
    setEngine(engineIcons[value.substr(0, value.indexOf(" "))] || "google");
  }, []);

  return (
    <Form as="form" alignItems="center" action="http://localhost:8000/search">
      <SearchInput onChange={onChange} name="q" />
      <Box paddingRight="10px">
        <FontAwesomeIcon icon={["fab", engine]} size="2x" />
      </Box>
    </Form>
  );
};

export default Search;
