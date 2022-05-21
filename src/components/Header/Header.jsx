import cn from "classnames";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logoPng from "../../assets/logo.png";
import Container from "../Container";
import s from "./Header.module.scss";

const MENU = [
  { name: "Main", url: "/" },
  { name: "Characters", url: "/characters" },
  { name: "About", url: "/about" },
  { name: "Contacts", url: "/contacts" },
];

const Header = () => {
  const [small, setSmall] = useState(0);

  useEffect(() => {
    const onScroll = () => setSmall(window.scrollY);
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
                <NavLink
                  to={item.url}
                  className={({ isActive }) => (isActive ? s.active : null)}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </header>
  );
};

export default Header;
