import React from 'react';

import { Checkmark, EmailIcon } from 'src/assets/svg';
import TabTemplate from 'src/components/TabTemplate';
import Checkbox from 'src/components/Checkbox';
import Input from 'src/components/Input';
import styles from './ProfileEmail.module.scss';

const ProfileEmail = () => {
  return (
    <section>
      <TabTemplate
        customStyles={styles.tabMail}
        label="Моя электронная почта"
        text="Ваши данные для входа в аккаунт Binobi.com. Используйте этот адрес электронной почтыбъ, чтобы открыть платформу с любого устройства"
        mainIcon={<EmailIcon />}
        subIcon={<Checkmark isPositive />}
        subIconText="Проверено"
        isPositive
        tabContent={
          <div className={styles.inputContainer}>
            <div className={styles.inputContainer}>
              <Checkbox
                label={
                  <div className={styles.userAgreement}>
                    <span>
                      Получать промо-материалы
                      <br /> по электронной почте
                    </span>
                  </div>
                }
              />
            </div>
            <Input
              placeholder=""
              icon
              disabled
              value="657897363999@gmail.com"
              customStyles={styles.input}
            />
          </div>
        }
      />
    </section>
  );
};

export default ProfileEmail;
