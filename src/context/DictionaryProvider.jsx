import { createContext, useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

export const DictionaryContext = createContext();

export default function DictionaryProvider({ children }) {
  const [word, setWord] = useState(localStorage.getItem("word") || "developer");
  const { dataWord, errorFetch, isLoading } = useFetch(word);
  const [queryInput, setQueryInput] = useState(
    localStorage.getItem("word") || "developer"
  );

  const [selectedFont, setFont] = useState(
    localStorage.getItem("selectedFont") || "--font-family-lora"
  );

  useEffect(() => {
    localStorage.setItem("selectedFont", selectedFont);
  }, [selectedFont]);

  useEffect(() => {
    localStorage.setItem("word", word);
  }, [word]);

  return (
    <DictionaryContext.Provider
      value={{
        selectedFont,
        setFont,
        dataWord,
        word,
        setWord,
        queryInput,
        setQueryInput,
        errorFetch,
        isLoading,
      }}>
      {children}
    </DictionaryContext.Provider>
  );
}
