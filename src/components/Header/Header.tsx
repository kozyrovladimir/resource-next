import React from 'react';
import HeaderContent from "./components/HeaderContent/HeaderContent";
import MobileHeaderContent from "./components/MobileHeaderContent/MobileHeaderContent";
import UserStatus, {MobileUserStatus} from "./components/UserStatus/UserStatus";
import MobileSearchVideosComponent
  from "./components/MobileSearchVideosComponent/MobileSearchVideosComponent";
import SearchVideosComponent
  from "./components/SearchVideosComponent/SearchVideosComponent";
import Favourites from "./components/Favourites/Favourites";
import MobileFavourites from "./components/MobileFavourites/MobileFavourites";

const Header = () => {
  return (
    <>
      <HeaderContent>
        <UserStatus/>
        <SearchVideosComponent/>
        <Favourites/>
      </HeaderContent>
      <MobileHeaderContent>
        <MobileUserStatus/>
        <MobileSearchVideosComponent/>
        <MobileFavourites/>
      </MobileHeaderContent>
    </>
  );
};

export default Header;
