import React from 'react';

export const Html = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <path id="Html-a" d="M0 0h20v20H0z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="#FFF" d="M0 0h20v20H0z" />
        <g>
          <mask id="Html-b" fill="#fff">
            <use xlinkHref="#Html-a" />
          </mask>
          <path
            d="M18.747 0H1.254C.563 0 0 .588 0 1.311v17.378C0 19.412.563 20 1.254 20h17.493c.69 0 1.253-.588 1.253-1.311V1.311C20 .588 19.438 0 18.747 0zM1.6 18.4h16.8V1.6H1.6v16.8z"
            fill="#5B7CE3"
            mask="url(#Html-b)"
          />
        </g>
        <path
          d="M6.32 12.722a.798.798 0 0 1-.507-.18l-2.344-1.924a.801.801 0 0 1 0-1.237L5.813 7.46a.799.799 0 1 1 1.015 1.237L5.238 10l1.59 1.303a.801.801 0 0 1-.508 1.42M13.68 12.722a.801.801 0 0 1-.508-1.419L14.762 10l-1.59-1.304a.8.8 0 0 1 1.015-1.237l2.344 1.922a.802.802 0 0 1 0 1.237l-2.344 1.923a.798.798 0 0 1-.507.181M8.309 13.682a.8.8 0 0 1-.689-1.205L11 6.714a.8.8 0 0 1 1.38.809L9 13.287a.799.799 0 0 1-.691.395"
          fill="#5B7CE3"
        />
      </g>
    </svg>
  );
};
