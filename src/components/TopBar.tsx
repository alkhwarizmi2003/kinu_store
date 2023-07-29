import styled from "styled-components";
import TextButton from "./TextButton";

type Props = {};

const StyledTopBar = styled.div<Props>`
  display: flex;
  justify-content: space-evenly;
  align-items: center; 
  height: 55px;
  color: #504f4f;
  /* background-color: #0f1111; */
  /* background-color: #1b116e; */
  background-color: #202124;
  /* border-radius: 3px; */
  padding: 14px 30px 16px;
  opacity: 1;
`;



const handleButtonClick = () => {
  console.log('Button clicked!');
};


function TopBar({}: Props) {
  return (
    <StyledTopBar>
      {"alsdk jfdsf"}

      <TextButton
        text="Click me"
        onClick={() => {
          console.log("Button clicked!");
        }}
      />


<TextButton onClick={handleButtonClick}>
        Click me
      </TextButton>

      <TextButton onClick={handleButtonClick} disabled>
        <span>Disabled Button</span>
      </TextButton>

      <TextButton onClick={handleButtonClick}>
        <img src="button-icon.png" alt="Button Icon" />
        <span>Button with Icon</span>
      </TextButton>

      <TextButton onClick={handleButtonClick} textAlign="left">
        <strong>Custom Content</strong> <br/> with text and <em>HTML elements</em>
      </TextButton>

    </StyledTopBar>
  );
}

export default TopBar;
