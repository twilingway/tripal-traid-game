import { useEffect, useState } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import s from "./Layout.module.scss";

const Layout = () => {
  const { id } = useParams();
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const element = document.getElementById(hash);

      if (element) {
        element.scrollIntoView({
          block: "center",
          behavior: "smooth",
        });

        window.addEventListener(
          "load",
          () => {
            element.scrollIntoView({
              block: "center",
              behavior: "smooth",
            });
          },
          { once: true }
        );
      }
    }
  }, [pathname, hash, id]);

  return (
    <div className={s.root}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
