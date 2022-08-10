/* eslint-disable react/no-array-index-key */
import React, { FC } from 'react';
import Button from 'src/components/Button';
import { useMediaQuery } from 'react-responsive';
import styles from './Table.module.scss';

type Data = {
  [key: string]: string | React.ReactNode;
};

type Props = {
  columns: string[];
  data: Data[];
};

const Table: FC<Props> = ({ columns, data }) => {
  const isMobile = useMediaQuery({ query: `(max-width: 768px)` });
  if (!columns || !data) {
    return null;
  }

  return (
    <div className={styles.table}>
      <div className={styles.tableHeader}>
        {columns.map((column, index) => {
          if (isMobile) {
            if (index < 0) {
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
        <div className={styles.tableHeaderLabelEmpty}> </div>
      </div>
      <div className={styles.tableBody}>
        {data.map((row, rowIndex) => {
          if (isMobile) {
            return (
              <div key={rowIndex} className={styles.tableMobileBodyRow}>
                <div className={styles.tableBodyRowElementControl}>
                  <p className={styles.tableBodyRowElementControlLabel}>
                    Session 01
                  </p>

                  <Button label="Выйти" />
                </div>
                <div className={styles.tableMobileBodyRowActive}>
                  <div>
                    <span>Дата</span>
                    <p>26.07.22, 22:28:06</p>
                  </div>
                  <div>Active</div>
                </div>
                <div>
                  <span>IP</span>
                  <p className={styles.tableMobileBodyRowLink}>
                    26.07847439572-39245718343io5745486
                  </p>
                </div>
                <div>
                  <span>Browser</span>
                  <p>Chrome/5.0 (Macintosh; Intel Mac OS X 10...</p>
                </div>
              </div>
            );
          }
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
              {!isMobile ? (
                <div className={styles.tableBodyRowElementControl}>
                  <div>Active</div>
                  <Button label="Выйти" />
                </div>
              ) : (
                <div className={styles.tableBodyRowElementControl}>
                  <p>Session 01</p>
                  <div>
                    <Button label="Выйти" />
                    <div>Active</div>
                  </div>
                </div>
              )}
              {/* <div className={styles.tableBodyRowElementControl}>Kek</div> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Table;
