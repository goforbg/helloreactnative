import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";

const ImageDetail = (props) => {
  return (
    <View>
      <Image
        source={{ uri: props.imageSource }}
        style={{ width: 400, height: 200 }}
      ></Image>
      <Text>{props.title}</Text>
      <Text>Score - {props.score}</Text>
    </View>
  );
};
export default ImageDetail;
