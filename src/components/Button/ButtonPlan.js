import React, { useState } from "react";
import "../Button/Button.css";

function ButtonPlan(props) {

    function Button(props) {
        const { label, isSelected, onClick } = props;
        const classes = isSelected ? "button selected" : "button";
      
        return (
          <button class="ui-btn" className={classes} onClick={onClick}>
            {label}
          </button>
        );
      }

  const [selectedButton, setSelectedButton] = useState("button1");

  function handleButtonClick(button) {
    setSelectedButton(button);
  }

  return (
    <div>
      <div className="mt-3">
        <label htmlFor="NumerocvcInput">Selecione um Plano:</label>
        <br />
        <div className="mt-3">
          <Button type="button"  label="Basico" isSelected={selectedButton === "button1"} onClick={() => handleButtonClick("button1")} />
          <Button type="button"  label="Premium" isSelected={selectedButton === "button2"} onClick={() => handleButtonClick("button2")} />
        </div>
      </div>
    </div>
  );
}

export default ButtonPlan;