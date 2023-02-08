import React, { SVGProps } from 'react';

const ImageIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 120 85"
    {...props}
  >
    <defs>
      <path
        id="a"
        d="M0.7515 0.8096L59 0.8096 59 51.9996588 0.7515 51.9996588z"
      />
    </defs>
    <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
      <path
        fill="#D6DFF2"
        d="M62.992 17.046C68.51 17.046 73 21.584 73 27.16c0 5.578-4.49 10.116-10.008 10.116-5.518 0-10.008-4.538-10.008-10.116 0-5.577 4.49-10.115 10.008-10.115zM60.16 55.09l35.214-23.688L120 47.765V10.119c-.007-5.586-4.48-10.112-10-10.12H10C4.48.008.007 4.534 0 10.12v52.975l43.793-21.781L60.16 55.09z"
        transform="translate(-260 -997) translate(260 997)"
      />
      <path
        fill="#D6DFF2"
        d="M0 65.328v9.553C.007 80.467 4.48 84.994 10 85h82.581L43.509 43.688 0 65.328zM62.992 35.277c4.416 0 8.008-3.641 8.008-8.116 0-4.474-3.592-8.115-8.008-8.115-4.416 0-8.008 3.64-8.008 8.115s3.592 8.116 8.008 8.116"
        transform="translate(-260 -997) translate(260 997)"
      />
      <g transform="translate(-260 -997) translate(260 997) translate(61 33)">
        <path
          fill="#D6DFF2"
          d="M.751 23.43L34.688 52H49a9.119 9.119 0 001.672-.148c4.813-.815 8.337-5.033 8.328-9.971V17.166L34.38.81.75 23.43z"
        />
      </g>
    </g>
  </svg>
);
export default ImageIcon;
