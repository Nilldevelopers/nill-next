import React from "react";

const Element = (props: IElement) => {
  if (props.theme == "light") {
    return (
      <svg
        width="56"
        height="8"
        viewBox="0 0 56 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="52" cy="4" r="4" fill="#000"></circle>
        <line
          x1="49.5"
          y1="4.5"
          x2="0.5"
          y2="4.5"
          stroke="#000"
          strokeLinecap="round"
        ></line>
      </svg>
    );
  } else {
    return (
      <svg
        width="56"
        height="8"
        viewBox="0 0 56 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="52" cy="4" r="4" fill="#fff"></circle>
        <line
          x1="49.5"
          y1="4.5"
          x2="0.5"
          y2="4.5"
          stroke="#fff"
          strokeLinecap="round"
        ></line>
      </svg>
    );
  }
};

export default Element;
