import styled from "styled-components";
import TextButton from "./TextButton";

type Props = {};

const StyledTopMenuBar = styled.div<Props>`
  display: flex;
  justify-content: start;
  align-items: center; 
  height: 45px;
  color: white;
  background-color: #232F3E;
  padding: 14px 30px 16px;
  opacity: 1;
`;


function TopMenuBar({}: Props) {
  return (
    <StyledTopMenuBar>
      {"Menu Item"}
      <h1>My App</h1>
    
    </StyledTopMenuBar>




  );
}

export default TopMenuBar;
