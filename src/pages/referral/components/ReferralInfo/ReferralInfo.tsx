import React from 'react';
import Image from 'next/image';
import Button from 'src/components/Button';
import Speaker from 'src/assets/images/Speaker.png';
import {
  BigDiscordIcon,
  BigTelegramIcon,
  BigTwitterIcon,
  BtcToken,
  Logo,
} from 'src/assets/svg';
import styles from 'src/pages/referral/components/ReferralInfo/ReferralInfo.module.scss';
import Input from 'src/components/Input';
import Link from 'next/link';

const ReferralInfo = () => {
  return (
    <div className={styles.referralLinkContainer}>
      <div className={styles.blur} />
      <div className={styles.logoContainer}>
        <div className={styles.logoContainerImage}>
          <Logo />
          <div className={styles.logoContainerLabel}>Binobi.com</div>
        </div>
        <Image src={Speaker} width={181} height={180} />
      </div>

      <div>
        <div className={styles.referralLinkContainerCase}>
          <div className={styles.referralLinkContainerCaseColumns}>
            <div className={styles.referralLinkContainerCaseColumnsName}>
              Рефералы
            </div>
            <div className={styles.referralLinkContainerCaseColumnsValue}>
              <span>0</span>
            </div>
          </div>
          <div className={styles.referralLinkContainerCaseColumns}>
            <p>Общий Вейджер</p>
            <div className={styles.referralLinkContainerCaseColumnsValue}>
              <BtcToken />
              <span>
                0.000000000 <span>BTC</span>
              </span>
            </div>
          </div>
          <div className={styles.referralLinkContainerCaseColumns}>
            <p>Общий Вейджер</p>
            <div className={styles.referralLinkContainerCaseColumnsValue}>
              <BtcToken />
              <span>
                0.000000000 <span>BTC</span>
              </span>
            </div>
          </div>
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.infoContainerColumn}>
            <div className={styles.infoContainerColumnButton}>
              <p>Моя реферальная ссылка</p>
              <Button label="Default" />
            </div>
            <div className={styles.infoContainerColumnCase}>
              <Input
                customStyles={styles.infoContainerColumnInput}
                placeholder="0"
              />
              <div className={styles.infoContainerColumnCaseButton}>
                <Button customStyles={styles.button} label="Copy" />
              </div>
            </div>
          </div>
          <div className={styles.infoContainerColumn}>
            <span>Поделиться</span>
            <div className={styles.linksContainer}>
              <div className={styles.linksContainerImage}>
                <div className={styles.linksContainerImageCase}>
                  <Link passHref href="sad">
                    <a href="/#">
                      <BigTelegramIcon />
                    </a>
                  </Link>
                </div>
              </div>
              <div className={styles.linksContainerImage}>
                <div className={styles.linksContainerImageCase}>
                  <Link passHref href="sad">
                    <a href="/#">
                      <BigTwitterIcon width={47} height={45} />
                    </a>
                  </Link>
                </div>
              </div>
              <div className={styles.linksContainerImage}>
                <Link passHref href="sad">
                  <a href="/#">
                    <BigDiscordIcon />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.infoContainerColumn}>
            <span>Промо</span>
            <Button
              customStyles={styles.infoContainerColumnBigButton}
              label="Get promo materials"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferralInfo;
