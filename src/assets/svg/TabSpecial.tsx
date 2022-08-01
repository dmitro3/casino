import React, { FC } from 'react';

type Props = {
  color: string;
};

const TabSpecial: FC<Props> = ({ color }) => {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_227_13603)">
        <g clipPath="url(#clip1_227_13603)">
          <g clipPath="url(#clip2_227_13603)">
            <g clipPath="url(#clip3_227_13603)">
              <g clipPath="url(#clip4_227_13603)">
                <path
                  d="M20.7761 8.50917C20.6682 8.17723 20.3813 7.93532 20.036 7.8852L14.1794 7.0343L11.5602 1.7269C11.4058 1.41397 11.0871 1.21582 10.7381 1.21582C10.3891 1.21582 10.0704 1.41397 9.91601 1.7269L7.297 7.03424L1.44025 7.88514C1.09493 7.93532 0.807976 8.17723 0.700161 8.50911C0.592347 8.84105 0.682253 9.20538 0.93217 9.44894L5.17011 13.5795L4.16928 19.4131C4.1103 19.757 4.25167 20.1046 4.53398 20.3097C4.69369 20.4258 4.88285 20.4849 5.07293 20.4849C5.21882 20.4849 5.36533 20.4501 5.49948 20.3795L10.7381 17.6256L15.9766 20.3795C16.1115 20.4505 16.2593 20.4843 16.4057 20.4849C16.9115 20.4841 17.3212 20.0739 17.3212 19.5681C17.3212 19.4977 17.3133 19.429 17.2982 19.3632L16.3061 13.5796L20.544 9.44894C20.794 9.20538 20.8839 8.84105 20.7761 8.50917Z"
                  fill={color}
                />
              </g>
            </g>
          </g>
        </g>
      </g>
      <defs>
        <clipPath id="clip0_227_13603">
          <rect
            width="20.1658"
            height="20.1658"
            fill="white"
            transform="translate(0.655273 0.767456)"
          />
        </clipPath>
        <clipPath id="clip1_227_13603">
          <rect
            width="20.1658"
            height="20.1658"
            fill="white"
            transform="translate(0.655273 0.767456)"
          />
        </clipPath>
        <clipPath id="clip2_227_13603">
          <rect
            width="20.1658"
            height="20.1658"
            fill="white"
            transform="translate(0.655273 0.767456)"
          />
        </clipPath>
        <clipPath id="clip3_227_13603">
          <rect
            width="20.1658"
            height="20.1658"
            fill="white"
            transform="translate(0.655273 0.767456)"
          />
        </clipPath>
        <clipPath id="clip4_227_13603">
          <rect
            width="20.1658"
            height="20.1658"
            fill="white"
            transform="translate(0.655273 0.767456)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default TabSpecial;
