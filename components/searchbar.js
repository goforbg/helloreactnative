import React from "react";
import { View, Image, StyleSheet, Text, Platform } from "react-native";
import { Feather } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";

const SearchBar = ({ searchTerm, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.searchIconStyle} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder="Search"
        value={searchTerm}
        onChangeText={(newTerm) => onTermChange(newTerm)}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    flexDirection: "row",
    height: 50,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
    marginHorizontal: 15,
    backgroundColor: "#F0EEEE",
  },
  inputStyle: {
    flex: 1,
    height: 50,
    borderWidth: 0,
    fontSize: 25,
  },
  searchIconStyle: {
    fontSize: 35,
    color: "black",
    marginHorizontal: 15,
  },
});

export default SearchBar;
