import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BoxScreen = (props) => {
  return (
    <View style={boxstyles.viewStyle}>
      <Text style={boxstyles.textStyleOne}>Child #1</Text>
      <Text style={boxstyles.textStyleTwo}>Child #2</Text>
      <Text style={boxstyles.textStyleThree}>Child #3</Text>
    </View>
  );
};

const boxstyles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: "black",
    height: 200,
  },

  textStyleOne: {
    borderWidth: 3,
    borderColor: "red",
  },

  textStyleTwo: {
    borderWidth: 3,
    borderColor: "red",
    fontSize: 18,
    position: "absolute",
    backgroundColor: "red",
    ...StyleSheet.absoluteFillObject,
  },

  textStyleThree: {
    borderWidth: 3,
    borderColor: "red",
  },
});
export default BoxScreen;
