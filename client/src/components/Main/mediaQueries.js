import {css} from "styled-components";

const sizes = {
smallLaptop: 1200,
bigPhone: 620,
tablet: 850,
  smallLaptopLoggedOut: 1140,
  tabletLoggedOut: 860,
  bigPhoneLoggedOut: 520
};

// Iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)};
    }
  `;

  return acc;
}, {});

export default media;
