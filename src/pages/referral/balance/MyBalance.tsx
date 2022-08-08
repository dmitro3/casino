import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import Navigation from 'src/pages/referral/components/Navigation';
import MainLayout from 'src/components/MainLayout';
import styles from 'src/pages/referral/balance/MyBalance.module.scss';
import ProgressBar from '@ramonak/react-progress-bar';
import Image from 'next/image';
import Lightning from 'src/assets/images/Lightning.png';
import Button from 'src/components/Button';
import { ArrowBackIcon, TetherToken } from 'src/assets/svg';
import Table from 'src/components/Table';
import {
  referralData as data,
  referralDataColumns as columns,
} from 'src/utils/mockData';

const MyBalance: NextPage = () => {
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
        <div className={styles.mainContainerCard}>
          <div className={styles.cardsContainer}>
            <div className={styles.userRank}>
              <div className={styles.rankImage}>
                <Image src={Lightning} height={43} width={43} />
                <div className={styles.level}>
                  <span>1</span>
                </div>
              </div>
              <div className={styles.rankStats}>
                <span>
                  My rank: <span>Newcomer</span>
                </span>
                <ProgressBar
                  bgColor="#FFFFFF1A"
                  height="4px"
                  className={styles.barContainer}
                  isLabelVisible
                  customLabel=" "
                  completed={0}
                />
                <span className={styles.progressBarEnd}>🎁%</span>
                <Button
                  label="See all ranks"
                  customStyles={styles.button}
                  rightIcon={<ArrowBackIcon />}
                />
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <p>Calculated</p>
            <div className={styles.cardValue}>
              <TetherToken />
              <span>0.000000000</span>
            </div>
          </div>
          <div className={styles.cardCount}>
            <p>Received</p>
            <div className={styles.cardValue}>
              <span>0</span>
            </div>
          </div>
          <div className={styles.card}>
            <p>In percentages</p>
            <div className={styles.cardValue}>
              <TetherToken />
              <span>0.000000000</span>
            </div>
          </div>
        </div>
        <p className={styles.tableLabel}>Balance history</p>
        <Table customStyles={styles.table} columns={columns} data={data} />
      </section>
    </MainLayout>
  );
};

export default MyBalance;
