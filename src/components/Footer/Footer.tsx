import Link from 'next/link';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Image from 'next/image';
import LogoFooter from 'src/assets/images/LogoFooter.png';

import {
  DiscordIcon,
  FacebookIcon,
  InstagramIcon,
  Logo,
  SpaceXIcon,
  TelegramIcon,
  TikTokIcon,
  TwitterIcon,
} from 'src/assets/svg';
import styles from './Footer.module.scss';

const Footer = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 1000px)` });

  return (
    <div className={styles.root}>
      <div className={styles.topFooter}>
        <div className={styles.topFooterDescription}>
          <div className={styles.topFooterDescriptionLogoContainer}>
            <div className={styles.topFooterDescriptionLogoContainerLabel}>
              <Image src={LogoFooter} width={118} height={24} />
            </div>
          </div>
          <p>
            This website offers gaming with risk experience. To be a user of our
            site you must be over 18 y.o. We are not responsible for the
            violation of your local laws related to i-gaming. Play responsibly
            and have fun on BetFury.
          </p>
        </div>

        <div className={styles.footerColumn}>
          <p>I-GAMING</p>
          <Link passHref href="aaa">
            <a href="/#">All games</a>
          </Link>
          <Link passHref href="aaa">
            <a href="/#">Dice</a>
          </Link>
          <Link passHref href="aaa">
            <a href="/#">Slots</a>
          </Link>
          <Link passHref href="/rank">
            <a href="/rank">Rank system</a>
          </Link>
        </div>
        <div className={styles.footerColumn}>
          <p>FEATURES</p>
          <Link passHref href="aaa">
            <a href="/#">Staking</a>
          </Link>
          <Link passHref href="aaa">
            <a href="/#">BetFury Box</a>
          </Link>
          <Link passHref href="/cashback">
            <a href="/cashback">Cashback</a>
          </Link>
          <Link passHref href="/daily">
            <a href="/daily">Daily taska</a>
          </Link>
        </div>
        {!isMobile ? (
          <>
            <div className={styles.footerColumn}>
              <p>PROMO</p>
              <Link passHref href="aaa">
                <a href="/#">Promotion</a>
              </Link>
            </div>
            <div className={styles.footerColumn}>
              <p>About us</p>
              <Link passHref href="/blog">
                <a href="/blog">News</a>
              </Link>
              <Link passHref href="aaa">
                <a href="/#">About BFG</a>
              </Link>
              <Link passHref href="aaa">
                <a href="/#">About BetFury team</a>
              </Link>
              <Link passHref href="aaa">
                <a href="/#">BetFury Docs</a>
              </Link>
              <Link passHref href="aaa">
                <a href="/#">Official Mirrors</a>
              </Link>
            </div>
            <div className={styles.footerColumn}>
              <p>Help</p>
              <Link passHref href="aaa">
                <a href="/#">News</a>
              </Link>
              <Link passHref href="/fairness">
                <a href="/fairness">Fairness</a>
              </Link>
              <Link passHref href="aaa">
                <a href="/#">Privacy Policy</a>
              </Link>
              <Link passHref href="aaa">
                <a href="/#">Terms of Service</a>
              </Link>
              <Link passHref href="aaa">
                <a href="/#">{` Sportsbetting T&C`}</a>
              </Link>
              <Link passHref href="aaa">
                <a href="/#">Bug Bounty Program</a>
              </Link>
              <Link passHref href="aaa">
                <a href="/#">Live Support</a>
              </Link>
            </div>

            <div className={styles.iconContainer}>
              <p>Community</p>
              <div className={styles.iconTop}>
                <DiscordIcon />
                <TelegramIcon />
                <FacebookIcon />
              </div>
              <div className={styles.iconTop}>
                <TikTokIcon />
                <InstagramIcon />
                <TwitterIcon />
              </div>
              <SpaceXIcon />
            </div>
          </>
        ) : (
          <>
            <div className={styles.footerColumn}>
              <p>About us</p>
              <Link passHref href="aaa">
                <a href="/#">News</a>
              </Link>
              <Link passHref href="aaa">
                <a href="/#">About BFG</a>
              </Link>
              <Link passHref href="aaa">
                <a href="/#">About BetFury team</a>
              </Link>
              <Link passHref href="aaa">
                <a href="/#">BetFury Docs</a>
              </Link>
              <Link passHref href="aaa">
                <a href="/#">Official Mirrors</a>
              </Link>
            </div>
            <div className={styles.footerColumn}>
              <p>Help</p>
              <Link passHref href="aaa">
                <a href="/#">News</a>
              </Link>
              <Link passHref href="/fairness">
                <a href="/fairness">Fairness</a>
              </Link>
              <Link passHref href="aaa">
                <a href="/#">Privacy Policy</a>
              </Link>
              <Link passHref href="aaa">
                <a href="/#">Terms of Service</a>
              </Link>
              <Link passHref href="aaa">
                <a href="/#">{` Sportsbetting T&C`}</a>
              </Link>
              <Link passHref href="aaa">
                <a href="/#">Bug Bounty Program</a>
              </Link>
              <Link passHref href="aaa">
                <a href="/#">Live Support</a>
              </Link>
            </div>
            <div className={styles.footerColumn}>
              <p>PROMO</p>
              <Link passHref href="aaa">
                <a href="/#">Promotion</a>
              </Link>
            </div>

            <div className={styles.iconContainer}>
              <div>
                <p>Community</p>
                <div className={styles.iconTop}>
                  <DiscordIcon />
                  <TelegramIcon />
                  <FacebookIcon />
                </div>
                <div className={styles.iconTop}>
                  <TikTokIcon />
                  <InstagramIcon />
                  <TwitterIcon />
                </div>
              </div>

              <SpaceXIcon />
            </div>
          </>
        )}
      </div>
      <div className={styles.bottomFooterBorder}>
        <div className={styles.bottomFooter}>
          <p>2022 Creptonspace</p>
          <div className={styles.bottomFooterContent}>
            <Link passHref href="aaa">
              <a href="/#">Privacy Policy</a>
            </Link>
            <Link passHref href="aaa">
              <a href="/#">Refund Policy</a>
            </Link>
            <Link passHref href="aaa">
              <a href="/#">Terms of Service</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
