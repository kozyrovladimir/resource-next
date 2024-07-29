"use client";

import React from "react";
import styles from "./MenuItemWithSubmenu.module.scss";

interface MenuItemWitchSubmenuProps {
  menuTitle: string | React.ReactNode;
  children: React.ReactNode;
  divider?: boolean;
  left?: boolean;
}

const MenuItemWithSubmenu: React.FC<MenuItemWitchSubmenuProps> = ({
                                                                    children,
                                                                    menuTitle,
                                                                    divider = true,
                                                                    left = false,
                                                                  }) => {



  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  }

  const handleMouseLeave = () => {
    setIsHovered(false);
  }

  const subMenuWrapperStyle = styles.subMenuWrapper + ' ' + (isHovered ? styles.subMenuWrapper_visible : '') + ' ' + (left ? styles.subMenuWrapper_leftContent : '');
  const dividerComponent = divider ? ' /' : '';

  return (
    <div>
      <div className={styles.menuItem} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <span>
          {menuTitle}&nbsp;
        </span>
        {dividerComponent}
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
             className={subMenuWrapperStyle}>
          {
            React.Children.map(children, (child) => {
              // this condition is needed to avoid rendering null
              if (!child) {
                return null;
              }

              return (
                <div>
                  {child}
                </div>
              );
            })
          }
        </div>
      </div>
    </div>
  );
};

export default MenuItemWithSubmenu;
