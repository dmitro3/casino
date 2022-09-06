import Link from 'next/link';
import React from 'react';
import Button from 'src/components/Button';
import styles from 'src/pages/blog/components/SearchBar/SearchBar.module.scss';
import { useMediaQuery } from 'react-responsive';
import Input from 'src/components/Input';
import { SearchIcon } from 'src/assets/svg';
import Dropdown from 'src/components/Dropdown';

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

type Props = {
  onClick: (categoryId: string) => void;
  categories: { id: string; name: string }[];
};

const SearchBar = ({ categories = [], onClick }: Props) => {
  const isMobile = useMediaQuery({ query: `(max-width: 1100px)` });
  console.log(`categories`, categories);
  return (
    <div className={styles.container}>
      {isMobile ? (
        <Dropdown
          buttonComponent={
            <Button customStyles={styles.button} label="Choose a category" />
          }
          dropdownComponent={categories.map((category) => (
            <button
              className={styles.categoriesButton}
              onClick={() => onClick(category.id)}
            >
              {category.name}
            </button>
          ))}
          customButtonStyles={styles.buttonDropdown}
          customDropdownStyles={styles.windowDropdown}
        />
      ) : (
        <div className={styles.linkContainer}>
          {categories.map((category) => (
            <li className={styles.navigationContainerItem}>
              <button
                className={styles.categoriesButton}
                onClick={() => onClick(category.id)}
              >
                {category.name}
              </button>
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
