import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import s from "./Text.module.css";

export default function Text({
  element,
  strong,
  italic,
  disabled,
  className,
  children,
}) {
  return React.createElement(
    element,
    {
      className: cn(s.root, className, {
        [s.strong]: strong,
        [s.italic]: italic,
        [s.disabled]: disabled,
      }),
    },
    children
  );
}

Text.defaultProps = {
  element: "div",
  strong: false,
  italic: false,
  disabled: false,
};

Text.propTypes = {
  element: PropTypes.oneOf(["div", "p", "span"]),
  strong: PropTypes.bool,
  italic: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
};
