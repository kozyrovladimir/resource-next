"use client";

import React, {useCallback} from 'react';
import styles from './SearchPanel.module.scss';
import {Input, Select} from "@/shared";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {Phase, Season, Element, Organ, Dantain} from "@/shared/models";

const SearchPanel: React.FC = () => {
  const phaseItems = Object.values(Phase);
  const seasonItems = Object.values(Season);
  const elementItems = Object.values(Element);
  const organItems = Object.values(Organ);
  const dantainItems = Object.values(Dantain);


  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {

      if(value === 'reset') {
        console.log('reset ', name);
        const params = new URLSearchParams(searchParams?.toString())
        params.delete(name)
        router.push(pathname + '?' + params.toString());
        return;
      }

      const params = new URLSearchParams(searchParams?.toString())
      params.set(name, value)

      console.log(pathname + '?' + params.toString());
      router.push(pathname + '?' + params.toString());
    },
    [searchParams]
  )

  return (
    <div className={styles.wrapper}>
      <div className={styles.search}>
        <Input/>
      </div>
      <div className={styles.select1}>
        <Select onValueChange={value => createQueryString('phase', value)}
                placeholder={'Phase'} items={phaseItems}
                selectKey={'phase'}
        />
      </div>
      <div className={styles.select2}>
        <Select onValueChange={value => createQueryString('season', value)}
                placeholder={'Season'} items={seasonItems}
                selectKey={'season'}
        />
      </div>
      <div className={styles.select3}>
        <Select onValueChange={value => createQueryString('element', value)}
                placeholder={'Element'} items={elementItems}
                selectKey={'element'}
        />
      </div>
      <div className={styles.select4}>
        <Select onValueChange={value => createQueryString('organ', value)}
                placeholder={'Organ'} items={organItems}
                selectKey={'organ'}
        />
      </div>
      <div className={styles.select5}>
        <Select onValueChange={value => createQueryString('dantian', value)}
                placeholder={'Dantian'} items={dantainItems}
                selectKey={'dantian'}
        />
      </div>
    </div>
  );
};

export {SearchPanel};
