import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import AppContext from "../context/AppContext";

const BlogIndexScreen = () => {
  const anyName = useContext(AppContext);
  return (
    <View>
      <Text>Blog Index Screen {anyName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default BlogIndexScreen;
