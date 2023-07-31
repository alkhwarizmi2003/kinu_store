import { ReactNode } from "react";
import styled from "styled-components";

type Props = {
  children: ReactNode;
  textAlign?: string;
  onClick: () => void;
  disabled?: boolean;
};

const StyledSelect = styled.select<{ disabled?: boolean; textAlign?: string }>`
  text-align: ${(props) => (props.textAlign ? props.textAlign : "center")};
  font-size: 16px;
  background-color: ${(props) => (props.disabled ? "#ccc" : "transparent")};
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  outline: none;
  height: 100%;
  padding: 0px 10px 0px 10px !important;
  /* margin: 5px !important; */
  border: solid 1px transparent;
  &:hover {
    border: solid 1px white;
  }
  /* &:active {
    border: solid 2px #1b116e;
  } */
`;

function Select2({ children, onClick, disabled = false, textAlign }: Props) {
  return (
    <StyledSelect onClick={onClick} disabled={disabled} textAlign={textAlign}>
      {children}{" "}
    </StyledSelect>
  );
}

export default Select2;
