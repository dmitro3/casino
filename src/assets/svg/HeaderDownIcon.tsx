import React, { FC } from 'react';

type Props = {
  width?: string;
  height?: string;
};

const HeaderDownIcon: FC<Props> = ({ width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 6 3"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3 3L0 0H6L3 3Z" fill="white" fillOpacity="0.5" />
    </svg>
  );
};

export default HeaderDownIcon;
