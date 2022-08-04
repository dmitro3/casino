/* eslint-disable react/no-array-index-key */
import React, { FC } from 'react';
import Button from 'src/components/Button';

import styles from './Table.module.scss';

type Data = {
  [key: string]: string | React.ReactNode;
};

type Props = {
  columns: string[];
  data: Data[];
};

const Table: FC<Props> = ({ columns, data }) => {
  return (
    <div className={styles.table}>
      <div className={styles.tableHeader}>
        {columns.map((column) => (
          <div key={column} className={styles.tableHeaderLabel}>
            {column}
          </div>
        ))}
        <div className={styles.tableHeaderLabelEmpty}> </div>
      </div>
      <div className={styles.tableBody}>
        {data.map((row, rowIndex) => {
          return (
            <div key={rowIndex} className={styles.tableBodyRow}>
              {Object.keys(row).map((element) => {
                if (element !== `id`) {
                  return (
                    <div
                      key={element + Math.random()}
                      className={styles.tableBodyRowElement}
                    >
                      {row[element]}
                    </div>
                  );
                }
                return null;
              })}
              <div className={styles.tableBodyRowElementControl}>
                <div>Active</div>
                <Button label="Выйти" />
              </div>
              {/* <div className={styles.tableBodyRowElementControl}>Kek</div> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Table;
