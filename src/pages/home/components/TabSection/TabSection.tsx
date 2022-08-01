import React, { useState } from 'react';

import {
  TabHome,
  TabLive,
  TabLive2,
  TabSlots,
  TabSpecial,
} from 'src/assets/svg';
import Button from 'src/components/Button';
import styles from './TabSection.module.scss';

const tabs = [
  {
    icon: <TabHome />,
    label: `In house`,
    id: 1,
  },
  {
    icon: <TabLive />,
    label: `Slots`,
    id: 2,
  },
  {
    icon: <TabLive2 />,
    label: `Live`,
    id: 3,
  },
  {
    icon: <TabSlots />,
    label: `Live`,
    id: 4,
  },
  {
    icon: <TabSpecial />,
    label: `Special`,
    id: 5,
  },
];

const TabSection = () => {
  const [isClicked, setIsClicked] = useState(1);

  const onChoose = (id) => {
    setIsClicked(id);
  };

  return (
    <section className={styles.tabSection}>
      <nav className={styles.tabSectionNavbar}>
        {tabs.map((tab) => (
          <Button
            label={tab.label}
            icon={tab.icon}
            key={tab.id}
            isIconFirst
            customStyles={`${
              isClicked === tab.id
                ? styles.tabSectionButton
                : styles.tabSectionButtonClicked
            }`}
            onClick={() => onChoose(tab.id)}
          />
        ))}
        <input
          className={styles.tabSectionNavbarInput}
          placeholder="Search For Games"
        />
      </nav>
    </section>
  );
};

export default TabSection;
