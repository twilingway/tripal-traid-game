import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button/Button";
import Container from "../../components/Container";
import Heading from "../../components/Heading";
import Image from "../../components/Image";
import Text from "../../components/Text";
import s from "./Biography.module.scss";
import { BIO } from "./data";

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

const Biography = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data] = useState(BIO);

  return (
    <section className={s.section}>
      <div className={s.biography}>
        <Container className={s.biographyContent}>
          <Button isBlack onClick={() => navigate(-1, { replace: true })}>
            Go Back
          </Button>
          {data[id].map((item, index) => getBio(item, index))}
        </Container>
      </div>
    </section>
  );
};

export default Biography;
