import { useState, FocusEvent, MouseEvent } from "react";
import styled from "styled-components";

type Props = {
  options: { id: number; value: string }[];
};

const Header = styled.div`
  position: relative;
  margin: 50px 100px 0px 100px !important;
  border: solid 1px grey;
  border-radius: 2px;
  &:hover {
    border: solid 1px black;
  }
  &:active {
    border: solid 1px #ff9900;
  }
`;

const Options = styled.div<{ isOptionsVisible: Boolean }>`
  height: 100px;
  width: fit-content;
  border: solid 1px red;
  border-radius: 2px;
  position: absolute;
  list-style: none;
  overflow: hidden;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  z-index: 10000;

  max-height: ${(props) => (props.isOptionsVisible ? "200px" : "0px")};
  transition: ${(props) =>
    props.isOptionsVisible ? "300ms ease-out" : "250ms ease-out"};
  border-color: ${(props) => (props.isOptionsVisible ? "red" : "transparent")};

  &:hover {
    border: solid 1px black;
  }
  &:active {
    border: solid 1px #ff9900;
  }
`;

function Select0({ options }: Props) {
  const [isDropDown, setIsDropDown] = useState<Boolean>(false);
  const [selValue, setSelectedValue] = useState<string>(
    "Please select a value"
  );
  const dropDownOnClick = () => {
    console.log("drop down on Click .............");
    setIsDropDown((d) => !d);
  };

  const dropDownOnBlur = (e: FocusEvent<HTMLInputElement>) => {
    console.log("drop down on blurrrrrrrrrr.............");
    setIsDropDown((d) => !d);
  };

  return (
    <div tabIndex={0}>
      <Header onBlur={dropDownOnBlur} onClick={dropDownOnClick}>{"DD Header {text}"}</Header>
      <Options isOptionsVisible={isDropDown} onBlur={dropDownOnBlur}>
        {options.map((option) => (
          <li key={option.value}>{option.value}</li>
        ))}
      </Options>
    </div>
  );
}

export default Select0;
