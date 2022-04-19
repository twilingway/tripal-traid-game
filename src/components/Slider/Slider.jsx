import Heading from "../Heading";
import Container from "../Container";

import s from "./Slider.module.scss";

import logoPng from "../../assets/logo.png";

const Slider = () => {
  let count = 1;

  return (
    <section className={s.section}>
      <div className={s.slider}>
        <Container className={s.sliderContent}>
          <Heading isBackLine>Это заголовок!</Heading>
          <Heading level={6} isBlack>
            Wow.Wow.Wow
          </Heading>
          <Heading level={2} />
          <div className={s.image}>
            <img src={logoPng} alt="Logo" />
          </div>
          <div className={s.call}>
            <button className={s.button}>Wow</button>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Slider;
