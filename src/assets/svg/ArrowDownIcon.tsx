import React, { FC } from 'react';

type Props = {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
};

const ArrowDownIcon: FC<Props> = ({
  width = 7,
  height = 4,
  color = `white`,
  opacity = 0.7,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 7 4"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1L3.5 3L6 1"
        stroke={color}
        strokeOpacity={opacity}
        strokeLinecap="round"
      />
    </svg>
  );
};

export default ArrowDownIcon;
