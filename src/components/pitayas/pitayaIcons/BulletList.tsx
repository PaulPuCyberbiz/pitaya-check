import React from 'react';

const BulletList = () => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="4"
        y1="2"
        x2="11"
        y2="2"
        stroke="#8E99AD"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="4"
        y1="6"
        x2="11"
        y2="6"
        stroke="#8E99AD"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="4"
        y1="10"
        x2="11"
        y2="10"
        stroke="#8E99AD"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="1" cy="2" r="1" fill="#8E99AD" />
      <circle cx="1" cy="6" r="1" fill="#8E99AD" />
      <circle cx="1" cy="10" r="1" fill="#8E99AD" />
    </svg>
  );
};

export default BulletList;
