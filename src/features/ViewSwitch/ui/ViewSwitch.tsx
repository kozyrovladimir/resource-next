"use client";
import React, {FormEventHandler} from 'react';
import * as Switch from '@radix-ui/react-switch';
import styles from './ViewSwitch.module.scss';

const ViewSwitch = () => {

  const [checked, setChecked] = React.useState(false);

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
