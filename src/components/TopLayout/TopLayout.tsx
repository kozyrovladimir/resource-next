import React, {ComponentPropsWithoutRef, ElementRef, forwardRef} from 'react';
import styles from "./TopLayout.module.scss";
import {clsx} from "clsx";

type DefaultLayoutProps = ComponentPropsWithoutRef<'div'>;

interface TopLayoutProps extends DefaultLayoutProps {
  left?: React.ReactNode;
  right?: React.ReactNode;
  title?: string;
}

// eslint-disable-next-line react/display-name
const TopLayout = forwardRef<ElementRef<'div'>, TopLayoutProps> (({left, title, right, className, ...rest}, ref) => {

  const rootClassName = clsx(styles.topLayoutContainer, className);

  return (
    <div className={rootClassName} {...rest} ref={ref}>
      <div className={styles.leftContainer}>{left}</div>
      <div className={styles.centerContainer}>
        <h1 className={styles.title}>{title}</h1>
      </div>
      <div className={styles.rightContainer}>{right}</div>
    </div>
  );
});

export default TopLayout;
