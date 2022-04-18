import Container from "../Container";
import s from "./Header.module.css";
import logoPng from "../../assets/logo.png";

const MENU = ["Menu 1", "Menu 2", "Menu 3", "Menu 4"];

const Header = () => {
  return (
    <header className={s.root}>
      <div className={s.header}>
        <Container className={s.headerWrap}>
          <div
            className={s.logo}
            style={{
              backgroundImage: `url(${logoPng})`,
              backgroundPosition: "0 0",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }}
          ></div>
          <ul className={s.nav}>
            {MENU.map((item, index) => (
              <li key={index}>
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </header>
  );
};

export default Header;
