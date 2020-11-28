import React, { useState } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import ColorCounter from "../components/colorcounter";

const COLOR_INCREMENT_VALUE = 20;
const COLOR_DECREMENT_VALUE = -20;

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [blue, setBlue] = useState(0);
  const [green, setGreen] = useState(0);

  const setColor = (colorName, change, colorValue) => {
    if (!isValidChange(colorValue, change)) {
      return;
    }
    switch (colorName) {
      case "Red":
        setRed(red + change);
        break;
      case "Blue":
        setBlue(blue + change);
        break;
      case "Green":
        setGreen(green + change);
        break;
    }
  };

  const isValidChange = (color, change) => {
    if (color + change < 0 || color + change > 256) {
      return false;
    }
    return true;
  };

  return (
    <View>
      <ColorCounter
        colorName="Red"
        color="#FF0000"
        onIncrease={() => setColor("Red", COLOR_INCREMENT_VALUE, red)}
        onDecrease={() => setColor("Red", COLOR_DECREMENT_VALUE, red)}
      />
      <ColorCounter
        colorName="Green"
        color="#008B8B"
        onIncrease={() => setColor("Green", COLOR_INCREMENT_VALUE, green)}
        onDecrease={() => setColor("Green", COLOR_DECREMENT_VALUE, green)}
      />
      <ColorCounter
        colorName="Blue"
        color="#0276FD"
        onIncrease={() => setColor("Blue", COLOR_INCREMENT_VALUE, blue)}
        onDecrease={() => setColor("Blue", COLOR_DECREMENT_VALUE, blue)}
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

export default SquareScreen;
