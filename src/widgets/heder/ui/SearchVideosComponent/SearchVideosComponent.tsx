"use client";

import React, {useState, useRef, useEffect} from 'react';
import {Search} from '@/shared';
import styles from './SearchVideosComponent.module.scss';
import {useRouter} from "next/navigation";
import SearchInput from "@/features/SearchInput/SearchInput";

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
      router.push('/?search=' + searchValue + '&page=1');
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
      <Search style={{bottom: '-0.25rem', position: 'relative'}} onClick={handleClick}/>
      {isInputVisible && (
        <div>
          <SearchInput
            value={searchValue}
            onChange={onChange}
            onKeyDown={handleEnter}
            ref={inputRef}
            autoFocus={true}
            onBlur={handleBlur}
            handleClear={handleClear}
          />
        </div>
      )}
    </>
  );
};

export default SearchVideosComponent;
