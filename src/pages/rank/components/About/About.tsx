import React, { useState } from 'react';

import AboutItem from 'src/pages/rank/components/About/AboutItem';

import styles from './About.module.scss';

const items = [
  {
    id: 0,
    title: `What is BetFury VIP Club?`,
    text: `BetFury VIP Club is the place where the most active users are gathered and get exclusive rewards for it.`,
  },
  {
    id: 1,
    title: `What is BetFury VIP Club?`,
    text: `BetFury VIP Club is the place where the most active users are gathered and get exclusive rewards for it.`,
  },
  {
    id: 2,
    title: `What is BetFury VIP Club?`,
    text: `BetFury VIP Club is the place where the most active users are gathered and get exclusive rewards for it.`,
  },
  {
    id: 3,
    title: `What is BetFury VIP Club?`,
    text: `BetFury VIP Club is the place where the most active users are gathered and get exclusive rewards for it.`,
  },
  {
    id: 4,
    title: `What is BetFury VIP Club?`,
    text: `BetFury VIP Club is the place where the most active users are gathered and get exclusive rewards for it.`,
  },
  {
    id: 5,
    title: `What is BetFury VIP Club?`,
    text: `BetFury VIP Club is the place where the most active users are gathered and get exclusive rewards for it.`,
  },
  {
    id: 6,
    title: `What is BetFury VIP Club?`,
    text: `BetFury VIP Club is the place where the most active users are gathered and get exclusive rewards for it.`,
  },
  {
    id: 7,
    title: `What is BetFury VIP Club?`,
    text: `BetFury VIP Club is the place where the most active users are gathered and get exclusive rewards for it.`,
  },
];

const About = () => {
  const [activeItem, setActiveItem] = useState(items[0].id);

  return (
    <section className={styles.about}>
      <h3 className={styles.aboutTitle}>About Binobi.com</h3>
      <div className={styles.aboutItems}>
        {items.map((item) => (
          <AboutItem
            key={item.id}
            title={item.title}
            text={item.text}
            isOpened={activeItem === item.id}
            onClick={() => setActiveItem(item.id)}
          />
        ))}
      </div>
    </section>
  );
};

export default About;
