import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const ResultDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: result.image }} />
      <Text style={styles.name}>{result.name}</Text>
      <Text style={styles.desc}>{result.species} from {result.origin.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ResultDetail;
