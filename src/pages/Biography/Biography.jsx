import React, { useEffect, useState } from "react";
import {
  Link,
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import Button from "../../components/Button/Button";
import Container from "../../components/Container";
import Heading from "../../components/Heading";
import Image from "../../components/Image";
import Text from "../../components/Text";
import { ScrollToTopOnMount } from "../Characters/Characters";
import { ReactComponent as LinkSvg } from "../../assets/link_icon.svg";
import { BIO } from "./data";
import s from "./Biography.module.scss";

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
        <div key={id}>
          <Heading level={2} isBlack className={s.heading}>
            {item.text}
            <Link to={`#${item.text}`} id={`#${item.text}`}>
              <LinkSvg />
            </Link>
          </Heading>
        </div>
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
  const { hash, pathname } = useLocation();

  const [data] = useState(BIO);

  useEffect(() => {
    const handleLoad = () => {
      const element = document.getElementById(decodeURIComponent(hash));

      if (element) {
        element.scrollIntoView({
          block: "center",
          behavior: "smooth",
        });
      }
    };
    if (hash) {
      window.addEventListener("load", handleLoad);
    }
    return () => window.removeEventListener("load", handleLoad);
  }, [hash, pathname, id]);

  if (!data[id]) {
    return <Navigate to="/characters" />;
  }

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
