import { useEffect } from "react";
import { createContext, useState } from "react";
import { CHARACTER } from "./pages/Main/characters";

export const CharacterContext = createContext(null);

const CharacterContextProvider = ({ children }) => {
  const [character, setCharacter] = useState(() => {
    return JSON.parse(localStorage.getItem("character")) || CHARACTER;
  });

  const handleLikeClick = (id) => {
    setCharacter((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return { ...item, isLike: !item.isLike };
        }
        return item;
      })
    );
  };

  useEffect(() => {
    localStorage.setItem("character", JSON.stringify(character));
  }, [character]);

  return (
    <CharacterContext.Provider value={{ character, handleLikeClick }}>
      {children}
    </CharacterContext.Provider>
  );
};

export default CharacterContextProvider;
