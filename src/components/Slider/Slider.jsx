import Heading from "../Heading";
import Container from "../Container";

import s from "./Slider.module.scss";

import logoPng from "../../assets/logo.png";
import Button from "../Button/Button";
import Image from "../Image";

const Slider = () => {
  return (
    <section className={s.section}>
      <div className={s.slider}>
        <Container className={s.sliderContent}>
          <Heading isBackLine isBlack={false}>
            Triple Triad Game
          </Heading>
          <Heading level={6} isBlack={false}>
            Wow.Wow.Wow
          </Heading>
          <Heading level={2} />
          <div className={s.image}>
            <Image src={logoPng} alt="Logo" />
          </div>
          <div className={s.call}>
            <Button>Wow</Button>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Slider;
