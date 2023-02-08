import React from 'react';

const ContactInfo = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 2C0 0.895431 0.895431 0 2 0H18C19.1046 0 20 0.895431 20 2V18C20 19.1046 19.1046 20 18 20H2C0.895431 20 0 19.1046 0 18V2Z"
        fill="white"
      />
      <rect
        x="1"
        y="1"
        width="18"
        height="18"
        rx="1"
        stroke="#5B7CE3"
        strokeWidth="2"
      />
      <circle cx="10" cy="5.5" r="1.5" fill="#5B7CE3" />
      <line
        x1="10"
        y1="9.5"
        x2="10"
        y2="14.5"
        stroke="#5B7CE3"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default ContactInfo;
