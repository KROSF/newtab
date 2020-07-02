import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";

const intl = new Intl.DateTimeFormat(["es-ES"], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
});

const Digital = styled.div`
  font-size: 100px;
`;

const Clock: React.FC = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const id = setTimeout(() => setDate(new Date()), 1000);
    return () => {
      clearInterval(id);
    };
  });

  return <Digital>{intl.format(date)}</Digital>;
};

export default Clock;
