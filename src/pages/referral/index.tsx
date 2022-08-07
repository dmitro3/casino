import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import Navigation from 'src/pages/referral/components/Navigation';
import MainLayout from 'src/components/MainLayout';
import styles from 'src/pages/referral/index.module.scss';
import {
  BigTelegramIcon,
  BigTwitterIcon,
  BtcToken,
  BigDiscordIcon,
  Logo,
} from 'src/assets/svg';
import Image from 'next/image';
import Speaker from 'src/assets/images/Speaker.png';
import Button from 'src/components/Button';
import Input from 'src/components/Input';
import Link from 'next/link';
import Hero from 'src/assets/images/Hero.png';
import BitcoinUp from 'src/assets/images/BitcoinUp.png';
import Blur from 'src/components/Blur';

const Referral: NextPage = () => {
  const router = useRouter();

  return (
    <MainLayout hasMaxWidth>
      <section className={styles.container}>
        <button
          type="button"
          className={styles.backButton}
          onClick={() => router.back()}
        >{`< Back`}</button>
        <p className={styles.mainLabel}>Referral Program</p>

        <Navigation />
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
                <p>Рефералы</p>
                <div className={styles.referralLinkContainerCaseColumnsValue}>
                  <span>0</span>
                </div>
              </div>
              <div className={styles.referralLinkContainerCaseColumns}>
                <p>Общий Вейджер</p>
                <div className={styles.referralLinkContainerCaseColumnsValue}>
                  <BtcToken />
                  <span>0.000000000 BTC</span>
                </div>
              </div>
              <div className={styles.referralLinkContainerCaseColumns}>
                <p>Общий Вейджер</p>
                <div className={styles.referralLinkContainerCaseColumnsValue}>
                  <BtcToken />
                  <span>0.000000000 BTC</span>
                </div>
              </div>
            </div>
            <div className={styles.infoContainer}>
              <div className={styles.infoContainerColumn}>
                <div className={styles.infoContainerColumnButton}>
                  <span>Моя реферальная ссылка</span>
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
                          <BigTwitterIcon width={42} height={42} />
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
                  customStyles={styles.infoContainerColumnButton}
                  label="Get promo materials"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.text}>
          <p>
            Let the whole world know about BetFury - Bring people here and earn
            more! Receive passive income for each player who follows your link,
            registers and plays actively on the platform. Referral Bonuses will
            be credited automatically for bets made by your referrals in
            In-house games, Slots, Sports and mined BFG tokens. The more players
            you attract - the higher income you’ll get.
          </p>
          <p>
            Create your own campaign for every source with a unique referral
            link. Track how your referrals come and what bonuses you get for
            their bets.
          </p>
        </div>
        <div className={styles.bonusContainer}>
          <div className={styles.bonusContainerCard}>
            <div className={styles.bonusContainerCardImage}>
              <Blur color="#FCD535" filterRadius={100}>
                <Image src={Hero} width={316} height={303} />
              </Blur>
            </div>

            <p>15 %</p>
            <span>From pure profit</span>
            <div className={styles.bonusContainerCardText}>
              Some text about. Let the whole world know about BetFury
              <br /> - Bring people here and earn more! Receive passive income
            </div>
            <Button
              customStyles={styles.bonusContainerCardButton}
              label="FOR IN HOUSE GAMES"
            />
          </div>
          <div className={styles.bonusContainerCard}>
            <div className={styles.bonusContainerCardImage}>
              <Blur color="#745c41" filterRadius={100}>
                <Image src={Hero} width={316} height={303} />
              </Blur>
            </div>

            <p>1.5 %</p>
            <span>From all winnings</span>
            <div className={styles.bonusContainerCardText}>
              Some text about. Let the whole world know about BetFury
              <br /> - Bring people here and earn more! Receive passive income
            </div>
            <Button
              customStyles={styles.bonusContainerCardButton}
              label="FOR SLOTS AND SPORTS"
            />
          </div>
          <div className={styles.bonusContainerCard}>
            <div className={styles.bonusContainerCardImage}>
              <Blur color="#6f443a" filterRadius={100}>
                <Image src={Hero} width={316} height={303} />
              </Blur>
            </div>

            <p>15 %</p>
            <span>From tokens mined by your referrals</span>
            <div className={styles.bonusContainerCardText}>
              Some text about. Let the whole world know about BetFury
              <br /> - Bring people here and earn more! Receive passive income
            </div>
            <Button
              customStyles={styles.bonusContainerCardButton}
              label="FOR BFG TOKENS"
            />
          </div>
        </div>
        <div className={styles.bottomContainer}>
          <div className={styles.bottomContainerImage}>
            <Blur color="#FCD535" bottom filterRadius={100}>
              <Image src={BitcoinUp} width={206} height={195} />
            </Blur>
          </div>
          <div className={styles.bottomContainerText}>
            <div className={styles.bottomContainerTextOne}>
              Are you a blogger, have a large audience, many followers? We have
              a special offer for you - a unique affiliate program with bigger
              referral rewards. We will compile an individual program with
              special conditions.
              <br /> Contact our manager to discuss the terms -
              <Link passHref href="sad">
                <a className={styles.bottomContainerLink} href="/#">
                  affiliate@betfury.io
                </a>
              </Link>
            </div>
            <div className={styles.bottomContainerTextTwo}>
              Important: only those users who have passed the requirements of
              the manager and only after approval with the manager will be able
              to participate in the program.
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Referral;
