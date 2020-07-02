import React from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";
import { Keyframes } from "@emotion/serialize";

type WaveProps = {
  bottom: string;
  z: number;
  opacity: number;
  delay: string;
  frequency: string;
  animation: Keyframes;
};

const animation = keyframes`
  0% {
    background-position-x: 0;
  }
  100% {
    background-position-x: 990px;
  }
`;

const animation2 = keyframes`
  0% {
    background-position-x: 0;
  }
  100% {
    background-position-x: -990px;
  }
`;

const Wave = styled.div<WaveProps>`
  position: absolute;
  left: 0;
  width: 100%;
  height: 100px;
  background: url("/assets/wave.svg");
  background-size: 990px 100px;
  background-repeat: repeat-x;
  animation: ${(props) => props.animation} ${(props) => props.frequency} linear
    infinite;
  z-index: ${(props) => props.z};
  opacity: ${(props) => props.opacity};
  animation-delay: ${(props) => props.delay};
  bottom: ${(props) => props.bottom};
`;

const Waves = () => (
  <div>
    <Wave
      z={1000}
      opacity={1}
      delay="0s"
      bottom="0"
      animation={animation}
      frequency="30s"
    />
    <Wave
      z={999}
      opacity={0.5}
      delay="-5s"
      bottom="10px"
      animation={animation2}
      frequency="15s"
    />
    <Wave
      z={998}
      opacity={0.2}
      delay="-2s"
      bottom="15px"
      animation={animation}
      frequency="30s"
    />
    <Wave
      z={997}
      opacity={0.7}
      delay="-5s"
      bottom="20px"
      animation={animation2}
      frequency="5s"
    />
  </div>
);

export default Waves;
