import type { NextPage } from 'next';
import { useMediaQuery } from 'react-responsive';
import ErrorPage from 'next/error';
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
import { user as userApi } from 'src/api';
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
  const [isUserExist, setIsUserExist] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const { username } = router.query;

  const getUser = async (nickname: string) => {
    try {
      const res = await userApi.getSingleUserByUsername(nickname);
      setUser(res);
    } catch {
      setIsUserExist(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (username && typeof username === `string`) {
      getUser(username);
    }
  }, [username]);

  useEffect(() => setMounted(true), []);
  if (!mounted || isLoading) return null;

  if (!isUserExist) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <MainLayout isLoading={isLoading} hasMaxWidth>
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
