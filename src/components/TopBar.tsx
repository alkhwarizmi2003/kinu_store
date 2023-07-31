import styled from "styled-components";
import TextButton from "./TextButton";
import {BsCaretDownFill} from "react-icons/bs";

// #FF9900

type Props = {};

const StyledTopBar = styled.div<Props>`
  display: flex;
  position: static;
  float: none;
  /* justify-content: space-evenly; */
  /* align-items: center;  */
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
  console.log("Button clicked!");
};

const searchBoxStyle = {
  display: "flex",
  flex: "1 1 auto",
  border: "2px solid white",

  width: "140px",
  height: "60px",
};

const searchBoxLeftMenu = {
  display: "flex",
  flex: "1 1 auto",
  border: "2px solid white",
  width: "140px",
  height: "60px",
};

const searchBoxTextBox = {
  display: "flex",
  flex: "1 1 auto",
  border: "2px solid white",

  width: "140px",
  height: "60px",
};
const searchBoxRightButton = {
  display: "flex",
  flex: "1 1 auto",
  border: "2px solid white",

  width: "140px",
  height: "60px",
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

      <TextButton onClick={handleButtonClick}>Click me</TextButton>

      <TextButton onClick={handleButtonClick} textAlign="left">
        Deliver to
        <br /> <strong>Pakistan</strong>
      </TextButton>

      <TextButton onClick={handleButtonClick} textAlign="left">
        <strong>EN</strong>
      </TextButton>
      <div style={searchBoxStyle}>

<div style={searchBoxLeftMenu}> 
<BsCaretDownFill color="white" size="10px"/>
</div>
<div style={searchBoxTextBox}> </div>
<div style={searchBoxRightButton}> </div>

      </div>
      <TextButton onClick={handleButtonClick} disabled>
        <span>Disabled Button</span>
      </TextButton>

      <TextButton onClick={handleButtonClick}>

        <img src="button-icon.png" alt="Button Icon" />
        <span>Button with Icon</span>


      </TextButton>

      <TextButton onClick={handleButtonClick} textAlign="left">
        Hi, Sher Ali
        <br /> <strong>Account & Lists</strong>
      </TextButton>

      <TextButton onClick={handleButtonClick} textAlign="left">
        Returns
        <br /> <strong>& Orders</strong>
      </TextButton>
    </StyledTopBar>
  );
}

export default TopBar;
