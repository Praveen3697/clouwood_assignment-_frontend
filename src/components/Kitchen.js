import React from "react";
import Light from "./Light";
import MyButton from "./MyButton";

const Kitchen = ({ lights, handleLightToggle }) => {
  return (
    <div className="kitchenContainer">
      <h3>Kitchen</h3>
      <div className="kitchenLights">
        <Light
          lightState={lights["Kitchen"]["1"]}
          onToggle={(newValue) => handleLightToggle("Kitchen", "1", newValue)}
          lightNumber="1"
        />
        <Light
          lightState={lights["Kitchen"]["2"]}
          onToggle={(newValue) => handleLightToggle("Kitchen", "2", newValue)}
          lightNumber="2"
        />
      </div>
      <div className="kitchenButtons">
        <MyButton
          name="lightOn"
          text="Both On"
          room="Kitchen"
          action="TURN_BOTH_ON"
        />
        <MyButton
          name="lightOff"
          text="Both Off"
          room="Kitchen"
          action="TURN_BOTH_OFF"
        />
      </div>
    </div>
  );
};

export default Kitchen;
