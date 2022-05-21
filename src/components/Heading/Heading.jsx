import cn from "classnames";
import PropTypes from "prop-types";
import { createElement } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as LinkSvg } from "../../assets/link_icon.svg";
import Image from "../../components/Image";
import Text from "../../components/Text";
import s from "./Heading.module.scss";

export const getHeading = (item, id) => {
  switch (item.type) {
    case "h1":
      return (
        <Heading key={id} level={1} isBlack>
          {item.text}
        </Heading>
      );
    case "h2":
      return (
        <div key={id}>
          <Heading level={2} isBlack className={s.heading}>
            {item.text}
            <Link
              to={`#${item.text.replace(/ /g, "_")}`}
              id={`#${item.text.replace(/ /g, "_")}`}
            >
              <LinkSvg />
            </Link>
          </Heading>
        </div>
      );
    case "paragraph":
      return (
        <Text key={id} className={s.text}>
          {item.text}
        </Text>
      );
    case "img":
      return <Image key={id} src={item.src} alt={item.type} />;

    default:
      break;
  }
};

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
