import React, {PropsWithChildren} from 'react';
import styles from './HeaderContent.module.scss';
import MenuItemWithSubmenu from "../MenuItemWithSubmenu/MenuItemWithSubmenu";
import MenuItem from "../MenuItem/MenuItem";
import logo from "../../../../assets/images/logo.png";
import Image from "next/image";

const HeaderContent: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <a href="https://www.yoqi.com">
          <Image className={styles.logoImg} src={logo} alt="logo" />
        </a>
      </div>
      <div className={styles.menuAndUserMenuWrapper}>
        <div className={styles.menuWrapper}>
            <MenuItemWithSubmenu menuTitle={'ABOUT'}>
              <a className={styles.subMenuItem} href="https://www.yoqi.com/yoqi">YOQI</a>
              <a className={styles.subMenuItem} href="https://www.yoqi.com/marisa-cranfill">MARISA CRANFILL</a>
              <a className={styles.subMenuItem} href="https://www.yoqi.com/ourphilosophy">FOUNDATIONS OF PRACTICE</a>
            </MenuItemWithSubmenu>
            <MenuItemWithSubmenu menuTitle={'PRACTICE'}>
              <a className={styles.subMenuItem} href="https://www.yoqi.com/classes-workshops">CLASSES & WORKSHOPS</a>
              <a className={styles.subMenuItem} href="https://www.yoqi.com/test-your-qi">TEST YOUR QI</a>
              <a className={styles.subMenuItem} href="https://www.yoqi.com/free-videos">FREE VIDEOS</a>
              <a className={styles.subMenuItem} href="https://videos.yoqi.com">VIDEOS ON DEMAND</a>
              <a className={styles.subMenuItem} href="https://www.yoqi.com/faq-practice">PRACTICE FAQ</a>
              <a className={styles.subMenuItem} href="https://www.yoqi.com/faq">VIDEO ON DEMAND FAQ</a>
            </MenuItemWithSubmenu>
            <MenuItemWithSubmenu menuTitle={'CERTIFICATION'}>
              <a className={styles.subMenuItem} href="https://www.yoqi.com/teachers-training">TEACHER TRAINING</a>
              <a className={styles.subMenuItem} href="https://www.yoqi.com/upcoming-live-immersions">UPCOMING LIVE IMMERSIONS</a>
              <a className={styles.subMenuItem} href="https://www.yoqi.com/testimonials-1">TESTIMONIALS</a>
              <a className={styles.subMenuItem} href="https://www.yoqi.com/live-immersion-assistance-registration">LIVE IMMERSION ASSISTANCE</a>
              <a className={styles.subMenuItem} href="https://www.yoqi.com/onlinetraining-faq">ONLINE COURSE FAQ</a>
              <a className={styles.subMenuItem} href="https://www.yoqi.com/instructor-guidelines">INSTRUCTOR GUIDELINES</a>
            </MenuItemWithSubmenu>
            <MenuItemWithSubmenu menuTitle={'SHOP'}>
              <a className={styles.subMenuItem} href="https://www.yoqi.com/videos-on-demand">VIDEOS ON DEMAND</a>
              <a className={styles.subMenuItem} href="https://www.yoqi.com/new-products">ONLINE TRAINING COURSE</a>
              <a className={styles.subMenuItem} href="https://www.yoqi.com/dvds-downloads">DVDs</a>
              <a className={styles.subMenuItem} href="https://www.yoqi.com/audio-downloads">AUDIO DOWNLOADS</a>
              <a className={styles.subMenuItem} href="https://www.yoqi.com/yoqi-gift-cards">YOQI GIFT CARDS</a>
            </MenuItemWithSubmenu>
            <MenuItem>
              <a className={styles.subMenuItem} href="https://yoqi-directory.com">INSTRUCTOR DIRECTORY&nbsp;&nbsp;</a>/
            </MenuItem>
            <MenuItem>
              <a className={styles.subMenuItem} href="/login">VIDEO ON DEMAND LOGIN</a>
            </MenuItem>
        </div>
        <div className={styles.userStatusWrapper}>
          {children}
        </div>
      </div>
    </nav>
  );
};

export default HeaderContent;
