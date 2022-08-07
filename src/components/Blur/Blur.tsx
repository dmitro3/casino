import React, { FC, useEffect, useState } from 'react';

import styles from './Blur.module.scss';

type Props = {
  children: React.ReactNode;
  color: string;
  top?: boolean;
  bottom?: boolean;
  left?: boolean;
  right?: boolean;
  filterRadius?: number;
  width?: string;
  height?: string;
};

const Blur: FC<Props> = ({
  children,
  color,
  top,
  bottom,
  left,
  right,
  filterRadius,
  width = `100%`,
  height = `100%`,
}) => {
  const [blurOptions, setBlurOptions] = useState(null as null | any);

  const makePosition = () => {
    let topValue = ``;
    let leftValue = ``;
    let transformYValue = ``;
    let transformXValue = ``;

    if (top) {
      topValue = `0%`;
      transformYValue = `-50%`;
    }
    if (bottom) {
      topValue = `100%`;
      transformYValue = `-50%`;
    }
    if (right) {
      leftValue = `100%`;
      transformXValue = `-50%`;
    }
    if (left) {
      leftValue = `0%`;
      transformXValue = `-40%`;
    }
    return {
      top: topValue,
      left: leftValue,
      transform: `translate(${transformXValue}, ${transformYValue})`,
    };
  };

  useEffect(() => {
    const colorOption = { backgroundColor: color };
    const position = makePosition();
    if (filterRadius) {
      setBlurOptions({
        ...colorOption,
        ...position,
        filter: `blur(${filterRadius}px)`,
        width,
        height,
      });
    } else {
      setBlurOptions({ ...colorOption, ...position, width, height });
    }
  }, [color, top, bottom, right, left, width, height, filterRadius]);

  return (
    <div className={styles.BlurWrapper}>
      <div className={styles.Blur} style={blurOptions} />
      {children}
    </div>
  );
};

export default Blur;
