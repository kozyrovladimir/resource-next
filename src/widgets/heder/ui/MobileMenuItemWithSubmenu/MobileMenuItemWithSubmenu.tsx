'use client'

import React, {MouseEvent, useEffect, useRef, useState} from 'react';
import styles from "./MobileMenuItemWithSubmenu.module.scss";

interface MobileMenuItemWithSubmenuProps {
  menuTitle: string | React.ReactNode;
  children: React.ReactNode;
}

const MobileMenuItemWithSubmenu: React.FC<MobileMenuItemWithSubmenuProps> = ({children, menuTitle}) => {
  const [isSubMenuOpen, setSubMenuOpen] = useState(false);
  const subMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent<HTMLDivElement>) => {
      if (subMenuRef.current && !subMenuRef.current.contains(event.target as Node)) {
        setSubMenuOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick as any);

    return () => {
      document.removeEventListener('click', handleOutsideClick as any);
    };
  }, []);

  const handleItemClick = () => {
    setSubMenuOpen(!isSubMenuOpen);
  };

  const handleSubMenuItemClick = () => {
    setSubMenuOpen(false);
  };

  const subMobileMenuItemStyles = `${styles.mobileMenuItem} ${isSubMenuOpen ? styles.mobileMenuItem_active : ''}`;
  const subMobileMenuStyles = `${styles.subMenuWrapper} ${isSubMenuOpen ? styles.subMenuWrapper_visible : ''}`;

  return (
    <div>
      <div ref={subMenuRef} className={subMobileMenuItemStyles} onClick={handleItemClick}>
        {menuTitle}
      </div>
      <div className={subMobileMenuStyles}>
        {
          React.Children.map(children, (child) => {
            return (
              <div onClick={handleSubMenuItemClick}>
                {child}
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default MobileMenuItemWithSubmenu;
