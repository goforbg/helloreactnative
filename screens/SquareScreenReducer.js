import React, { useReducer } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import ColorCounter from "../components/colorcounter";
import { styles } from "./homescreen";

const COLOR_INCREMENT_VALUE = 20;
const COLOR_DECREMENT_VALUE = -20;

const reducer = (state, action) => {
  switch (action.type) {
    case "change_red":
      if (!isValidChange(state.red, action.payload)) {
        return state;
      }
      return { ...state, red: state.red + action.payload };
    case "change_green":
      if (!isValidChange(state.green, action.payload)) {
        return state;
      }
      return { ...state, green: state.green + action.payload };
    case "change_blue":
      if (!isValidChange(state.blue, action.payload)) {
        return state;
      }
      return { ...state, blue: state.blue + action.payload };
    default:
      return state;
  }
};

const isValidChange = (color, change) => {
  if (color + change < 0 || color + change > 256) {
    return false;
  }
  return true;
};

const SquareScreenReducer = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, blue: 0, green: 0 });
  const { red, green, blue } = state;

  return (
    <View style={styles.container}>
      <ColorCounter
        colorName="Red"
        color="#FF0000"
        onIncrease={() =>
          dispatch({ type: "change_red", payload: COLOR_INCREMENT_VALUE })
        }
        onDecrease={() =>
          dispatch({ type: "change_red", payload: COLOR_DECREMENT_VALUE })
        }
      />
      <ColorCounter
        colorName="Green"
        color="#008B8B"
        onIncrease={() =>
          dispatch({ type: "change_green", payload: COLOR_INCREMENT_VALUE })
        }
        onDecrease={() =>
          dispatch({ type: "change_green", payload: COLOR_DECREMENT_VALUE })
        }
      />
      <ColorCounter
        colorName="Blue"
        color="#0276FD"
        onIncrease={() =>
          dispatch({ type: "change_blue", payload: COLOR_INCREMENT_VALUE })
        }
        onDecrease={() =>
          dispatch({ type: "change_blue", payload: COLOR_DECREMENT_VALUE })
        }
      />
      <View
        style={{
          height: 200,
          backgroundColor: `rgb(${red}, ${green},${blue})`,
        }}
      />
    </View>
  );
};

export default SquareScreenReducer;
