import cn from "classnames";
import { useEffect, useState } from "react";
import { ReactComponent as Pen } from "../../assets/icon-pen.svg";
import Logo from "../../assets/logo.png";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import Input from "../../components/Input/";
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

  const handleInputChange = (event) => {
    setForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (isRegisterOpen) {
      if (form.password !== form.repeat) {
        alert("пароли не совпадают");
        return;
      }
    }
    console.log("loginForm :>> ", form);
    setForm({});
  };

  useEffect(() => {
    setForm({});
  }, [isRegisterOpen]);

  return (
    <div className={s.root}>
      <div className={s.headerLogo}>
        <img src={Logo} alt="Logo" />
      </div>
      <div className={cn(s.container, { [s.active]: isRegisterOpen })}>
        <div className={s.card}></div>
        <div className={s.card}>
          <h1 className={s.title}>Login</h1>
          <form onSubmit={handleFormSubmit}>
            <Input
              type="email"
              id="#email"
              required={true}
              name="email"
              value={form.email ?? ""}
              label="Email"
              onChange={handleInputChange}
            />
            <Input
              type="password"
              id="#password"
              required={true}
              name="password"
              value={form.password ?? ""}
              label="Password"
              onChange={handleInputChange}
            />

            <div className={s.buttonContainer}>
              <Button>
                <span>Go</span>
              </Button>
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
          <form onSubmit={handleFormSubmit}>
            <Input
              type="email"
              id="#signup-email"
              required
              name="email"
              value={form.email ?? ""}
              label="Email"
              isAlt
              isActive={isRegisterOpen}
              onChange={handleInputChange}
            />
            <Input
              type="password"
              id="#signup-password"
              required
              name="password"
              value={form.password ?? ""}
              label="Password"
              isAlt
              isActive={isRegisterOpen}
              onChange={handleInputChange}
            />
            <Input
              type="password"
              id="#signup-repeat-password"
              required
              name="repeat"
              value={form.repeat ?? ""}
              label="Repeat Password"
              isAlt
              isActive={isRegisterOpen}
              onChange={handleInputChange}
            />

            <div className={s.buttonContainer}>
              <Button>
                <span>Register</span>
              </Button>
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
