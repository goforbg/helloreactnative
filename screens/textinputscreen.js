import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";

const TextInputScreen = (props) => {
  const [password, setPassword] = useState("");

  const isValidPassword = (length) => {
    return length > 5;
  };

  return (
    <View>
      <Text>Enter your password</Text>

      <TextInput
        style={styles.textInput}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(newValue) => setPassword(newValue)}
      />

      {isValidPassword(password.length) ? null : (
        <Text>Your Password must be 5 characters or longer.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
});

export default TextInputScreen;
