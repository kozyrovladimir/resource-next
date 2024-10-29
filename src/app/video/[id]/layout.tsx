import Script from "next/script";
import {PropsWithChildren} from "react";

const VideoLayout: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <>
      <Script
        src={'//assets.mediadelivery.net/playerjs/player-0.1.0.min.js'}
      />
      {children}
    </>
  );
};

export default VideoLayout;
