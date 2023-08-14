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
  /* &:hover {
    background-color: #7575df;
  }
  &:active {
    border: solid 1px #ff9900;
  } */
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
`;

function Select0({ options, headerHeight, headerWidth }: Props) {
  const [isDropDown, setIsDropDown] = useState<Boolean>(false);
  const [selectedValue, setSelectedValue] = useState<string>(
    "Please select a value"
  );

  const dropDownOnClick = () => {
    // console.log("drop down on Click .............");
    setIsDropDown((d) => !d);
  };

  const optionOnClick = (value: string) => {
    // setSelectedValue(value);
    console.log(`Option -> onClick() -> ${value}`);
  };

  const dropDownOnBlur = (e: FocusEvent<HTMLInputElement>) => {
    // console.log("drop down on blurrrrrrrrrr.............");
    setIsDropDown(false);
  };

  return (

    
<div onBlur={dropDownOnBlur}>

    <div >
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
      <div
        style={{
          position: "absolute",
          listStyle: "none",
          top: "30px",
          overflow: "hidden",
          boxSizing: "border-box",
          borderRadius: "2px",
          backgroundColor: "white",
          boxShadow:
            "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
          zIndex: "10000",
          height: isDropDown ? "fit-content" : "0px",
          maxHeight: isDropDown ? "fit-content" : "0px",
          // minHeight: isDropDown ? "200px" : "0px",
        }}
        
      >
        <ul>
          <li onMouseDown={() => console.log("11111111111111")}>Karachi</li>
          <li onMouseDown={() => console.log("22222222")}>Lahore</li>
          <li onMouseDown={() => console.log("33333333333333")}>Islamabad</li>
          <li onMouseDown={() => console.log("44444444444")}>Peshawar</li>
          <li onMouseDown={() => console.log("55555555555")}>Multan</li>
        </ul>
      </div>
    </div></div>
  );
}

export default Select0;

{
  /* <div>
{options.map((option) => (
))}
</div> */
}

// onClick={() =>
//   console.log(`Option -> onClick() -> ${option.value}`)
// }
// onChange={(e) => optionOnChange(e, option.value)}
// onMouseEnter={() => 32
//   // console.log(`Option -> onMouseEnter() -> ${option.value}`)
// }

{
  /* <Option
          key={options[0].id}
          onMouseUp={() =>
            console.log(`Option -> onMouseUp() -> ${options[0].value}`)
          }
        >
          {`  ${options[0].id} - ${options[0].value}`}
        </Option>
        <Option
          key={options[1].id}
          onMouseUp={() =>
            console.log(`Option -> onMouseUp() -> ${options[1].value}`)
          }
        >
          {`  ${options[1].id} - ${options[1].value}`}
        </Option>
        <Option
          key={options[2].id}
          onMouseUp={() =>
            console.log(`Option -> onMouseUp() -> ${options[2].value}`)
          }
        >
          {`  ${options[2].id} - ${options[2].value}`}
        </Option>
        <Option
          key={options[3].id}
          onMouseUp={() =>
            console.log(`Option -> onMouseUp() -> ${options[3].value}`)
          }
        >
          {`  ${options[3].id} - ${options[3].value}`}
        </Option>
        <Option
          key={options[4].id}
          onMouseUp={() =>
            console.log(`Option -> onMouseUp() -> ${options[4].value}`)
          }
        >
          {`  ${options[4].id} - ${options[4].value}`}
        </Option>
        <Option
          key={'asdf1144'}
          onMouseUp={() =>
            console.log(`Option -> onMouseUp() -> ${options[5].value}`)
          }
        >
          {`  ${options[5].id} - ${options[5].value}`}
        </Option> */
}
/* transition: ${(props) =>
    props.isOptionsVisible ? "300ms ease-out" : "250ms ease-out"};
  border-color: ${(props) =>
    props.isOptionsVisible ? "white" : "transparent"}; */

// &:hover {
//   border: solid 1px black;
// }
// &:active {
//   border: solid 1px #ff9900;
// }

{
  /* {options.map((option) => (
            <li
              key={option.id}
              onMouseEnter={() => console.log("......................ASDF")}
              onClick={() => console.log("......................XXXXXXX")}
            >
              {`  ${option.id} - ${option.value}`}
            </li>
          ))} */
}
// width: `${headerWidth ? headerWidth : "fit-content"}`,
// height: `${headerHeight ? headerHeight : "fit-content"}`,
// border: "solid 1px red",
// offsetPosition: "30px",
