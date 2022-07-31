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
