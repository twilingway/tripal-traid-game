import { useContext } from "react";
import { Context } from "../../App";
import CharacterCard from "../../components/CharacterCard";

import s from "./Characters.module.scss";

const Characters = () => {
  const { character, handleLikeClick } = useContext(Context);

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
