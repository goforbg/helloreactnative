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
    height: 200,
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 3,
  },

  textStyleOne: {
    height: 100,
    width: 100,
    backgroundColor: "blue",
  },

  textStyleTwo: {
    height: 100,
    width: 100,
    backgroundColor: "green",
    marginTop: 20,
  },

  textStyleThree: {
    height: 100,
    width: 100,
    backgroundColor: "red",
  },
});
export default BoxScreen;
