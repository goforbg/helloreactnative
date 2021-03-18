import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import api from "../api/rickandmortyapi";

const ResultShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const [images, setImages] = useState([]);

  const characterId = navigation.getParam("character_id");

  const getResult = async (characterId) => {
    console.log(`Making API Call`);
    const result = await api.get(`/character/${characterId}`);
    console.log(result.data);
    setResult(result.data);
    setImages([result.data.image]);
  };

  useEffect(() => {
    getResult(characterId);
  }, []);

  return (
    <>
      <View>{result && <Text>{result.name}</Text>}</View>
      {images && (
        <FlatList
          data={images}
          renderItem={({ item }) => {
            return (
              <>
                <Image
                  style={{ width: 400, height: 200 }}
                  source={{ uri: item }}
                />{" "}
              </>
            );
          }}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({});
export default ResultShowScreen;
