/* eslint-disable react/no-array-index-key */
import React, { FC } from 'react';
import { useMediaQuery } from 'react-responsive';

import styles from './Table.module.scss';

type Data = {
  [key: string]: string | React.ReactNode;
};

type Props = {
  columns: string[];
  data: Data[];
  customStyles?: any;
};

const Table: FC<Props> = ({ columns, data, customStyles }) => {
  const isMobile = useMediaQuery({ query: `(max-width: 768px)` });

  if (!columns || !data) {
    return null;
  }

  return (
    <div className={`${styles.table} ${customStyles}`}>
      <div className={styles.tableHeader}>
        {columns.map((column, index) => {
          if (isMobile) {
            if (index < 2) {
              return (
                <div key={column} className={styles.tableHeaderLabel}>
                  {column}
                </div>
              );
            }
            return null;
          }
          return (
            <div key={column} className={styles.tableHeaderLabel}>
              {column}
            </div>
          );
        })}
      </div>
      <div className={styles.tableBody}>
        {data.map((row, rowIndex) => {
          return (
            <div key={rowIndex} className={styles.tableBodyRow}>
              {Object.keys(row).map((element, index) => {
                if (element !== `id`) {
                  if (isMobile) {
                    if (index < 3)
                      return (
                        <div
                          key={element + Math.random()}
                          className={styles.tableBodyRowElement}
                        >
                          {row[element]}
                        </div>
                      );
                    return null;
                  }
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
              {isMobile && (
                <button className={styles.tableBodyRowButton}>More +</button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Table;
