"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Search } from '../../../ui_kit';
import { VscClose } from 'react-icons/vsc';
import Input from '../../../ui_kit/components/input';
import styles from './SearchVideosComponent.module.scss';
import {useRouter, useSearchParams} from "next/navigation";

const SearchVideosComponent = () => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState('');
  const [isInputVisible, setInputVisible] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.currentTarget.value);
  };

  const handleEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      router.push('/search-videos?search=' + searchValue);
    }
    if (event.key === 'Escape') {
      setInputVisible(false);
    }
  };

  const handleClick = () => {
    setInputVisible(true);
  };

  const handleClear = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    event.stopPropagation();
    setSearchValue('');
    setInputVisible(false);
  };

  const handleBlur = () => {
    setInputVisible(false);
  };

  useEffect(() => {
    if (isInputVisible && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isInputVisible]);

  return (
    <>
      <span className={styles.slash}>/</span>
      <Search style={{ bottom: '-0.25rem', position: 'relative' }} onClick={handleClick} />
      {isInputVisible && (
        <div>
          <Input
            placeholder="Search…"
            value={searchValue}
            onChange={onChange}
            onKeyDown={handleEnter}
            ref={inputRef}
            autoFocus={true}
            onBlur={handleBlur}
            style={{ padding: '0.2rem 0.5rem', marginLeft: '0.5rem' }}
            iconEnd={
              <VscClose
                style={{cursor: 'pointer', position: "relative", top: '0.1rem'}}
                onClick={handleClear}
              />
            }
          />
        </div>
      )}
    </>
  );
};

export default SearchVideosComponent;
