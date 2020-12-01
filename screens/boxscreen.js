import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BoxScreen = (props) => {
  return (
    <View style={boxstyles.viewStyle}>
      <Text style={boxstyles.textStyle}>BoxScreen</Text>
    </View>
  );
};

const boxstyles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: "black",
    backgroundColor: "blue",
    margin: 5,
  },

  textStyle: {
    borderWidth: 10,
    borderColor: "red",
    margin: 20,
    padding: 20,
    color: "white",
  },
});
export default BoxScreen;
