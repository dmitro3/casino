import type { NextPage } from 'next';
import React from 'react';
import Navigation from 'src/pages/referral/components/Navigation';
import MainLayout from 'src/components/MainLayout';
import BackButton from 'src/components/BackButton';
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
import ReferralInfo from 'src/pages/referral/components/ReferralInfo';
import Card from 'src/pages/referral/components/Card';
import ReferralBottomInfo from 'src/pages/referral/components/ReferralBottomInfo';

const Referral: NextPage = () => {
  return (
    <MainLayout hasMaxWidth>
      <section className={styles.container}>
        <BackButton />
        <p className={styles.mainLabel}>Referral Program</p>
        <Navigation />
        <ReferralInfo />
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
        <Card />
        <ReferralBottomInfo />
      </section>
    </MainLayout>
  );
};

export default Referral;
