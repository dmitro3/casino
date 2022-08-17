import React from 'react';
import Image from 'next/image';

import Button from 'src/components/Button';
import Blur from 'src/components/Blur';
import Safe from 'src/assets/images/RegistrationSafe.png';
import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroText}>
        <span>
          CLAIM REWARD <br /> FOR CHALLENGING DAILY TASKS
        </span>
        <p>
          Discover daily gaming activities and make your experience on BetFury
          more exciting! Daily tasks are available on different in-house games.
          Get your reward with extra coins by completing them!
        </p>
        <Button label="Sign up" customStyles={styles.button} />
      </div>
      <div className={styles.heroImage}>
        <Blur color="#FCD53533" filterRadius={50}>
          <Image src={Safe} width={385} height={223} />
        </Blur>
      </div>
    </section>
  );
};

export default Hero;
