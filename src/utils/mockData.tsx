import React from 'react';

import currencyBtc from 'src/assets/images/currencyBtc.png';
import currencyEth from 'src/assets/images/currencyEth.png';
import currencySol from 'src/assets/images/currencySol.png';
import currencyBnb from 'src/assets/images/currencyBnb.png';

import FeatureSection1 from 'src/assets/images/FeatureSection1.png';
import FeatureSection2 from 'src/assets/images/FeatureSection2.png';
import FeatureSection3 from 'src/assets/images/FeatureSection3.png';
import FeatureSection4 from 'src/assets/images/FeatureSection4.png';
import FeatureSection5 from 'src/assets/images/FeatureSection5.png';
import FeatureSection6 from 'src/assets/images/FeatureSection6.png';
import FeatureSection7 from 'src/assets/images/FeatureSection7.png';
import { EthToken, TetherToken } from 'src/assets/svg';

export const currencyData = [
  {
    id: 1,
    imageUrl: currencyBtc,
    name: `Bitcoin`,
    priceChange: `-3.99%`,
    currentPrice: `21,843.91`,
    volume: `20.5M`,
  },
  {
    id: 2,
    imageUrl: currencyEth,
    name: `Ethereum`,
    priceChange: `-5.46%`,
    currentPrice: `1,513.188`,
    volume: `69M`,
  },
  {
    id: 3,
    imageUrl: currencySol,
    name: `SOL`,
    priceChange: `-6.05%`,
    currentPrice: `38.4803`,
    volume: `2.29M`,
  },
  {
    id: 4,
    imageUrl: currencyBnb,
    name: `Binance`,
    priceChange: `-6.05%`,
    currentPrice: `38.4803`,
    volume: `2.29M`,
  },
];

export const featureData = [
  {
    id: 1,
    imageUrl: FeatureSection1,
    label: `Win Real Crypto by Free Play`,
    isFreeToPlay: true,
  },
  {
    id: 2,
    imageUrl: FeatureSection2,
    label: `Cashback up to 25%`,
  },
  {
    id: 3,
    imageUrl: FeatureSection3,
    label: `Rakeback`,
    isFreeToPlay: true,
  },
  {
    id: 4,
    imageUrl: FeatureSection4,
    label: `Spin to Get Free Crypto`,
    isFreeToPlay: true,
  },
  {
    id: 5,
    imageUrl: FeatureSection5,
    label: `Our Charge`,
    isFreeToPlay: true,
  },
  {
    id: 6,
    imageUrl: FeatureSection6,
    label: `Our Charge`,
  },
  {
    id: 7,
    imageUrl: FeatureSection7,
    label: `Mining & Staking up to 100% APY`,
  },
];

export const transactionColumns = [
  `Дата`,
  `Deposit`,
  `Отправлено`,
  `Получено`,
  `Комиссия`,
];

export const transactionData = [
  {
    id: 0,
    Дата: `26.07.22, 22:28:06`,
    Deposit: `Вывод на карту`,
    Отправлено: (
      <>
        <TetherToken width={21} height={21} />
        0.00000000
      </>
    ),
    Получено: (
      <>
        <TetherToken width={21} height={21} />
        0.00000000
      </>
    ),
    Комиссия: (
      <>
        <TetherToken width={21} height={21} />
        0.00000000
      </>
    ),
  },
  {
    id: 1,
    Дата: `26.07.22, 22:28:06`,
    Deposit: `Вывод на карту`,
    Отправлено: (
      <>
        <EthToken width={21} height={21} />
        0.00000000
      </>
    ),
    Получено: (
      <>
        <EthToken width={21} height={21} />
        0.00000000
      </>
    ),
    Комиссия: (
      <>
        <EthToken width={21} height={21} />
        0.00000000
      </>
    ),
  },
  {
    id: 2,
    Дата: `26.07.22, 22:28:06`,
    Deposit: `Вывод на карту`,
    Отправлено: (
      <>
        <TetherToken width={21} height={21} />
        0.00000000
      </>
    ),
    Получено: (
      <>
        <TetherToken width={21} height={21} />
        0.00000000
      </>
    ),
    Комиссия: (
      <>
        <TetherToken width={21} height={21} />
        0.00000000
      </>
    ),
  },
  {
    id: 3,
    Дата: `26.07.22, 22:28:06`,
    Deposit: `Вывод на карту`,
    Отправлено: (
      <>
        <EthToken width={21} height={21} />
        0.00000000
      </>
    ),
    Получено: (
      <>
        <EthToken width={21} height={21} />
        0.00000000
      </>
    ),
    Комиссия: (
      <>
        <EthToken width={21} height={21} />
        0.00000000
      </>
    ),
  },
];

export const gameHistoryColumns = [`Type`, `Name`, `Reward`, `Deposit`];

export const gameHistoryData = [
  {
    id: 0,
    Type: `In-house`,
    Name: `Loto Game`,
    Reward: (
      <>
        <TetherToken width={21} height={21} />
        0.00000000
      </>
    ),
    Deposit: (
      <>
        <TetherToken width={21} height={21} />
        0.00000000
      </>
    ),
  },
  {
    id: 1,
    Type: `In-house`,
    Name: `Win Time`,
    Reward: (
      <>
        <EthToken width={21} height={21} />
        0.00000000
      </>
    ),
    Deposit: (
      <>
        <EthToken width={21} height={21} />
        0.00000000
      </>
    ),
  },
  {
    id: 3,
    Type: `In-house`,
    Name: `Win time`,
    Reward: (
      <>
        <TetherToken width={21} height={21} />
        0.00000000
      </>
    ),
    Deposit: (
      <>
        <TetherToken width={21} height={21} />
        0.00000000
      </>
    ),
  },
  {
    id: 3,
    Type: `In-house`,
    Name: `Loto Game`,
    Reward: (
      <>
        <EthToken width={21} height={21} />
        0.00000000
      </>
    ),
    Deposit: (
      <>
        <EthToken width={21} height={21} />
        0.00000000
      </>
    ),
  },
];

export const mockUser = {
  username: `User483768574`,
  likes: 145,
  level: 1,
  userRank: `Junior`,
};

export const referralDataColumns = [
  `Дата`,
  `Deposit`,
  `In percentages`,
  `Received`,
];

export const referralData = [
  {
    id: 0,
    Дата: `26.07.22, 22:28:06`,
    Deposit: `Вывод на карту`,
    'In percentages': (
      <>
        <TetherToken width={21} height={21} />
        0.00000000
      </>
    ),
    Received: (
      <>
        <TetherToken width={21} height={21} />
        0.00000000
      </>
    ),
  },
  {
    id: 1,
    Дата: `26.07.22, 22:28:06`,
    Deposit: `Вывод на карту`,
    'In percentages': (
      <>
        <EthToken width={21} height={21} />
        0.00000000
      </>
    ),
    Received: (
      <>
        <EthToken width={21} height={21} />
        0.00000000
      </>
    ),
  },
  {
    id: 2,
    Дата: `26.07.22, 22:28:06`,
    Deposit: `Вывод на карту`,
    'In percentages': (
      <>
        <TetherToken width={21} height={21} />
        0.00000000
      </>
    ),
    Received: (
      <>
        <TetherToken width={21} height={21} />
        0.00000000
      </>
    ),
  },
  {
    id: 3,
    Дата: `26.07.22, 22:28:06`,
    Deposit: `Вывод на карту`,
    'In percentages': (
      <>
        <EthToken width={21} height={21} />
        0.00000000
      </>
    ),
    Received: (
      <>
        <EthToken width={21} height={21} />
        0.00000000
      </>
    ),
  },
];

export const campaingsDataColumns = [
  `Дата`,
  `Campaing`,
  `Number`,
  `Received`,
  `Commission`,
];

export const campaingsData = [
  {
    id: 0,
    Дата: `26.07.22, 22:28:06`,
    Campaing: `First`,
    'In percentages': <> 0</>,
    Received: (
      <>
        <TetherToken width={21} height={21} />
        0.00000000
      </>
    ),
    Commission: (
      <>
        <TetherToken width={21} height={21} />
        0.00000000
      </>
    ),
  },
  {
    id: 1,
    Дата: `26.07.22, 22:28:06`,
    Campaing: `Second`,
    'In percentages': <> 0</>,
    Received: (
      <>
        <EthToken width={21} height={21} />
        0.00000000
      </>
    ),
    Commission: (
      <>
        <EthToken width={21} height={21} />
        0.00000000
      </>
    ),
  },
  {
    id: 2,
    Дата: `26.07.22, 22:28:06`,
    Campaing: `Third`,
    'In percentages': <> 0</>,
    Received: (
      <>
        <TetherToken width={21} height={21} />
        0.00000000
      </>
    ),
    Commission: (
      <>
        <TetherToken width={21} height={21} />
        0.00000000
      </>
    ),
  },
  {
    id: 3,
    Дата: `26.07.22, 22:28:06`,
    Campaing: `First`,
    'In percentages': <> 0</>,
    Received: (
      <>
        <EthToken width={21} height={21} />
        0.00000000
      </>
    ),
    Commission: (
      <>
        <EthToken width={21} height={21} />
        0.00000000
      </>
    ),
  },
];
