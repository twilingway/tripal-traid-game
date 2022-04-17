import Container from "../Container";
import s from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className="root">
      <Container>
        <div className="footerWrap">
          Coded with
          <span className="heart"></span>
          by You
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
