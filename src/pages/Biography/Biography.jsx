import React, { useState } from "react";
import PropTypes from "prop-types";
import { BIO } from "./data";
import s from "./Biography.module.scss";
import Button from "../../components/Button/Button";
import Container from "../../components/Container";
import Heading from "../../components/Heading";
import Text from "../../components/Text";
import Image from "../../components/Image";

const propTypes = {
  id: PropTypes.number.isRequired,
  onBackClick: PropTypes.func.isRequired,
};

const defaultProps = {};

const getBio = (item, id) => {
  switch (item.type) {
    case "h1":
      return (
        <Heading key={id} level={1} isBlack>
          {item.text}
        </Heading>
      );
    case "h2":
      return (
        <Heading key={id} level={2} isBlack>
          {item.text}
        </Heading>
      );
    case "paragraph":
      return (
        <Text key={id} className={s.text}>
          {item.text}
        </Text>
      );
    case "img":
      return <Image key={id} src={item.src} alt={item.type} />;

    default:
      break;
  }
};

const Biography = ({ id, onBackClick }) => {
  const [data] = useState(BIO);

  return (
    <section className={s.section}>
      <div className={s.biography}>
        <Container className={s.biographyContent}>
          <Button isBlack onClick={onBackClick}>
            Go Back
          </Button>
          {data[id].map((item, index) => getBio(item, index))}
        </Container>
      </div>
    </section>
  );
};

Biography.propTypes = propTypes;
Biography.defaultProps = defaultProps;

export default Biography;
