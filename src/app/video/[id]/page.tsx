import React from 'react';
import VideoPageContent from '@/pages/VideoPage/VideoPage';
import TopLayout from "@/shared/ui/TopLayout/TopLayout";
import BackButton from "@/components/BackButton/BackButton";
import Link from "next/link";

const VideoPage = () => {
  return (
    <>
      <TopLayout
        title={'Yoqi resourse'}
        left={<Link style={{textDecoration: 'none'}} href={'/'}><BackButton>Back</BackButton></Link>}
      />
      <VideoPageContent/>
    </>
  );
};

export default VideoPage;
