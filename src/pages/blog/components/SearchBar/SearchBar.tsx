import Link from 'next/link';
import React from 'react';
import Button from 'src/components/Button';
import styles from 'src/pages/blog/components/SearchBar/SearchBar.module.scss';
import { useMediaQuery } from 'react-responsive';
import Input from 'src/components/Input';
import { SearchIcon } from 'src/assets/svg';

export const links = [
  {
    url: `/#`,
    label: `From CZ`,
    id: 1,
  },
  {
    url: `/#`,
    label: `Менеджмент`,
    id: 2,
    bubble: `new`,
  },
  {
    url: `/#`,
    label: `Экосистема`,
    id: 3,
  },
  {
    url: `/#`,
    label: `Комьюнити`,
    id: 4,
    dropdown: true,
  },
  {
    url: `/#`,
    label: `Рынки`,
    id: 5,
  },
  {
    url: `/#`,
    label: `Платежи`,
    id: 6,
    dropdown: true,
  },
  {
    url: `/#`,
    label: `Фиат`,
    id: 7,
    dropdown: true,
  },
  {
    url: `/#`,
    label: `Финансы`,
    id: 8,
    bubble: `soon`,
  },
  {
    url: `/#`,
    label: `PTP`,
    id: 9,
    bubble: `soon`,
  },
  {
    url: `/#`,
    label: `OTC`,
    id: 10,
    bubble: `soon`,
  },
  {
    url: `/#`,
    label: `NF`,
    id: 11,
    bubble: `soon`,
  },
];

const SearchBar = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 1100px)` });

  return (
    <div className={styles.container}>
      {isMobile ? (
        <Button customStyles={styles.button} label="Choose a category" />
      ) : (
        <div className={styles.linkContainer}>
          {links.map((link) => (
            <li key={link.id} className={styles.navigationContainerItem}>
              <Link passHref href={link.url}>
                <a href="/#" className={styles.navigationContainerItemLink}>
                  {link.label}
                </a>
              </Link>
            </li>
          ))}
        </div>
      )}
      <Input
        customContainerStyles={styles.inputContainer}
        placeholder={!isMobile ? `Search for Games` : ``}
        customStyles={styles.input}
        icon={<SearchIcon />}
      />
    </div>
  );
};

export default SearchBar;
