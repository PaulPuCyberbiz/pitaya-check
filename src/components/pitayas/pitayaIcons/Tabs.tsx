import React from 'react';

const Tabs = () => {
  return (
    <svg width="20" height="20">
      <defs>
        <path d="M0 0h20v20H0z" />
      </defs>
      <g fill="#FFF" fillRule="evenodd">
        <path d="M1 4h18v15H1z" />
        <g fill="#5B7CE3">
          <path d="M18.047 18.4H1.954c-.168 0-.354-.204-.354-.496V4.907h16.8v12.997c0 .292-.186.496-.353.496zM1.6 3.308h5.03V1.6H1.6v1.708zm6.63 0h5.032V1.6H8.23v1.708zm10.97 0h-4.338V1.032C14.862.462 14.37 0 13.768 0H1.093C.49 0 0 .463 0 1.032v16.872C0 19.06.877 20 1.954 20h16.093C19.124 20 20 19.06 20 17.904V4.108a.8.8 0 0 0-.8-.8z" />
        </g>
      </g>
    </svg>
  );
};

export default Tabs;
