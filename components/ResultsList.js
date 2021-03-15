import React from "react";
import { View, Image, StyleSheet, Text, FlatList } from "react-native";
import ResultDetail from "./ResultDetail";

const ResultsList = ({ title, results }) => {
  return (
    <View>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        horizontal
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return <ResultDetail result={item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    margin: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ResultsList;
