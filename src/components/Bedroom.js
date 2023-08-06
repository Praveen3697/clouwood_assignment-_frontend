import React from "react";
import Light from "./Light";
import MyButton from "./MyButton";

const Bedroom = ({ lights, handleLightToggle }) => {
  return (
    <div className="bedroomContainer">
      <h3>Bedroom</h3>
      <div className="bedroomLights">
        <Light
          lightState={lights["Bedroom"]["1"]}
          onToggle={(newValue) => handleLightToggle("Bedroom", "1", newValue)}
          lightNumber="1"
        />
        <Light
          lightState={lights["Bedroom"]["2"]}
          onToggle={(newValue) => handleLightToggle("Bedroom", "2", newValue)}
          lightNumber="2"
        />
      </div>
      <div className="bedroomButtons">
        <MyButton
          name="lightOn"
          text="Both On"
          room="Bedroom"
          action="TURN_BOTH_ON"
        />
        <MyButton
          name="lightOff"
          text="Both Off"
          room="Bedroom"
          action="TURN_BOTH_OFF"
        />
      </div>
    </div>
  );
};

export default Bedroom;
