import cn from "classnames";
import { useState } from "react";
import { ReactComponent as Pen } from "../../assets/icon-pen.svg";
import Logo from "../../assets/logo.png";
import Footer from "../../components/Footer";
import s from "./Login.module.scss";

const Login = () => {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [form, setForm] = useState({});

  const handleOpenRegister = () => {
    setIsRegisterOpen(true);
  };
  const handleCloseRegister = (event) => {
    event.stopPropagation();
    setIsRegisterOpen(false);
  };

  const handleFormChange = (event) => {
    setForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div className={s.root}>
      <div className={s.headerLogo}>
        <img src={Logo} alt="Logo" />
      </div>
      <div className={cn(s.container, { [s.active]: isRegisterOpen })}>
        <div className={s.card}></div>
        <div className={s.card}>
          <h1 className={s.title}>Login</h1>
          <form onChange={handleFormChange}>
            <div className={s.inputContainer}>
              <input
                type="email"
                id="#email"
                required="required"
                name="email"
                placeholder=" "
              />
              <label htmlFor="#email">Email</label>
              <div className={s.bar}></div>
            </div>
            <div className={s.inputContainer}>
              <input
                type="password"
                id="#password"
                required="required"
                name="password"
                placeholder=" "
              />
              <label htmlFor="#password">Password</label>
              <div className={s.bar}></div>
            </div>
            <div className={s.buttonContainer}>
              <button>
                <span>Go</span>
              </button>
            </div>
          </form>
        </div>
        <div className={cn(s.card, s.alt)} onClick={handleOpenRegister}>
          <div className={cn(s.toggle, { [s.active]: isRegisterOpen })}>
            <Pen />
          </div>
          <h1 className={s.title}>
            Register
            <div className={s.close} onClick={handleCloseRegister}></div>
          </h1>
          <form>
            <div className={s.inputContainer}>
              <input type="email" id="#signup-email" required="required" />
              <label htmlFor="#signup-email">Email</label>
              <div className={s.bar}></div>
            </div>
            <div className={s.inputContainer}>
              <input
                type="password"
                id="#signup-password"
                required="required"
              />
              <label htmlFor="#signup-password">Password</label>
              <div className={s.bar}></div>
            </div>
            <div className={s.inputContainer}>
              <input
                type="password"
                id="#signup-repeat-password"
                required="required"
              />
              <label htmlFor="#signup-repeat-password">Repeat Password</label>
              <div className={s.bar}></div>
            </div>
            <div className={s.buttonContainer}>
              <button>
                <span>Register</span>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className={s.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default Login;
