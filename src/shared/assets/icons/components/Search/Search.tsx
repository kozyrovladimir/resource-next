import React from 'react';
import {IconProps, IconWrapper} from '../../IconWrapper'
import style from './Search.module.scss';

const Search = (allProps: IconProps) => {
  const {svgProps: props, ...restProps} = allProps;
  return (
    <IconWrapper
      icon={
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
             xmlns="http://www.w3.org/2000/svg" className={style.searchIcon}>
          <g id="iconamoon:search">
            <path id="Vector"
                  d="M16.9998 17L13.6219 13.6222M13.6219 13.6222C14.1997 13.0444 14.6581 12.3585 14.9708 11.6035C15.2835 10.8486 15.4444 10.0395 15.4444 9.22235C15.4444 8.40522 15.2835 7.5961 14.9708 6.84117C14.6581 6.08625 14.1997 5.40031 13.6219 4.82251C13.0441 4.24472 12.3582 3.78638 11.6033 3.47368C10.8484 3.16098 10.0392 3.00004 9.22211 3.00004C8.40498 3.00004 7.59586 3.16098 6.84093 3.47368C6.086 3.78638 5.40006 4.24472 4.82227 4.82251C3.65536 5.98942 2.99979 7.57209 2.99979 9.22235C2.99979 10.8726 3.65536 12.4553 4.82227 13.6222C5.98918 14.7891 7.57185 15.4447 9.22211 15.4447C10.8724 15.4447 12.455 14.7891 13.6219 13.6222Z"
                  strokeWidth="1.5" strokeLinecap="round"
                  strokeLinejoin="round"/>
          </g>
        </svg>
      }
      {...restProps}
    />
  );
};

export default Search;
