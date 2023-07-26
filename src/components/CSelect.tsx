import React, { useState, FocusEvent, MouseEvent } from "react";
import styles from "./CSelect.module.css";

// type SelectOption = {
//   id: number;
//   value: string;
// };

type Props = {
  options: any[];
  selectedValue?: string;
  onChange: (value: any | undefined) => void;
};

function CSelect({ options, selectedValue, onChange }: Props) {
  const [isDropDown, setIsDropDown] = useState<Boolean>(false);
  const [selValue, setSelectedValue] = useState<string>(
    "Please select a value"
  );

  const dropDownOnClick = () => {
    setIsDropDown((d) => !d);
    // let val = isDropDown ? "Dropped Down" : "-----";
    // // console.log('----------------- On Click .......................');
    // setSelectedValue(val);
  };

  const dropDownOnBlur = (e: FocusEvent<HTMLInputElement>) => {
    console.log("----------------- On Blur...");
    setIsDropDown(false);
  };

  const optionOnClick = (option: any) => {
    setSelectedValue(option.toString());
    onChange(option);
  };

  return (
    <div className={styles.body}>
      <div
        tabIndex={0}
        className={styles.dropDownHeader}
        onClick={dropDownOnClick}
        onBlur={dropDownOnBlur}
      >
        <span className={styles.selectedValueSpan}>
          <div>{selValue}</div>
        </span>
        {/* <button className={styles.clearBtn}>&times;</button> */}
        <div className={styles.divider}></div>
        <div className={styles.caret}></div>
        <div
          className={`${styles.optionContainer} ${
            isDropDown
              ? styles.optionContainerVisible
              : styles.optionContainerInvisible
          }`}
        >
          {options.map((option) => (
            <li className={styles.option} onClick={() => optionOnClick(option)} key={option.value}>
              {option.toString()}
            </li>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CSelect;