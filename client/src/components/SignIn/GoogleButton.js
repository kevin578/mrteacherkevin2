import React, { Componet } from "react";
import styled from "styled-components";

const SVG_Container = styled.svg`
  cursor: pointer;
`;

const GoogleButton = props => {
  const clicked = async () => {
    window.location = "/auth/google";
  };

  return (
    <SVG_Container
      width="200px"
      height="44px"
      viewBox="0 0 200 44"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnslink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <style type="text/css">
          @import
          url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
        </style>

        <rect id="path-1" x="0" y="0" width="196" height="40" rx="2" />
        <filter
          x="-1.8%"
          y="-6.2%"
          width="103.6%"
          height="117.5%"
          filterUnits="objectBoundingBox"
          id="filter-2"
        >
          <feOffset
            dx="0"
            dy="1"
            in="SourceAlpha"
            result="shadowOffsetOuter1"
          />
          <feGaussianBlur
            stdDeviation="1"
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.24 0"
            type="matrix"
            in="shadowBlurOuter1"
          />
        </filter>
      </defs>
      <g
        id="Workspace"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g id="Google-Dark-Copy" transform="translate(2.000000, 1.000000)">
          <g id="Rectangle">
            <use
              fill="black"
              fillOpacity="1"
              filter="url(#filter-2)"
              xlinkHref="#path-1"
            />
            <use fill="#4285F4" fillRule="evenodd" xlinkHref="#path-1" />
          </g>
          <rect
            id="Rectangle-2"
            fill="#FFFFFF"
            x="1"
            y="1"
            width="38"
            height="38"
            rx="2"
          />
          <g
            id="google-icon"
            transform="translate(10.000000, 10.000000)"
            fillRule="nonzero"
          >
            <path
              d="M19.5326718,10.1870992 C19.5326718,9.36770992 19.4661832,8.76977099 19.3222901,8.14969466 L9.96564885,8.14969466 L9.96564885,11.8480153 L15.4577863,11.8480153 C15.3470992,12.7670992 14.7491603,14.1512214 13.4203817,15.0812977 L13.4017557,15.2051145 L16.3601527,17.4969466 L16.5651145,17.5174046 C18.4474809,15.7789313 19.5326718,13.2210687 19.5326718,10.1870992"
              id="Shape"
              fill="#4285F4"
            />
            <path
              d="M9.96564885,19.9312977 C12.6563359,19.9312977 14.9151908,19.0454198 16.5651145,17.5174046 L13.4203817,15.0812977 C12.578855,15.6681679 11.4493893,16.0778626 9.96564885,16.0778626 C7.33030534,16.0778626 5.09358779,14.3394656 4.29625954,11.9366412 L4.17938931,11.9465649 L1.10320611,14.3272519 L1.0629771,14.439084 C2.70175573,17.6945038 6.06793893,19.9312977 9.96564885,19.9312977"
              id="Shape"
              fill="#34A853"
            />
            <path
              d="M4.29625954,11.9366412 C4.08587786,11.3165649 3.96412214,10.6521374 3.96412214,9.96564885 C3.96412214,9.27908397 4.08587786,8.61473282 4.28519084,7.99465649 L4.27961832,7.86259542 L1.1648855,5.44366412 L1.0629771,5.4921374 C0.387557252,6.84305344 0,8.36007634 0,9.96564885 C0,11.5712214 0.387557252,13.0881679 1.0629771,14.439084 L4.29625954,11.9366412"
              id="Shape"
              fill="#FBBC05"
            />
            <path
              d="M9.96564885,3.85335878 C11.8369466,3.85335878 13.0992366,4.66167939 13.8190076,5.33717557 L16.6315267,2.5910687 C14.9041985,0.985496183 12.6563359,0 9.96564885,0 C6.06793893,0 2.70175573,2.23671756 1.0629771,5.4921374 L4.28519084,7.99465649 C5.09358779,5.59183206 7.33030534,3.85335878 9.96564885,3.85335878"
              id="Shape"
              fill="#EB4335"
            />
          </g>
          <text
            id="Sign-up-with-Google"
            fontFamily="Roboto"
            fontSize="14"
            fontWeight="bold"
            letterSpacing="0.400000006"
            fill="#FFFFFF"
          >
            <tspan x="50" y="24">
              Sign up with Google
            </tspan>
          </text>
        </g>
      </g>
    </SVG_Container>
  );
};

export default GoogleButton;
