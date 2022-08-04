import React, { FC, useState, useEffect, useRef } from 'react';

import { HeaderDownIcon } from 'src/assets/svg';
import styles from './Dropdown.module.scss';

type Props = {
  buttonComponent: React.ReactNode;
  dropdownComponent: React.ReactNode;
  customButtonStyles?: any;
  customWalletDropdownStyles?: any;
  customUserDropdownStyles?: any;
  customDropdownStyles?: string;
};

const Dropdown: FC<Props> = ({
  buttonComponent,
  dropdownComponent,
  customButtonStyles,
  customWalletDropdownStyles,
  customUserDropdownStyles,
  customDropdownStyles,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    const checkIfClickedOutside = (e: any) => {
      if (isOpened && ref.current && !ref.current.contains(e.target)) {
        setIsOpened(false);
      }
    };
    document.addEventListener(`mousedown`, checkIfClickedOutside);
    return () => {
      document.removeEventListener(`mousedown`, checkIfClickedOutside);
    };
  }, [isOpened]);

  const showDropdown = () => {
    setIsOpened(!isOpened);
  };

  return (
    <div className={styles.dropdownContainer} ref={ref}>
      <button onClick={showDropdown} className={styles.button}>
        <div className={`${styles.userIcon} ${customButtonStyles}`}>
          {buttonComponent}
          <HeaderDownIcon width="7px" height="4px" />
        </div>
      </button>
      {isOpened && (
        <div
          className={`${
            styles.modalWrapper
          } ${customWalletDropdownStyles} ${customUserDropdownStyles} ${
            customDropdownStyles || ``
          }`}
        >
          {dropdownComponent}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
