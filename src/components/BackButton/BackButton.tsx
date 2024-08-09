import React, {ComponentPropsWithoutRef} from 'react';
import {Button} from '@/shared';
import {VscChevronLeft} from "react-icons/vsc";
import styles from './BackButton.module.scss';

type DefaultButtonProps = ComponentPropsWithoutRef<'button'>

const BackButton: React.FC<DefaultButtonProps> = ({children ,...props}) => {

  return (
    <Button className={styles.button} style={{position: "relative", paddingLeft: '2.6rem'}} variant={'outlined'} {...props}>
      <VscChevronLeft style={{fontSize: '26px', position: 'absolute', left: "1rem"}}/>
      {children}
    </Button>
  );
};

export default BackButton;
