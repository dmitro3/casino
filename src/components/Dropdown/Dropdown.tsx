import React, { FC, useState } from 'react';

import { HeaderDownIcon } from 'src/assets/svg';
import styles from './Dropdown.module.scss';

type Props = {
  buttonComponent: React.ReactNode;
  dropdownComponent: React.ReactNode;
};

const Dropdown: FC<Props> = ({ buttonComponent, dropdownComponent }) => {
  const [isOpened, setIsOpened] = useState(false);

  const showDropdown = () => {
    setIsOpened(!isOpened);
  };

  return (
    <>
      <button onClick={showDropdown} className={styles.button}>
        <div className={styles.userIcon}>
          {buttonComponent}
          <HeaderDownIcon width="7px" height="4px" />
        </div>
      </button>
      {isOpened && (
        <div className={styles.modalWrapper}>{dropdownComponent}</div>
      )}
    </>
  );
};

export default Dropdown;
