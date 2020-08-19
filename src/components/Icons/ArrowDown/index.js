import React from "react";
import PropTypes from "prop-types";

const ArrowDown = ({ stroke, ...props }) => (
  <svg
    width='32px'
    height='32px'
    viewBox='0 0 32 32'
    version='1.1'
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    {...props}
  >
    <g
      id='shape'
      transform='translate(9.000000, 13.000000)'
      fillRule='nonzero'
      stroke={stroke}
      strokeWidth='2'
    >
      <path
        d='M4.40709895,3.49963326 L10.389649,-2.82299471 C10.5367837,-2.97849322 10.5367837,-3.22787761 10.389649,-3.38337612 C10.2425144,-3.53887463 10.0065437,-3.53887463 9.85940908,-3.38337612 L3.61035098,3.22090952 C3.46321634,3.37640803 3.46321634,3.62579242 3.61035098,3.78129093 L9.85940908,10.3826426 C9.93158834,10.4589249 10.0287527,10.5 10.123141,10.5 C10.2175292,10.5 10.3146936,10.4618589 10.3868729,10.3826426 C10.5340075,10.2271441 10.5340075,9.97775973 10.3868729,9.82226122 L4.40709895,3.49963326 Z'
        id='arrow-down'
        transform='translate(7.000000, 3.500000) scale(-1, 1) rotate(-90.000000) translate(-7.000000, -3.500000) '
      />
    </g>
  </svg>
);

ArrowDown.defaultProps = {
  stroke: "#9966ff",
};

ArrowDown.propTypes = {
  stroke: PropTypes.string,
};

export default ArrowDown;
