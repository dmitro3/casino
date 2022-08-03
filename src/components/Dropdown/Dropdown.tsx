import React, { FC, useState, useEffect, useRef } from 'react';

import { HeaderDownIcon } from 'src/assets/svg';
import styles from './Dropdown.module.scss';

type Props = {
  buttonComponent: React.ReactNode;
  dropdownComponent: React.ReactNode;
  customStyles?: any;
  customButtonDropdownStyles?: any;
  customUserDropdownStyles?: any;
};

const Dropdown: FC<Props> = ({
  buttonComponent,
  dropdownComponent,
  customStyles,
  customButtonDropdownStyles,
  customUserDropdownStyles,
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
        <div className={`${styles.userIcon} ${customStyles}`}>
          {buttonComponent}
          <HeaderDownIcon width="7px" height="4px" />
        </div>
      </button>
      {isOpened && (
        <div
          className={`${styles.modalWrapper} ${customButtonDropdownStyles} ${customUserDropdownStyles}`}
        >
          {dropdownComponent}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
