import { useEffect, useState } from "react";

export default function useFetch(word) {
  const [dataWord, setDataWord] = useState([]);
  const [errorFetch, setErrorFetch] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (word.length > 0) {
      setLoading(true);
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
        })
        .finally(() => setLoading(false));
    }
  }, [word]);

  return { dataWord, errorFetch, isLoading };
}
