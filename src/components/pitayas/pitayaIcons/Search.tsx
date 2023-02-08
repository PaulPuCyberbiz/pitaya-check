import React from 'react';

export const Search = () => (
  <svg width="18" height="18" viewBox="0 0 18 18">
    <defs>
      <path
        id="a"
        d="M3.1 8.594A5.5 5.5 0 018.594 3.1a5.5 5.5 0 015.494 5.494 5.472 5.472 0 01-1.485 3.745c-.002 0-.003.002-.005.003 0 0 0 .003-.002.004a5.475 5.475 0 01-4.002 1.742A5.5 5.5 0 013.1 8.594m13.816 6.862l-3.139-2.8a6.55 6.55 0 001.411-4.062A6.601 6.601 0 008.594 2 6.601 6.601 0 002 8.594a6.601 6.601 0 006.594 6.594 6.56 6.56 0 004.433-1.727l3.157 2.816a.545.545 0 00.776-.044.55.55 0 00-.044-.777"
      />
    </defs>
    <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
      <mask id="b" fill="#fff">
        <use xlinkHref="#a" />
      </mask>
      <use fill="#000" xlinkHref="#a" />
      <g fill="#8e99ad" mask="url(#b)">
        <path d="M0 18L18 18 18 0 0 0z" />
      </g>
    </g>
  </svg>
);
