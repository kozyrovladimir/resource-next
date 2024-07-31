import React from 'react';
import styles from './SearchPanel.module.scss';
import {Input, Select} from "@/shared";

const SearchPanel: React.FC = () => {
  const mockItems = ['item1', 'item2', 'item3', 'item4', 'item5'];


  return (
    <div className={styles.wrapper}>
      <div className={styles.search}>
        <Input/>
      </div>
      <div className={styles.select1}>
        <Select placeholder={'Phase'} items={mockItems}/>
      </div>
      <div className={styles.select2}>
        <Select placeholder={'Season'} items={mockItems}/>
      </div>
      <div className={styles.select3}>
        <Select placeholder={'Element'} items={mockItems}/>
      </div>
      <div className={styles.select4}>
        <Select placeholder={'Organ'} items={mockItems}/>
      </div>
      <div className={styles.select5}>
        <Select placeholder={'Dantian'} items={mockItems}/>
      </div>
    </div>
  );
};

export {SearchPanel};
