import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { styles } from "./homescreen";

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button
          title="Increment"
          onPress={() => {
            console.log("Incrementing");
            setCounter(counter + 1);
          }}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Decrement"
          onPress={() => {
            console.log("Decrementing");
            setCounter(counter - 1);
          }}
        />
      </View>
      <Text style={styles.titleTextStyle}>Current count is : {counter}</Text>
    </View>
  );
};

export default CounterScreen;
