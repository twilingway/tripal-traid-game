import s from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={s.root}>
      <div className={s.footerWrap}>
        Coded with
        <span className={s.heart}></span>
        by You
      </div>
    </footer>
  );
};

export default Footer;
