import Container from "../Container";
import s from "./Header.module.scss";
import logoPng from "../../assets/logo.png";
import { useEffect, useState } from "react";
import cn from "classnames";
const MENU = ["Menu 1", "Menu 2", "Menu 3", "Menu 4"];

const Header = () => {
  const [small, setSmall] = useState(0);

  useEffect(() => {
    const onScroll = () => setSmall(window.scrollY);
    // window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header className={s.root}>
      <div className={cn(s.header, { [s.small]: small > 60 })}>
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
