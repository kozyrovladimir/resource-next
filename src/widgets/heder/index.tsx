import React from 'react';
import HeaderContent from "@/widgets/heder/ui/HeaderContent/HeaderContent";
import MobileHeaderContent from "@/widgets/heder/ui/MobileHeaderContent/MobileHeaderContent";
import UserStatus, {MobileUserStatus} from "@/widgets/heder/ui/UserStatus/UserStatus";
import MobileSearchVideosComponent
  from "@/widgets/heder/ui/MobileSearchVideosComponent/MobileSearchVideosComponent";
import SearchVideosComponent
  from "@/widgets/heder/ui/SearchVideosComponent/SearchVideosComponent";
import Favourites from "@/widgets/heder/ui/Favourites/Favourites";
import MobileFavourites from "@/widgets/heder/ui/MobileFavourites/MobileFavourites";

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

export { Header };
