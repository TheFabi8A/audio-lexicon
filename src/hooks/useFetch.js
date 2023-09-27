import { useEffect, useState } from "react";

export default function useFetch(word) {
  const [dataWord, setDataWord] = useState([]);
  const [errorFetch, setErrorFetch] = useState("");

  useEffect(() => {
    if (word.length > 0) {
      fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then((response) => {
          if (response.status === "404") {
            throw new Error("Word not found");
          }
          return response.json();
        })
        .then((data) => {
          setDataWord(data);
        })
        .catch((error) => {
          setErrorFetch(error);
        });
    }
  }, [word]);

  return { dataWord, errorFetch };
}
