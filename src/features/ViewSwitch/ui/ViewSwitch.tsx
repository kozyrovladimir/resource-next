"use client";
import React, {FormEventHandler} from 'react';
import * as Switch from '@radix-ui/react-switch';
import styles from './ViewSwitch.module.scss';

type ViewSwitchType = {
  checked: boolean;
  setChecked: (checked: boolean) => void;

}

const ViewSwitch: React.FC<ViewSwitchType> = ({checked, setChecked}) => {

  return (
    <div className={styles.SwitchWrapper}>
      <Switch.Root checked={checked} onCheckedChange={() => setChecked(!checked)}
                   className={styles.SwitchRoot}>
        <Switch.Thumb className={styles.SwitchThumb}/>
      </Switch.Root>
      <div className={styles.SwitchPlaceholder}>
        <span>
          {checked ? 'List view' : 'Tiled view'}
        </span>
      </div>
    </div>
  );
};

export {ViewSwitch};
