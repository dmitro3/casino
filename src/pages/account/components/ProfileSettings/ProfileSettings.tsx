import React from 'react';

import TabTemplate from 'src/components/TabTemplate';
import Switch from 'src/components/Switch';
import Button from 'src/components/Button';
import { SettingsIcon } from 'src/assets/svg';
import styles from './ProfileSettings.module.scss';

const ProfileSettings = () => {
  return (
    <section>
      <TabTemplate
        mainIcon={<SettingsIcon />}
        label="Personal Info Settings"
        text="Players be able to see information about your account. Chouse what Information you do no: want to display about your profile."
        tabContent={
          <div className={styles.tabSettings}>
            <div>
              <Switch /> Hide statictics
            </div>
            <div>
              <Switch /> Hide activity
            </div>
            <div>
              <Switch /> Hide played games
            </div>
            <div>
              <Switch /> Hide battles rewards
            </div>
            <div>
              <Switch /> Hide all Profile Data
            </div>
          </div>
        }
        customStyles={styles.tab}
      />

      <Button label="Responsible Gaming" customStyles={styles.button} />
    </section>
  );
};

export default ProfileSettings;
