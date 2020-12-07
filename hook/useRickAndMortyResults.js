import { useState, useEffect } from "react";
import rickandmortyapi from "../api/rickandmortyapi";

export default () => {
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

  useEffect(() => {
    searchApi("rick");
  }, []);

  return [searchApi, errorMessage, results];
};
