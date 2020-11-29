import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { styles } from "./homescreen";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + action.payload };
    case "decrement":
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const { count } = state;

  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button
          title="Increment"
          onPress={() => {
            console.log("Incrementing Reducer");
            dispatch({ type: "increment", payload: 1 });
          }}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Decrement Reducer"
          onPress={() => {
            console.log("Decrementing");
            dispatch({ type: "decrement", payload: 1 });
          }}
        />
      </View>
      <Text style={styles.titleTextStyle}>Current count is : {count}</Text>
    </View>
  );
};

export default CounterScreen;
