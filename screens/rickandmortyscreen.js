import React from "react";
import { View, Text, ScrollView } from "react-native";
import SearchBar from "../components/searchbar";
import { useState } from "react";
import useRickAndMortyResults from "../hook/useRickAndMortyResults";
import ResultsList from "../components/ResultsList";

const RickAndMortyScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchApi, errorMessage, results] = useRickAndMortyResults();

  const filterResults = (gender) => {
    return results.filter((result) => {
      return result.gender.includes(gender);
    });
  };

  return (
    <>
      <SearchBar
        searchTerm={searchTerm}
        onTermChange={(newTerm) => setSearchTerm(newTerm)}
        onTermSubmit={() => searchApi(searchTerm)}
      />

      {errorMessage.length > 1 && <Text>Don't be a Jerry! </Text>}
      <ScrollView>
        <ResultsList
          title="Male Characters"
          results={filterResults("Male")}
        />
        <ResultsList
          title="Female Characters"
          results={filterResults("Female")}
        />
        <ResultsList
          title="Alien Characters"
          results={filterResults("unknown")}
        />
      </ScrollView>
    </>
  );
};

export default RickAndMortyScreen;
