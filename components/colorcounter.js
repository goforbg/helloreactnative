import React, { useState } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { styles } from "../screens/homescreen";

const ColorCounter = ({ colorName, color, onIncrease, onDecrease }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleTextStyle}>{colorName}</Text>
      <View style={styles.button}>
        <Button
          title={`Increment ${colorName}`}
          color={color}
          onPress={() => onIncrease()}
        />
      </View>
      <View style={styles.button}>
        <Button
          title={`Decrement ${colorName}`}
          color={color}
          onPress={() => onDecrease()}
        />
      </View>
    </View>
  );
};

export default ColorCounter;
