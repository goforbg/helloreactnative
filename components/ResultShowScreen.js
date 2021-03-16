import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import api from "../api/rickandmortyapi";

const ResultShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);

  const characterId = navigation.getParam("character_id");

  const getResult = async (characterId) => {
    console.log(`Making API Call`);
    const result = await api.get(`/character/${characterId}`);
    console.log(result.data);
    setResult(result.data);
  };

  useEffect(() => {
    getResult(characterId);
  }, []);

  return (
    <>
      <View>{result && <Text>{result.name}</Text>}</View>
    </>
  );
};

const styles = StyleSheet.create({});
export default ResultShowScreen;
