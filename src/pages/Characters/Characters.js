import { useState } from "react";
import CharacterCard from "../../components/CharacterCard";
import Container from "../../components/Container";
import { CHARACTER } from "../Main/characters";
import s from "./Characters.module.scss";

const Characters = () => {
  const [character, setCharacter] = useState(CHARACTER);
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
  return (
    <div className={s.root}>
      <div className={s.cards}>
        {character.map((item, index) => {
          if (index < 5) {
            return (
              <CharacterCard
                name={item.name}
                src={item.thumbnail.path}
                description={item.description}
                humanName={item.humanName}
                id={item.id}
                isLike={item.isLike}
                onLikeClick={handleLikeClick}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default Characters;
