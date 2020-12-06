import React from "react";
import { View, Text } from "react-native";
import SearchBar from "../components/searchbar";
import { useState } from "react";
import rickandmortyapi from "../api/rickandmortyapi";

const RickAndMortyScreen = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (query) => {
    try {
      const response = await rickandmortyapi.get("/character", {
        params: {
          name: query,
        },
      });
      setResults(response.data.results);
      setErrorMessage("");
    } catch (error) {
      console.error("Error in search api", error);
      setErrorMessage("Some error occured");
    }
  };

  return (
    <View>
      <SearchBar
        searchTerm={searchTerm}
        onTermChange={(newTerm) => setSearchTerm(newTerm)}
        onTermSubmit={() => searchApi(searchTerm)}
      />
      <Text>We found {results.length} results</Text>
      {errorMessage.length > 1 ? <Text>Some error happened! </Text> : null}
    </View>
  );
};

export default RickAndMortyScreen;
