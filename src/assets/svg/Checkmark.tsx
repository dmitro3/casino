import React, { FC } from 'react';

type Props = {
  isPositive?: boolean;
};

const Checkmark: FC<Props> = ({ isPositive }) => {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M15 0H0V15H15V0Z" fill="white" fillOpacity="0.01" />
      <path
        d="M13.75 4.375L7.5 10.625L7.10938 10.2344M4.375 7.5L4.76562 7.89062L4.375 7.5Z"
        stroke={isPositive ? `#4ED254` : `#BE4450`}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.25 7.5L4.375 10.625L10.625 4.375"
        stroke={isPositive ? `#4ED254` : `#BE4450`}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Checkmark;
