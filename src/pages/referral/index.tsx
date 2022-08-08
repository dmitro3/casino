import type { NextPage } from 'next';
import React from 'react';
import Navigation from 'src/pages/referral/components/Navigation';
import MainLayout from 'src/components/MainLayout';
import BackButton from 'src/components/BackButton';
import styles from 'src/pages/referral/index.module.scss';
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
