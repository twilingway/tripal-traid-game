import { createElement } from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import s from "./Heading.module.scss";

export default function Heading({
  level,
  className,
  isBlack,
  children,
  isBackLine,
}) {
  const el = `h${level}`;
  return createElement(
    el,
    {
      className: cn(s.root, className, s[`level${level}`], {
        [s.colorBlack]: isBlack,
        [s.backLine]: isBackLine,
      }),
    },
    children
  );
}

Heading.defaultProps = {
  level: 1,
  isBlack: true,
  isBackLine: false,
};

Heading.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
  className: PropTypes.string,
  isBlack: PropTypes.bool,
  children: PropTypes.node,
  isBackLine: PropTypes.bool,
};
