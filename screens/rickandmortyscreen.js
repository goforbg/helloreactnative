import React from "react";
import { View, Text } from "react-native";
import SearchBar from "../components/searchbar";
import { useState } from "react";
import useRickAndMortyResults from "../hook/useRickAndMortyResults";

const RickAndMortyScreen = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchApi, errorMessage, results] = useRickAndMortyResults();

  return (
    <View>
      <SearchBar
        searchTerm={searchTerm}
        onTermChange={(newTerm) => setSearchTerm(newTerm)}
        onTermSubmit={() => searchApi(searchTerm)}
      />
      {errorMessage.length > 1 ? (
        <Text>Some error happened! </Text>
      ) : (
        <Text>We found {results[0].name}</Text>
      )}
    </View>
  );
};

export default RickAndMortyScreen;
