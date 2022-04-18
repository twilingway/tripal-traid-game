import Heading from "../Heading";
import Container from "../Container";

import s from "./Slider.module.css";

import logoPng from "../../assets/logo.png";

const Slider = () => {
  return (
    <section className={s.section}>
      <div className={s.slider}>
        <Container className={s.sliderContent}>
          <Heading level={1}>Это заголовок!</Heading>
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
