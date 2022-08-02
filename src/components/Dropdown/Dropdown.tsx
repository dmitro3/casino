import React, { FC, useState } from 'react';

import Blur from 'src/components/Blur';
import { HeaderDownIcon } from 'src/assets/svg';
import styles from './Dropdown.module.scss';

type Props = {
  buttonComponent: React.ReactNode;
  dropdownComponent: React.ReactNode;
};

const Dropdown: FC<Props> = ({ buttonComponent, dropdownComponent }) => {
  const [isClicked, setIsClicked] = useState(false);

  const showDropdown = () => {
    setIsClicked(!isClicked);
  };

  return (
    <>
      <button onClick={showDropdown} className={styles.button}>
        <div className={styles.userIcon}>
          {buttonComponent}
          <HeaderDownIcon width="7px" height="4px" />
        </div>
      </button>
      {!isClicked && (
        <div className={styles.modalWrapper}>{dropdownComponent}</div>
      )}
    </>
  );
};

export default Dropdown;
