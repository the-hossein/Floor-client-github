import React, { ReactElement } from "react";
import styled from "styled-components";
interface Props {
  bg: string | undefined;
  top: number;
}
export const RightSideStyle = styled.div<Props>`
  background-image: ${(a) => a.bg};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: left center;
  position: fixed;
  top: 0px;
  right: 0px;
  width: 54%;
  height: 100%;
  background-color: red;
 
  @media (min-width: 1400px) {
    width: 42%;
  }
  @media (max-width: 1400px) {
    width: 44%;
  }
  @media (max-width: 991px) {
    width: 38%;
  }
  @media (max-width: 600px) {
    width: 0%;
  }
`;
