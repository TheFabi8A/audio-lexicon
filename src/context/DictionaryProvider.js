import { createContext } from "react";

export const DictionaryContext = createContext()

export default function DictionaryProvider({children}) {

  return (
    <DictionaryProvider.Provider value={} >
      {children}
    </DictionaryProvider.Provider>
  );
}
