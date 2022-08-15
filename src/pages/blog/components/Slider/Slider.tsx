import React from 'react';
import styles from 'src/pages/blog/components/Slider/Slider.module.scss';
import Image from 'next/image';
import Lake from 'src/assets/images/bitcoin-lake.png';
import Blur from 'src/components/Blur';

// type Props = {

// }

const Slider = () => {
  return (
    <div className={styles.sliderContainer}>
      <div className={styles.sliderContainerImage}>
        <div className={styles.sliderContainerImageText}>
          <p>
            Mining &<br /> Staking up to <br />
            100% APY
          </p>
          <span>binobi</span>
        </div>
        <Blur color="#77b40d">
          <Image src={Lake} width={140} height={100} />
        </Blur>
      </div>
      <div className={styles.sliderContainerDescription}>
        <p>Поход Binobi к соблюдению требований</p>
        <span>
          За последний год мы прошли долгий путь со взлетами и падениями,
          вызванными пандемией. В то время как большинство отраслей медленно
          востанавливаються, для экосистемы и индустрии блокчейна в целом 2021-й
          стал годом невероятного роста и...
        </span>
        <div>
          <span>2022-03-16</span>
          <div>
            <div>
              <p />
            </div>
            <div>
              <p />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
