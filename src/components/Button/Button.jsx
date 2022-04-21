import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import s from "./Button.module.scss";

export default function Button({ isBlack, onClick, children }) {
  return (
    <button onClick={onClick} className={cn(s.button, { [s.black]: isBlack })}>
      {children}
    </button>
  );
}

Image.defaultProps = {
  isBlack: false,
  onClick: "Image",
  children: "ClickMe",
};

Image.propTypes = {
  isBlack: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node,
};