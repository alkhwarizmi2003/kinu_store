import React from "react";
import styled from "styled-components";
import { MouseEventHandler } from "react";

type Props = {};

// color: #0F1111;
// color: #ffffff;
// background-color: #1b116e;
// display: inline-block;

const StyledTopBar = styled.div<Props>`
  color: #ffffff;
  background-color: #0f1111;
  cursor: pointer;
  border-radius: 3px;
  padding: 14px 30px 16px;
  opacity: 1;
`;

function TopBar({}: Props) {
  return <StyledTopBar>{"alsdk jfdsf"}</StyledTopBar>;
}

export default TopBar;
