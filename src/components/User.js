import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  toggleLight,
  turnBothOn,
  turnBothOff,
  turnAllOn,
  turnAllOff,
} from "../redux/actions";
import io from "socket.io-client";
import Bedroom from "./Bedroom";
import Kitchen from "./Kitchen";
import MyButton from "./MyButton";

const socket = io("http://localhost:4000");

const User = ({
  lights,
  toggleLight,
  turnBothOn,
  turnBothOff,
  turnAllOn,
  turnAllOff,
  user,
}) => {
  const [localLights, setLocalLights] = useState(lights);

  /**
   * Inside useEffect hook incoming messages from the WebSocket server are handled.
   * It also updates the state based on the received message.
   */

  useEffect(() => {
    socket.on("message", (message) => {
      const { type, payload } = message;
      if (type === "LIGHT_STATE_CHANGED") {
        const { room, lightNumber, value } = payload;
        toggleLight(room, lightNumber, value);
      } else if (type === "BOTH_ON") {
        const { room } = payload;
        turnBothOn(room);
      } else if (type === "BOTH_OFF") {
        const { room } = payload;
        turnBothOff(room);
      } else if (type === "ALL_ON") {
        const { roomOne, roomTwo } = payload;
        turnAllOn(roomOne, roomTwo);
      } else if (type === "ALL_OFF") {
        const { roomOne, roomTwo } = payload;
        turnAllOff(roomOne, roomTwo);
      }
    });

    setLocalLights(lights);
  }, [lights, toggleLight, turnBothOn, turnBothOff, turnAllOn, turnAllOff]);

  const handleLightToggle = (room, lightNumber, newValue) => {
    setLocalLights((prevLights) => ({
      ...prevLights,
      [room]: {
        ...prevLights[room],
        [lightNumber]: newValue,
      },
    }));
    socket.emit("message", {
      type: "TOGGLE_LIGHT",
      payload: {
        room,
        lightNumber,
        value: newValue,
      },
    });
  };

  return (
    <div className="userContainer">
      <div>
        <h2>User {user}</h2>
      </div>
      <div className="userRooms">
        <Bedroom lights={localLights} handleLightToggle={handleLightToggle} />
        <Kitchen lights={localLights} handleLightToggle={handleLightToggle} />
      </div>
      <div className="userButtons">
        <MyButton
          name="lightOn"
          text=" All On"
          roomOne="Kitchen"
          roomTwo="Bedroom"
          action="TURN_ALL_ON"
        />
        <MyButton
          name="lightOff"
          text=" All Off"
          roomOne="Kitchen"
          roomTwo="Bedroom"
          action="TURN_ALL_OFF"
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  lights: state.lights,
});

const mapDispatchToProps = {
  toggleLight,
  turnBothOn,
  turnBothOff,
  turnAllOn,
  turnAllOff,
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
