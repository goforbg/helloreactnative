import React, { useState } from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const ColorsScreen = () => {
  const [colors, setColors] = useState([]);

  return (
    <View>
      <Button
        title="Add a Color"
        onPress={() => setColors([...colors, generateRandomBgColor()])}
      />
      <FlatList
        keyExtractor={(item) => {
          console.log(`Item is ${item}`);
          return item;
        }}
        data={colors}
        renderItem={({ item }) => {
          console.log(`render item - ${item}`);
          return <View style={{ height: 200, backgroundColor: item }} />;
        }}
      />
    </View>
  );
};

const generateRandomBgColor = () => {
  const red = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  return `rgb(${red},${blue},${green})`;
};

export default ColorsScreen;
