import React from "react";
import { View, Text } from "react-native";
import SearchBar from "../components/searchBar";
import { useState } from "react";

const RickAndMortyScreen = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <View>
      <SearchBar
        searchTerm={searchTerm}
        onTermChange={(newTerm) => setSearchTerm(newTerm)}
      />
      <Text>RickAndMortyScreen</Text>
    </View>
  );
};

export default RickAndMortyScreen;
