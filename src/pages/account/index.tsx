import type { NextPage } from 'next';
import { useMediaQuery } from 'react-responsive';
import React from 'react';
import Navigation from 'src/pages/account/components/Navigation';
import ProfileInfo from 'src/pages/account/components/ProfileInfo';
import ProfileEmail from 'src/pages/account/components/ProfileEmail';
import ProfileCards from 'src/pages/account/components/ProfileCards';
import ProfileSettings from 'src/pages/account/components/ProfileSettings';
import StatsGaming from 'src/pages/account/components/Stats/StatsGaming';
import StatsActivity from 'src/pages/account/components/Stats/StatsActivity';
import StatsTop from 'src/pages/account/components/Stats/StatsTop';
import BackButton from 'src/components/BackButton';
import ProfileTabs from 'src/pages/account/components/ProfileTabs';
import StatsRewards from 'src/pages/account/components/Stats/StatsRewards';
import MainLayout from 'src/components/MainLayout';
import styles from 'src/pages/account/index.module.scss';

const Account: NextPage = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 1000px)` });

  return (
    <MainLayout hasMaxWidth>
      <section className={styles.container}>
        <BackButton />
        <p className={styles.mainLabel}>Account</p>
        <Navigation />
        <div className={styles.root}>
          <div
            className={styles.userContainer}
            style={isMobile ? {} : { marginRight: `42px` }}
          >
            <ProfileInfo />
            {isMobile ? (
              <>
                <ProfileCards /> <ProfileEmail />
                <ProfileTabs />
              </>
            ) : (
              <>
                <ProfileEmail />
                <ProfileSettings />
              </>
            )}
          </div>
          <div className={styles.userContainer} style={{ flex: 1 }}>
            {!isMobile && (
              <>
                <ProfileCards />
                <ProfileTabs />
              </>
            )}
            {isMobile ? (
              <div className={styles.mobileTabs}>
                <StatsGaming />
                <StatsActivity />
              </div>
            ) : (
              <>
                <StatsGaming />
                <StatsActivity />
              </>
            )}
            <StatsTop />
            <StatsRewards />
            {isMobile && <ProfileSettings />}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Account;
