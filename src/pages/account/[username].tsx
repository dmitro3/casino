import type { NextPage } from 'next';
import { useMediaQuery } from 'react-responsive';
import React, { useEffect, useState } from 'react';
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
import { user as singleUser } from 'src/api';
import { useRouter } from 'next/router';

const Account: NextPage = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 1000px)` });
  const [mounted, setMounted] = useState(false);
  const [user, setUser] = useState(
    {} as {
      username: string;
      email: string;
    },
  );
  const router = useRouter();
  const { username } = router.query;

  const getUser = async (nickname: string) => {
    const res = await singleUser.getSingleUserByUsername(nickname);
    setUser(res);
  };

  useEffect(() => {
    if (username && typeof username === `string`) {
      getUser(username);
    }
  }, [username]);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

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
            <ProfileInfo username={user.username} />
            {isMobile ? (
              <>
                <ProfileCards /> <ProfileEmail email={user.email} />
                <ProfileTabs />
              </>
            ) : (
              <>
                <ProfileEmail email={user.email} />
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
