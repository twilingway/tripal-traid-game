import React, { useContext } from "react";
import { Context } from "../../App";
import CharacterCard from "../../components/CharacterCard";
import Container from "../../components/Container";
import Heading from "../../components/Heading";
import Slider from "../../components/Slider";

import s from "./Main.module.scss";

export default function Main() {
  const { character, handleLikeClick } = useContext(Context);

  // const handleLikeClick = (id) => {
  //   setCharacter((prev) =>
  //     prev.map((item) => {
  //       if (item.id === id) {
  //         return { ...item, isLike: !item.isLike };
  //       }
  //       return item;
  //     })
  //   );
  // };

  return (
    <>
      <Slider />
      <section className={s.cardSection}>
        <Container>
          <div className={s.cardTitle}>
            <Heading isBlack isBackLine>
              Marvel Cards
            </Heading>
            <Heading level={2} isBlack>
              Collect your best five
            </Heading>
          </div>
          <div className={s.cardWrap}>
            {character.map((item) => {
              return (
                <div key={item.id}>
                  <CharacterCard
                    name={item.name}
                    src={item.thumbnail.path}
                    description={item.description}
                    humanName={item.humanName}
                    id={item.id}
                    isLike={item.isLike}
                    onLikeClick={() => handleLikeClick(item.id)}
                  />
                </div>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
