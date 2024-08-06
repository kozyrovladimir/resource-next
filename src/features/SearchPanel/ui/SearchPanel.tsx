"use client";

import React from 'react';
import styles from './SearchPanel.module.scss';
import {Input, Select} from "@/shared";
import {Phase, Season, Element, Organ, Dantain} from "@/shared/models";
import {useUpdateQueryString} from "@/utils/hooks/useUpdateQueryString";

const SearchPanel: React.FC = () => {
  const phaseItems = Object.values(Phase);
  const seasonItems = Object.values(Season);
  const elementItems = Object.values(Element);
  const organItems = Object.values(Organ);
  const dantainItems = Object.values(Dantain);

  const updateQueryString = useUpdateQueryString();

  return (
    <div className={styles.wrapper}>
      <div className={styles.search}>
        <Input/>
      </div>
      <div className={styles.select1}>
        <Select onValueChange={value => updateQueryString('phase', value)}
                placeholder={'Phase'} items={phaseItems}
                selectKey={'phase'}
        />
      </div>
      <div className={styles.select2}>
        <Select onValueChange={value => updateQueryString('season', value)}
                placeholder={'Season'} items={seasonItems}
                selectKey={'season'}
        />
      </div>
      <div className={styles.select3}>
        <Select onValueChange={value => updateQueryString('element', value)}
                placeholder={'Element'} items={elementItems}
                selectKey={'element'}
        />
      </div>
      <div className={styles.select4}>
        <Select onValueChange={value => updateQueryString('organ', value)}
                placeholder={'Organ'} items={organItems}
                selectKey={'organ'}
        />
      </div>
      <div className={styles.select5}>
        <Select onValueChange={value => updateQueryString('dantian', value)}
                placeholder={'Dantian'} items={dantainItems}
                selectKey={'dantian'}
        />
      </div>
    </div>
  );
};

export {SearchPanel};
