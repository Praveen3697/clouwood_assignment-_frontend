const initialState = {
  lights: {
    Bedroom: {
      1: false,
      2: false,
    },
    Kitchen: {
      1: false,
      2: false,
    },
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_LIGHT":
      const { room, lightNumber, value } = action.payload;
      return {
        ...state,
        lights: {
          ...state.lights,
          [room]: {
            ...state.lights[room],
            [lightNumber]: value,
          },
        },
      };

    case "TURN_BOTH_ON":
      const { room: roomBothOn } = action.payload;
      return {
        ...state,
        lights: {
          ...state.lights,
          [roomBothOn]: {
            1: true,
            2: true,
          },
        },
      };

    case "TURN_BOTH_OFF":
      const { room: roomBothOFF } = action.payload;
      return {
        ...state,
        lights: {
          ...state.lights,
          [roomBothOFF]: {
            1: false,
            2: false,
          },
        },
      };

    case "TURN_ALL_ON":
      const { roomOne: kitchenLightsOn, roomTwo: bedroomLightsOn } =
        action.payload;
      return {
        ...state,
        lights: {
          ...state.lights,
          [kitchenLightsOn]: {
            1: true,
            2: true,
          },
          [bedroomLightsOn]: {
            1: true,
            2: true,
          },
        },
      };

    case "TURN_ALL_OFF":
      const { roomOne: kitchenLightsOff, roomTwo: bedroomLightsOff } =
        action.payload;
      return {
        ...state,
        lights: {
          ...state.lights,
          [kitchenLightsOff]: {
            1: false,
            2: false,
          },
          [bedroomLightsOff]: {
            1: false,
            2: false,
          },
        },
      };

    default:
      return state;
  }
};

export default reducer;
