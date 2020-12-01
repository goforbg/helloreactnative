import React from "react";
import { View, StyleSheet, TouchableOpacity, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button
          title="Click me for Components Screen"
          onPress={() => {
            navigation.navigate("Components");
          }}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Click me for List Screen"
          onPress={() => {
            navigation.navigate("List");
          }}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Click me for Image Screen"
          onPress={() => {
            navigation.navigate("ImageScreen");
          }}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Click me for Counter Screen"
          onPress={() => {
            navigation.navigate("CounterScreen");
          }}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Click me for Colors Screen"
          onPress={() => {
            navigation.navigate("ColorsScreen");
          }}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Click me for SquareScreen"
          onPress={() => {
            navigation.navigate("SquareScreen");
          }}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Click me for SquareScreen With Reducer"
          onPress={() => {
            navigation.navigate("SquareScreenReducer");
          }}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Click me for TextInputScreen"
          onPress={() => {
            navigation.navigate("TextInputScreen");
          }}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Click me for BoxScreen"
          onPress={() => {
            navigation.navigate("BoxScreen");
          }}
        />
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  button: {
    marginBottom: 10,
  },

  container: {
    flex: 1,
    flexDirection: "column",
    marginBottom: 10,
  },

  titleTextStyle: {
    fontSize: 50,
    textAlign: "center",
  },
});

export default HomeScreen;
