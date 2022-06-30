import { useContext } from "react";
import { CharacterContext } from "../../CharacterContextProvider";

import CharacterCard from "../../components/CharacterCard";

import s from "./Characters.module.scss";

const Characters = () => {
  const { character, handleLikeClick } = useContext(CharacterContext);

  return (
    <div className={s.root}>
      <div className={s.cards}>
        {character.reduce((cards, item, index) => {
          if (index <= 5) {
            cards.push(
              <CharacterCard
                key={item.id}
                name={item.name}
                src={item.thumbnail.path}
                description={item.description}
                humanName={item.humanName}
                id={item.id}
                isLike={item.isLike}
                onLikeClick={() => handleLikeClick(item.id)}
              />
            );
          }
          return cards;
        }, [])}
      </div>
    </div>
  );
};

export default Characters;
