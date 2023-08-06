// Constants for action types
export const TOGGLE_LIGHT = "TOGGLE_LIGHT";
export const TURN_BOTH_ON = "TURN_BOTH_ON";
export const TURN_BOTH_OFF = "TURN_BOTH_OFF";
export const TURN_ALL_ON = "TURN_ALL_ON";
export const TURN_ALL_OFF = "TURN_ALL_OFF";

// Action creators
export const toggleLight = (room, lightNumber, value) => ({
  type: TOGGLE_LIGHT,
  payload: {
    room,
    lightNumber,
    value,
  },
});

export const turnBothOn = (room) => ({
  type: TURN_BOTH_ON,
  payload: {
    room,
  },
});

export const turnBothOff = (room) => ({
  type: TURN_BOTH_OFF,
  payload: {
    room,
  },
});

export const turnAllOn = (roomOne, roomTwo) => ({
  type: TURN_ALL_ON,
  payload: {
    roomOne,
    roomTwo,
  },
});

export const turnAllOff = (roomOne, roomTwo) => ({
  type: TURN_ALL_OFF,
  payload: {
    roomOne,
    roomTwo,
  },
});
