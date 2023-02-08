import React from 'react';

function DesktopIcon() {
  return (
    <svg
      width="17"
      height="16"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <path
          d="M1.6 11.105h12.8V9.811H1.6v1.294zm7.271 1.866.151.429H6.977l.151-.429a.766.766 0 0 0 .038-.266h1.667a.79.79 0 0 0 .038.266zM1.6 8.21h12.8V1.6H1.6v6.61zM15.253 0H.747C.335 0 0 .356 0 .794v11.117c0 .438.335.794.747.794h4.78l-.195.56a.475.475 0 0 1-.303.135H3.678a.8.8 0 0 0 0 1.6h8.643a.8.8 0 1 0 0-1.6h-1.35a.617.617 0 0 1-.288-.103l-.209-.592h4.779c.412 0 .747-.356.747-.794V.794C16 .356 15.665 0 15.253 0z"
          id="a"
        />
      </defs>
      <g transform="translate(1 1)" fill="none" fillRule="evenodd">
        <mask id="b" fill="#fff">
          <use xlinkHref="#a" />
        </mask>
        <use fill="#000" xlinkHref="#a" />
        <g mask="url(#b)" fill="#8E99AD">
          <path d="M-2 37h40V-3H-2z" />
        </g>
      </g>
    </svg>
  );
}
export default DesktopIcon;
