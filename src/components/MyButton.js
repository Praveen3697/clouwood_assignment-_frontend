import React from "react";
import { connect } from "react-redux";
import {
  turnBothOn,
  turnBothOff,
  turnAllOn,
  turnAllOff,
} from "../redux/actions";
import io from "socket.io-client";

const socket = io("http://localhost:4000");

const MyButton = ({ name, text, room, action, roomOne, roomTwo }) => {
  const handleButtonClick = () => {
    if (action === "TURN_BOTH_ON") {
      handleTurnBothOn(room);
    } else if (action === "TURN_BOTH_OFF") {
      handleTurnBothOff(room);
    } else if (action === "TURN_ALL_ON") {
      handleTurnAllOn(roomOne, roomTwo);
    } else if (action === "TURN_ALL_OFF") {
      handleTurnAllOff(roomOne, roomTwo);
    }
  };

  const handleTurnBothOn = (room) => {
    turnBothOn(room);
    socket.emit("message", {
      type: "TURN_BOTH_ON",
      payload: {
        room,
      },
    });
  };

  const handleTurnBothOff = (room) => {
    turnBothOff(room);
    socket.emit("message", {
      type: "TURN_BOTH_OFF",
      payload: { room },
    });
  };

  const handleTurnAllOn = (roomOne, roomTwo) => {
    turnAllOn(roomOne, roomTwo);
    socket.emit("message", {
      type: "TURN_ALL_ON",
      payload: { roomOne, roomTwo },
    });
  };

  const handleTurnAllOff = (roomOne, roomTwo) => {
    turnAllOff(roomOne, roomTwo);
    socket.emit("message", {
      type: "TURN_ALL_OFF",
      payload: { roomOne, roomTwo },
    });
  };

  return (
    <button
      className={`roomButton ${
        name === "lightOn" ? "turnLightsOn" : "turnLightsOff"
      } `}
      onClick={handleButtonClick}
    >
      {text}
    </button>
  );
};

const mapDispatchToProps = {
  turnBothOn,
  turnBothOff,
  turnAllOn,
  turnAllOff,
};

export default connect(null, mapDispatchToProps)(MyButton);
