import { ReactNode } from "react";
import styled from "styled-components";

type Props = {
  children: ReactNode;
  textAlign?: string;
  onClick: () => void;
  disabled?: boolean;
};

const Button = styled.button<{ disabled?: boolean; textAlign?: string }>`
  text-align: ${(props) => (props.textAlign ? props.textAlign : "center")};
  font-size: 16px;
  background-color: ${(props) => (props.disabled ? "#ccc" : "transparent")};
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  outline: none;
  height: 100%;


    padding: 0px 100px 0px 10px !important;
    margin: 5px !important;
  

  &:hover {
    border: solid 1px white;
    /* background-color: ${(props) =>
      props.primary ? "#55bd90" : "#6bedb5"}; */
  }
  /* &:active {
    border: solid 2px #1b116e;
    padding: ${(props) =>
    props.size === "small"
      ? "5px 23px 6px"
      : props.size === "medium"
      ? "7px 28px 9px"
      : "12px 28px 14px"};
  } */
`;

function TextButton({ children, onClick, disabled = false, textAlign }: Props) {
  return (
    <Button onClick={onClick} disabled={disabled} textAlign={textAlign}>
      {children}{" "}
    </Button>
  );
}

export default TextButton;
