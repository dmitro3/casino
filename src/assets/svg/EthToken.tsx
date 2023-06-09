import React, { FC } from 'react';

type Props = {
  width?: number;
  height?: number;
};

const EthToken: FC<Props> = ({ width, height }) => {
  return (
    <svg
      width={width || `34`}
      height={height || `34`}
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.2"
        d="M33.9078 17.0003C33.9078 26.3397 26.3369 33.9108 16.9976 33.9108C7.65817 33.9108 0.0871582 26.3397 0.0871582 17.0003C0.0871582 7.66097 7.65817 0.0899658 16.9976 0.0899658C26.3368 0.0899658 33.9078 7.66097 33.9078 17.0003Z"
        fill="#505050"
      />
      <g opacity="0.8">
        <path
          d="M16.9436 9.15381L16.8391 9.50882V19.8106L16.9436 19.9148L21.7255 17.0882L16.9436 9.15381Z"
          fill="white"
        />
        <path
          d="M16.9436 9.15381L12.1616 17.0882L16.9436 19.9149V14.9147V9.15381Z"
          fill="white"
        />
        <path
          d="M16.9436 21.4707L16.8848 21.5424V25.2121L16.9436 25.384L21.7285 18.6455L16.9436 21.4707Z"
          fill="white"
        />
        <path
          d="M16.9436 25.3841V21.4707L12.1616 18.6455L16.9436 25.3841Z"
          fill="white"
        />
        <path
          d="M16.9436 19.9149L21.7255 17.0883L16.9436 14.9148V19.9149Z"
          fill="white"
        />
        <path
          d="M12.1616 17.0882L16.9435 19.9148V14.9147L12.1616 17.0882Z"
          fill="white"
        />
      </g>
    </svg>
  );
};

export default EthToken;
