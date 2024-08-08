"use client";

import React, {useEffect} from 'react';
import styles from './SearchPanel.module.scss';
import {Input, Select} from "@/shared";
import {Phase, Season, Element, Organ, Dantain} from "@/shared/models";
import {useUpdateQueryString} from "@/utils/hooks/useUpdateQueryString";
import useDebounce from "@/utils/hooks/useDebounce";
import {Search} from '@/shared';
import {definePhaseColor, defineSeasonColor, defineElementColor, defineOrganColor} from "@/shared/lib/helpers";

const SearchPanel: React.FC = () => {
  const phaseItems = Object.values(Phase);
  const seasonItems = Object.values(Season);
  const elementItems = Object.values(Element);
  const organItems = Object.values(Organ);
  const dantainItems = Object.values(Dantain);

  const updateQueryString = useUpdateQueryString();

  const [value, setValue] = React.useState('');
  const debouncedValue = useDebounce(value);
  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }

  useEffect(() => {
    updateQueryString('search', debouncedValue);
  }, [debouncedValue]);

  return (
    <>
      <h2 className={styles.title}>Yoqi resource</h2>
      <div className={styles.wrapper}>
        <div className={styles.search}>
          <Input iconEnd={<Search style={{bottom: '-0.25rem', position: 'relative'}}/>} value={value} onChange={handleValueChange}/>
        </div>
        <div className={styles.select1}>
          <Select onValueChange={value => updateQueryString('phase', value)}
                  placeholder={'Phase'} items={phaseItems}
                  selectKey={'phase'}
                  //any
                  defineColorFunction={definePhaseColor}
          />
        </div>
        <div className={styles.select2}>
          <Select onValueChange={value => updateQueryString('season', value)}
                  placeholder={'Season'} items={seasonItems}
                  selectKey={'season'}
                  defineColorFunction={defineSeasonColor}
          />
        </div>
        <div className={styles.select3}>
          <Select onValueChange={value => updateQueryString('element', value)}
                  placeholder={'Element'} items={elementItems}
                  selectKey={'element'}
                  defineColorFunction={defineElementColor}
          />
        </div>
        <div className={styles.select4}>
          <Select onValueChange={value => updateQueryString('organ', value)}
                  placeholder={'Organ'} items={organItems}
                  selectKey={'organ'}
                  defineColorFunction={defineOrganColor}
          />
        </div>
        <div className={styles.select5}>
          <Select onValueChange={value => updateQueryString('dantian', value)}
                  placeholder={'Dantian'} items={dantainItems}
                  selectKey={'dantian'}
                  defineColorFunction={() => '#000'}
          />
        </div>
      </div>
    </>
  );
};

export {SearchPanel};
