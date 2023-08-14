import { useState } from "react";
import styled from "styled-components";

type Props = {
  options: { id: number; value: string }[];
};

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

function SelectTest({ options }: Props) {
  const [selectedValue, setSelectedValue] = useState<string>("Select Test");

  const optionOnClick = (value: string) => {
    setSelectedValue(value);
    console.log(`Option -> onClick() -> ${value}`);
  };

  return (
    <div
    style={{
      width: "100%", position: "absolute",
      listStyle: "none",
      top: "30px",
      overflow: "hidden",
      boxSizing: "border-box",
      borderRadius: "5px",
      backgroundColor: "white",
      zIndex: "10000",
    }}
    >
      {options.map((option) => (
        <Option key={option.id} onClick={() => optionOnClick(option.value)}>
          {`  ${option.id} - ${option.value}`}
        </Option>
      ))}
    </div>
  );
}

export default SelectTest;

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
