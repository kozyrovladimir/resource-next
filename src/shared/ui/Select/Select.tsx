"use client";

import * as SelectRadix from '@radix-ui/react-select';
import React from 'react';
import {VscChevronDown, VscClose} from "react-icons/vsc";
import styles from './Select.module.scss';
import {useSearchParams} from "next/navigation";
import {formatTagString} from "@/shared/lib/helpers";

type SelectProps = {
  placeholder: string;
  items: string[];
  selectKey: string;
  onValueChange: (value: string) => void;
  defineColorFunction: (value: any) => string;
}

const Select: React.FC<SelectProps> = ({
                                         placeholder,
                                         items,
                                         onValueChange,
                                         selectKey,
                                         defineColorFunction
                                       }) => {
  const searchParams = useSearchParams();
  const selectedValue = searchParams?.get(selectKey);

  React.useEffect(() => {
    if (selectedValue && items.includes(selectedValue)) {
      onValueChange(selectedValue);
    }
  }, [selectedValue]);

  return (
    <div className={styles.selectContainer}>
      <SelectRadix.Root value={selectedValue || ''} onValueChange={onValueChange}>
        <SelectRadix.Trigger className={styles.trigger}>
          <SelectRadix.Value placeholder={placeholder}/>
          <SelectRadix.Icon className={styles.icon}>
            <VscChevronDown/>
          </SelectRadix.Icon>
        </SelectRadix.Trigger>

        <SelectRadix.Portal>
          <SelectRadix.Content position="popper" className={styles.content}>
            <SelectRadix.Viewport>
              {items.map((item, index) => (
                <SelectRadix.Item key={index} className={styles.item} value={item}>
                  <SelectRadix.ItemText><span style={{color: defineColorFunction(item)}}>{formatTagString(item)}</span></SelectRadix.ItemText>
                  <SelectRadix.ItemIndicator/>
                </SelectRadix.Item>
              ))}
              <SelectRadix.Separator className={styles.separator}/>
              <SelectRadix.Item value={'reset'} className={styles.item}>
                <SelectRadix.ItemText>Reset filter</SelectRadix.ItemText>
                <SelectRadix.Icon className={styles.icon}>
                  <VscClose/>
                </SelectRadix.Icon>
                <SelectRadix.ItemIndicator/>
              </SelectRadix.Item>
            </SelectRadix.Viewport>
          </SelectRadix.Content>
        </SelectRadix.Portal>
      </SelectRadix.Root>
    </div>
  );
};

export {Select};
