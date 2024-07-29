import React from 'react';
import {IconProps, IconWrapper} from '../../IconWrapper';
import style from './DownArrow.module.scss';

const DownArrow = (allProps: IconProps) => {
  const {svgProps: props, ...restProps} = allProps;

  return (
    <IconWrapper
      icon={
        <svg className={style.downArrow} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="Icons">
            <path id="Polygon 5" d="M3 7L10 14L17 7" strokeWidth="1.4" strokeLinecap="round"/>
          </g>
        </svg>
      }
    />
  );
};

export default DownArrow;
