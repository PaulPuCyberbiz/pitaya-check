import React, { ComponentProps } from 'react';

export const Pencil = (props: ComponentProps<any>) => (
  <svg width={20} height={20} viewBox="0 0 24 24" {...props}>
    <defs>
      <path id="prefix__b" d="M0 0h20v20.533H0z" />
      <path id="prefix__d" d="M0 .399h14.91V2H0z" />
      <filter id="prefix__a">
        <feColorMatrix
          in="SourceGraphic"
          values="0 0 0 0 0.235294 0 0 0 0 0.333333 0 0 0 0 0.529412 0 0 0 1.000000 0"
        />
      </filter>
    </defs>
    <g
      filter="url(#prefix__a)"
      transform="translate(-967 -232)"
      fill="none"
      fillRule="evenodd"
    >
      <g transform="translate(969 232)">
        <path
          fill="#3C5587"
          d="M8.574 16.034L4.64 11.658l9.382-9.716 4.068 4.21-9.516 9.882zm-6.816 2.75l2.05-5.657 3.387 3.767-5.437 1.89zM19.775 5.592L14.597.234a.823.823 0 00-1.15 0L2.972 11.083c-.026.027-.035.065-.059.094-.038.053-.077.103-.1.162-.047.075-.11.139-.14.223L.081 18.716a1.372 1.372 0 00.28 1.392 1.327 1.327 0 001.398.354l6.85-2.365c.167-.058.318-.156.45-.276.01-.007.021-.01.03-.018.005-.004.006-.01.011-.015.01-.01.02-.014.03-.023l7.774-8.052.003-.003 2.871-3.01a.8.8 0 00-.003-1.108z"
          mask="url(#prefix__c)"
        />
      </g>
      <g transform="translate(969 254)">
        <path
          fill="#3C5587"
          d="M14.11.4H.8A.8.8 0 10.8 2h13.31a.8.8 0 000-1.6"
          mask="url(#prefix__e)"
        />
      </g>
    </g>
  </svg>
);
