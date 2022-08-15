import React from 'react';

import Button from 'src/components/Button';
import Input from 'src/components/Input';
import styles from './MainContent.module.scss';

const MainContent = () => {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <span>HOW DOES IT WORK?</span>
        <p>
          The provably fair principle is based on SHA256 technology the same as
          Bitcoin. The procedure of checking bets result allows you to verify
          the fairness of each bet.
        </p>
      </div>
      <div className={styles.item}>
        <div className={styles.itemTextContainer}>
          <div className={styles.itemCount}>
            <span>01</span>
          </div>
          <div className={styles.itemText}>
            <span>Press fairness</span>
            <p>
              Before placing a bet you may check the hash of the next round
              number in the "Fairness" pop-up. Hash is a random result,
              generated and mixed with random Server seed. Every round has its
              own hash. No-one knows the result before placing a bet.
            </p>
          </div>
        </div>
        <div className={styles.itemCard}>
          <div className={styles.itemCardText}>
            <span>Fairness</span>
            <p>
              Before placing a bet you may check the hash of the next round
              number in the "Fairness" pop-up. Hash is a random result,
              generated and mixed with random Server seed. Every round has its
              own hash. No-one knows the result before placing a bet.
            </p>
          </div>
          <Input
            placeholder="7435984n5cb7fnd...."
            disabled
            customStyles={styles.itemCardInput}
            additionalButton={
              <div className={styles.itemCardInputButton}>
                <p>copy</p>
              </div>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default MainContent;
