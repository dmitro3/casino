import React, { FC, useState } from 'react';

import {
  TabHome,
  TabLive,
  TabLiveTwo,
  TabSlots,
  TabSpecial,
  SearchIcon,
} from 'src/assets/svg';
import Button from 'src/components/Button';
import Input from 'src/components/Input';
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
    icon: <TabLiveTwo />,
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

const TabSection: FC = () => {
  const [selectedTabId, setSelectedTabId] = useState(1);

  const onChoose = (id: number) => {
    setSelectedTabId(id);
  };

  return (
    <section className={styles.tabSection}>
      <nav className={styles.tabSectionNavbar}>
        {tabs.map((tab) => (
          <Button
            label={tab.label}
            leftIcon={tab.icon}
            key={tab.id}
            customStyles={`${
              selectedTabId === tab.id
                ? styles.tabSectionButton
                : styles.tabSectionButtonClicked
            }`}
            onClick={() => onChoose(tab.id)}
          />
        ))}
        <Input placeholder="Search For Games" icon={<SearchIcon />} />
      </nav>
    </section>
  );
};

export default TabSection;
