import React from 'react';
import styles from './SearchPanel.module.scss';
import {Input, Select} from "@/shared";

const SearchPanel: React.FC = () => {
  const mockItems = ['item1', 'item2', 'item3', 'item4', 'item5'];


  return (
    <div className={styles.wrapper}>
      <Input/>
      <Select placeholder={'Phase'} items={mockItems}/>
      <Select placeholder={'Season'} items={mockItems}/>
      <Select placeholder={'Element'} items={mockItems}/>
      <Select placeholder={'Organ'} items={mockItems}/>
      <Select placeholder={'Dantian'} items={mockItems}/>
    </div>
  );
};

export {SearchPanel};
