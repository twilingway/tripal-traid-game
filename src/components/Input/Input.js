import PropTypes from "prop-types";
import cn from "classnames";
import s from "./Input.module.scss";

const Input = ({ label, isAlt, isActive, ...rest }) => {
  return (
    <div
      className={cn({ [s.active]: isActive, [s.alt]: isAlt }, s.inputContainer)}
    >
      <input {...rest} placeholder=" " />

      <label htmlFor={rest.id}>{label}</label>
      <div className={s.bar}></div>
    </div>
  );
};

Input.defaultProps = {
  type: "text",
  required: false,
  label: "Label",
  isAlt: false,
  isActive: false,
};

Input.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  required: PropTypes.bool,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string,
  isAlt: PropTypes.bool,
  isActive: PropTypes.bool,
  children: PropTypes.node,
};

export default Input;
