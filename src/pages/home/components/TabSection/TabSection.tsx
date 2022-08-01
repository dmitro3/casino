import React, { FC, useState } from 'react';
import Image from 'next/image';

import {
  TabHome,
  TabLive,
  TabLiveTwo,
  TabSlots,
  TabSpecial,
  SearchIcon,
} from 'src/assets/svg';
import Bingo from 'src/assets/images/Bingo.png';
import Book from 'src/assets/images/Book.png';
import Casino from 'src/assets/images/Casino.png';
import Cat from 'src/assets/images/Cat.png';
import Dog from 'src/assets/images/Dog.png';
import Dice from 'src/assets/images/Dice.png';
import Button from 'src/components/Button';
import Input from 'src/components/Input';
import styles from './TabSection.module.scss';

const tabs = [
  {
    icon: TabHome,
    label: `In-House`,
    id: 1,
  },
  {
    icon: TabLive,
    label: `Slots`,
    id: 2,
  },
  {
    icon: TabLiveTwo,
    label: `Live`,
    id: 3,
  },
  {
    icon: TabSlots,
    label: `Live`,
    id: 4,
  },
  {
    icon: TabSpecial,
    label: `Special`,
    id: 5,
  },
];

const tabImages = [
  {
    image: Bingo,
    id: 1,
  },
  {
    image: Book,
    id: 2,
  },
  {
    image: Casino,
    id: 3,
  },
  {
    image: Cat,
    id: 4,
  },
  {
    image: Dice,
    id: 5,
  },
  {
    image: Dog,
    id: 6,
  },
];

const TabSection: FC = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  const onChoose = (id: number) => {
    const newSelectedTab = tabs.find((tab) => tab.id === id);
    setSelectedTab(newSelectedTab!);
  };

  return (
    <section className={styles.tabSection}>
      <nav className={styles.tabSectionNavbar}>
        {tabs.map((tab) => (
          <Button
            label={tab.label}
            leftIcon={
              <tab.icon
                color={selectedTab.id === tab.id ? `#1D2027` : `#5E6670`}
              />
            }
            key={tab.id}
            customStyles={`${
              selectedTab.id === tab.id
                ? styles.tabSectionButton
                : styles.tabSectionButtonClicked
            }`}
            onClick={() => onChoose(tab.id)}
          />
        ))}
        <Input placeholder="Search For Games" icon={<SearchIcon />} />
      </nav>
      <div className={styles.tabSectionIcon}>
        <selectedTab.icon color="#FFF" />
        <span>{selectedTab.label}</span>
      </div>
      <div className={styles.tabSectionImages}>
        {tabImages.map((tabImg) => (
          <div className={styles.tabSectionSelectedImage}>
            <Image
              src={tabImg.image}
              key={tabImg.id}
              width={190}
              height={260}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TabSection;
