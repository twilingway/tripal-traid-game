import cn from "classnames";
import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import Heading from "../Heading";
import Text from "../Text";
import { ReactComponent as Like } from "./assets/heart.svg";
import s from "./CharacterCard.module.scss";

export default function CharacterCard({
  name,
  src,
  humanName,
  description,
  id,
  onLikeClick,
  isLike,
}) {
  const handleClick = () => {
    onLikeClick(id);
  };

  return (
    <div className={s.root}>
      <img className={s.cardImage} src={src} alt={name} />
      <div className={s.cardDetails}>
        <Heading className={s.cardName} level={2}>
          {name}
        </Heading>
        <Heading className={s.cardHumanName} level={4}>
          {humanName}
        </Heading>
        <Text className={s.cardDescription}>{description}</Text>
        <div className={s.cardMeta}>
          <div
            onClick={handleClick}
            className={cn(s.like, { [s.active]: isLike })}
          >
            <Like />
          </div>
          <div className={s.readBio}>
            <Link to={`/characters/${id}`}>ReadBio</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

CharacterCard.defaultProps = {
  isLike: false,
};

CharacterCard.propTypes = {
  name: PropTypes.string,
  src: PropTypes.string,
  humanName: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.number,
  onLikeClick: PropTypes.func,
  isLike: PropTypes.bool,
};
