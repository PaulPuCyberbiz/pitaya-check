import React from 'react';

export const Undo = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <path
          d="M14.045 8.503H2.733l7.142-7.137A.8.8 0 1 0 8.744.235l-8.506 8.5a.795.795 0 0 0-.176.262c-.01.023-.008.048-.015.07C.024 9.144 0 9.22 0 9.304c0 .04.017.075.023.114.009.066.014.133.039.194a.79.79 0 0 0 .163.244c.004.004.006.01.01.015l8.509 8.503a.797.797 0 0 0 1.132 0 .8.8 0 0 0-.001-1.132l-7.143-7.138h11.313c3.504 0 6.355 2.758 6.355 6.149 0 3.39-2.851 6.148-6.355 6.148a.8.8 0 0 0 0 1.6C18.431 24 22 20.525 22 16.253c0-4.273-3.569-7.75-7.955-7.75"
          id="Undo-a"
        />
      </defs>
      <g transform="translate(1)" fill="none" fillRule="evenodd">
        <mask id="Undo-b" fill="#fff">
          <use xlinkHref="#Undo-a" />
        </mask>
        <use fill="#3465C0" xlinkHref="#Undo-a" />
        <g mask="url(#Undo-b)" fill="#8E99AD">
          <path d="M-1 24h24V0H-1z" />
        </g>
      </g>
    </svg>
  );
};
