import React from 'react';
import VideoPageContent from '@/pages/VideoPage/VideoPage';
import TopLayout from "@/shared/ui/TopLayout/TopLayout";
import BackButton from "@/components/BackButton/BackButton";
import Link from "next/link";
import {getVideoServerSide} from "@/shared/api/api";

export default async function VideoPage({params}: {params: {id: string}}) {

  const video = await getVideoServerSide(params.id);

  console.log(video);

  return (
    <>
      <TopLayout
        title={'Yoqi resourse'}
        left={<Link style={{textDecoration: 'none'}} href={'/'}><BackButton>Back</BackButton></Link>}
      />
      <VideoPageContent
        video={video}
      />
    </>
  );
};
