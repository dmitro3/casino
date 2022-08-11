import React from 'react';

import Button from 'src/components/Button';
import TabTemplate from 'src/components/TabTemplate';
import { KeyIcon, Checkmark, GoogleIcon } from 'src/assets/svg';
import styles from './ProfileTabs.module.scss';

const ProfileTabs = () => {
  return (
    <section className={styles.tabs}>
      <div className={styles.tabsClass}>
        <TabTemplate
          label="Пароль"
          mainIcon={<KeyIcon />}
          subIcon={<Checkmark isPositive />}
          subIconText="Проверено"
          text="Must contain at least 8 characters a combination
          of letters and characters"
          tabContent={
            <Button label="Изменить" customStyles={styles.tabsButton} />
          }
          isPositive
          customStyles={styles.tabsIndividual}
        />
      </div>
      <div>
        <TabTemplate
          label="2FA"
          mainIcon={<GoogleIcon />}
          subIcon={<Checkmark />}
          subIconText="2FA не активирован"
          text="2-й уровень безопасности вашего аккаунта. Установите 2FA для защиты своего аккаунта (доступно только при решистрации в Google
или при установке адреса электронной почты
и пароля) "
          tabContent={
            <Button
              customStyles={styles.tabsButtonNegative}
              label="Активировать"
            />
          }
          customStyles={styles.tabsIndividual}
        />
      </div>
    </section>
  );
};

export default ProfileTabs;
