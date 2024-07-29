import React from 'react';
import styles from './MenuItem.module.scss';
interface MenuItemProps {
  children: React.ReactNode;
}

const MenuItem: React.FC<MenuItemProps> = ({children}) => {
  return (
    <div className={styles.menuItem}>
      {children}
    </div>
  );
};

export default MenuItem;
