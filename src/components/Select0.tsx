import { useState, FocusEvent, MouseEvent, FormEvent } from "react";
import styled from "styled-components";

type Props = {
  options: { id: number; value: string }[];
  headerHeight?: string;
  headerWidth?: string;
};

type HeaderProps = {
  dx?: string;
  dy?: string;
  selectedValueDx?: string;
};

const Header = styled.div<HeaderProps>`
  width: ${(props) => (props.dx ? props.dx : "100px")};
  height: ${(props) => (props.dy ? props.dy : "20px")};
  position: relative;
  display: grid;
  grid-template-columns: ${(props) =>
      props.selectedValueDx ? props.selectedValueDx : "2fr"} 20px;
  margin: 0px 0px 0px 0px !important;
  background-color: white;
  border: solid 1px grey;
  border-radius: 2px;
  &:hover {
    border: solid 1px black;
  }
  &:active {
    border: solid 1px #ff9900;
  }
`;

const Button = styled.div`
  grid-column: 2;
  height: 100%;
  width: 20px;
  position: relative;
  display: inline-block;
  /* float: right; */
  right: 0px;
  margin: 0px 0px 0px 0px !important;
  /* border: solid 1px grey; */
  /* border-radius: 2px; */
  &:hover {
    border: solid 1px black;
  }
  &:active {
    border: solid 1px #ff9900;
  }
`;

const Caret = styled.div`
  height: 0px;
  width: 0px;
  position: absolute;
  left: 50%;
  top: 50%;
  border: 0.25em solid transparent;
  border-top-color: #777;
  /* margin-left: 5px; */
  /* margin-right: 5px; */
  translate: -50% -50%;
`;

type OptionProps = {
  dx?: string;
  dy?: string;
};

const Option = styled.li<OptionProps>`
  width: 100%;
  height: "fit-content";
  background-color: white;
  text-align: left;
  &:hover {
    background-color: #7575df;
  }
  &:active {
    border: solid 1px #ff9900;
  }
`;

type OptionContainerProps = {
  dx?: string;
  dy?: string;
  isOptionsVisible: Boolean;
};

const OptionsContainer = styled.div<OptionContainerProps>`
  z-index: 10000;
  width: ${(props) => (props.dx ? props.dx : "fit-content")};
  height: ${(props) => (props.dy ? props.dy : "fit-content")};
  background-color: white;
  border: solid 1px red;
  border-radius: 2px;
  position: absolute;
  offset-position: 30px;
  list-style: none;
  overflow: hidden;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;

  max-height: ${(props) => (props.isOptionsVisible ? "200px" : "0px")};
  transition: ${(props) =>
    props.isOptionsVisible ? "300ms ease-out" : "250ms ease-out"};
  border-color: ${(props) =>
    props.isOptionsVisible ? "white" : "transparent"};

  &:hover {
    border: solid 1px black;
  }
  &:active {
    border: solid 1px #ff9900;
  }
`;

function Select0({ options, headerHeight, headerWidth }: Props) {
  const [isDropDown, setIsDropDown] = useState<Boolean>(false);
  const [selectedValue, setSelectedValue] = useState<string>(
    "Please select a value"
  );

  const dropDownOnClick = () => {
    console.log("---> Select0 -> dropDownOnClick()");
    setIsDropDown((d) => !d);
  };

  const optionOnMouseDown = (option: { id: number; value: string }) => {
    setSelectedValue(option.value);
    console.log(
      `---> Select0 -> Option -> optionOnMouseDown() -> ${option.value}`
    );
  };

  const dropDownOnBlur = (e: FocusEvent<HTMLInputElement>) => {
    console.log("---> Select0 -> dropDownOnBlur()");
    setIsDropDown(false);
  };

  return (
    <div onBlur={dropDownOnBlur}>
      <div>
        <Header
          tabIndex={0}
          onClick={dropDownOnClick}
          dy={headerHeight}
          dx={headerWidth}
        >
          <div
            style={{
              gridColumn: "1",
              textAlign: "start",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              overflow: "hidden",
              display: "block",
            }}
          >
            '{selectedValue} {isDropDown.toString()}'
          </div>
          <Button>
            <Caret />
          </Button>
        </Header>
        <OptionsContainer isOptionsVisible={isDropDown}>
          {options.map((option) => (
            <Option
              key={option.id}
              onMouseDown={() => optionOnMouseDown(option)}
            >
              {`  ${option.id} - ${option.value}`}
            </Option>
          ))}
        </OptionsContainer>
      </div>
    </div>
  );
}

export default Select0;
