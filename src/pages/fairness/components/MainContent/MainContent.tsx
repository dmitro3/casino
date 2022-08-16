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
      <div className={styles.item}>
        <div className={styles.itemTextContainer}>
          <div className={styles.itemCount}>
            <span>02</span>
          </div>
          <div className={styles.itemText}>
            <span>Place a bet</span>
            <p>
              During the bet, the result is fixed in a special "Random Seed"
              field. By clicking "Fairness" you can find the current round hash
              (encrypted winning result) and history of completed bets with all
              the details.
            </p>
          </div>
        </div>
        <div className={`${styles.itemCard} ${styles.itemCardGradient}`}>
          <div>
            <span>
              LUCKY <br />
              NUMBER
            </span>
            <span>31</span>
          </div>
          <Button
            label="LET'S ROLL"
            subText="Profit on win: 1.00000000 BTC"
            customStyles={styles.itemCardButton}
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.itemTextContainer}>
          <div className={styles.itemCount}>
            <span>03</span>
          </div>
          <div className={styles.itemText}>
            <span>Check hash</span>
            <p>
              Click "Check". Then in the opened window paste Random Seed you've
              copied. The issued hash below must match that fixed on BetFury.
            </p>
          </div>
        </div>
        <div className={`${styles.itemCard} ${styles.itemCardGradient}`}>
          <div className={styles.itemCardGradientSubtext}>
            <span>Random seed:</span>
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
          <Button label="CHECK" customStyles={styles.itemCardButton} />
        </div>
      </div>
      <Button label="Play now" customStyles={styles.playButton} />
    </section>
  );
};

export default MainContent;
