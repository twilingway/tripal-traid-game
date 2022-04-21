import React from "react";
import PropTypes from "prop-types";

export default function Image({ src, alt }) {
  return <img src={src} alt={alt} />;
}

Image.defaultProps = {
  src: "",
  alt: "Image",
};

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};
