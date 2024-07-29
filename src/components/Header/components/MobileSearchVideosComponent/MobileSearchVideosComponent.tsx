"use client";

import React, {useState, useRef} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import styles from './MobileSearchVideosComponent.module.scss';
import {VscClose} from "react-icons/vsc";
import Input from "../../../ui_kit/components/input";
import {useRouter} from "next/navigation";

const MobileSearchVideosComponent = () => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.currentTarget.value);
  };

  const handleEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.currentTarget.blur();
      router.push( '/search-videos?search=' + searchValue);
    }
  };

  return (
    <div className={styles.mobileSearchWrapper}>
      <SearchIcon sx={{color: '#7d7d7d'}}/>
      <Input
        placeholder="Search…"
        value={searchValue}
        onChange={onChange}
        onKeyDown={handleEnter}
        ref={inputRef}
        autoFocus={true}
        style={{padding: '0.25rem 0.5rem', marginLeft: '0.5rem'}}
        iconEnd={<VscClose
          style={{cursor: 'pointer', position: "relative", top: '0.1rem'}}
          onClick={() => {
            setSearchValue(prevState => '')
          }}>X</VscClose>}
      />
    </div>
  );
};

export default MobileSearchVideosComponent;
