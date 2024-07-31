"use client";

import React, {PropsWithChildren, useState} from 'react';
import MobileMenuItemWithSubmenu
  from "../MobileMenuItemWithSubmenu/MobileMenuItemWithSubmenu";
import MobileMenuItem from "../MobileMenuItem/MobileMenuItem";
import styles from "./MobileHeaderContent.module.scss";
import logo from "@/assets/images/logo.png";
import Image from "next/image";

const MobileHeaderContent: React.FC<PropsWithChildren> = ({children}) => {
  const [isActiveMenu, setActiveMenu] = useState(false);
  const toggleMenu = () => setActiveMenu(!isActiveMenu);

  const burgerStyles = styles.iconMenu + " " + (isActiveMenu ? styles._active : '');
  const menuWrapperStyles = isActiveMenu ? styles.menuWrapper_show : styles.menuWrapper_hide;

  return (
    <nav className={styles.nav}>
      <div className={styles.burgerAndTitleWrapper}>
        <a href="https://www.yoqi.com">
          <Image className={styles.logo} src={logo} alt="logo"/>
        </a>
        <div
          onClick={toggleMenu}
          className={burgerStyles}
        >
          <span/>
          <span/>
          <span/>
        </div>
      </div>
      <div className={menuWrapperStyles}>
        <MobileMenuItemWithSubmenu menuTitle={'ABOUT'}>
          <a className={styles.subMenuItem} href="https://www.yoqi.com/yoqi">YOQI</a>
          <a className={styles.subMenuItem} href="https://www.yoqi.com/marisa-cranfill">MARISA
            CRANFILL</a>
          <a className={styles.subMenuItem} href="https://www.yoqi.com/ourphilosophy">FOUNDATIONS
            OF PRACTICE</a>
        </MobileMenuItemWithSubmenu>
        <MobileMenuItemWithSubmenu menuTitle={'PRACTICE'}>
          <a className={styles.subMenuItem} href="https://www.yoqi.com/classes-workshops">CLASSES
            & WORKSHOPS</a>
          <a className={styles.subMenuItem} href="https://www.yoqi.com/test-your-qi">TEST
            YOUR QI</a>
          <a className={styles.subMenuItem} href="https://www.yoqi.com/free-videos">FREE
            VIDEOS</a>
          <a className={styles.subMenuItem} href="https://www.yoqi.com/videos-on-demand">VIDEOS
            ON DEMAND</a>
          <a className={styles.subMenuItem} href="https://www.yoqi.com/faq-practice">PRACTICE
            FAQ</a>
          <a className={styles.subMenuItem} href="https://www.yoqi.com/faq">VIDEO ON
            DEMAND FAQ</a>
        </MobileMenuItemWithSubmenu>
        <MobileMenuItemWithSubmenu menuTitle={'CERTIFICATION'}>
          <a className={styles.subMenuItem} href="https://www.yoqi.com/teachers-training">TEACHER
            TRAINING</a>
          <a className={styles.subMenuItem}
             href="https://www.yoqi.com/upcoming-live-immersions">UPCOMING LIVE
            IMMERSIONS</a>
          <a className={styles.subMenuItem}
             href="https://www.yoqi.com/testimonials-1">TESTIMONIALS</a>
          <a className={styles.subMenuItem}
             href="https://www.yoqi.com/live-immersion-assistance-registration">LIVE
            IMMERSION ASSISTANCE</a>
          <a className={styles.subMenuItem}
             href="https://www.yoqi.com/onlinetraining-faq">ONLINE COURSE FAQ</a>
          <a className={styles.subMenuItem}
             href="https://www.yoqi.com/instructor-guidelines">INSTRUCTOR GUIDELINES</a>
        </MobileMenuItemWithSubmenu>
        <MobileMenuItemWithSubmenu menuTitle={'SHOP'}>
          <a className={styles.subMenuItem} href="https://www.yoqi.com/videos-on-demand">VIDEOS
            ON DEMAND</a>
          <a className={styles.subMenuItem} href="https://www.yoqi.com/new-products">ONLINE
            TRAINING COURSE</a>
          <a className={styles.subMenuItem} href="https://yoqiflowwear.com">YOQI FLOW
            WEAR</a>
          <a className={styles.subMenuItem}
             href="https://www.yoqi.com/dvds-downloads">DVDs</a>
          <a className={styles.subMenuItem} href="https://www.yoqi.com/audio-downloads">AUDIO
            DOWNLOADS</a>
          <a className={styles.subMenuItem} href="https://www.yoqi.com/yoqi-gift-cards">YOQI
            GIFT CARDS</a>
        </MobileMenuItemWithSubmenu>
        <MobileMenuItem>
          <a className={styles.subMenuItem} href="https://yoqi-directory.com">INSTRUCTOR
            DIRECTORY</a>
        </MobileMenuItem>
        <MobileMenuItem>
          <a className={styles.subMenuItem} href="/login">VIDEO ON DEMAND LOGIN</a>
        </MobileMenuItem>
        {children}
      </div>
    </nav>
  );
};

export default MobileHeaderContent;
