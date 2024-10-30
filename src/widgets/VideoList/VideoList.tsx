"use client";

import React from 'react';
import {useFetchVideos} from "@/utils/hooks/useFetchVideos";
import VideoCard from "@/features/VideoCard/ui/VideoCard";
import VideoCategoryGridContainer
  from "@/shared/ui/VideoCategoryGridContainer/VideoCategoryGridContainer";
import useFilteredParams from "@/utils/hooks/useFilteredParams";
import {VideoTable} from "@/features/VideoTable";
import VideoPaginationRouter
  from "@/components/VideoPaginationRouter/VideoPaginationRouter";
import {packItems} from "@/utils/helpers/packItems";

type VideoListType = {
  isTableView: boolean;
}

const VideoList: React.FC<VideoListType> = ({isTableView}) => {
  const {videoList, isLoading, error} = useFetchVideos();

  const params = useFilteredParams();

  const filtersKeys = Object.keys(params.filters).filter((key) => params.filters[key as keyof typeof params.filters]);

  const filteredVideos = videoList.filter((video) => {
    return filtersKeys.every((key) => {
      return video[key as keyof typeof video] === params.filters[key as keyof typeof params.filters];
    });
  });

  const filteredVideosBySearch = filteredVideos.filter((video) => {
      return video.title.toLowerCase().includes((params.search ?? '').toLowerCase());
    }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!filteredVideosBySearch.length) {
    return <div>No flows found</div>;
  }

  const maxItems = 12;

  const videoPackages = packItems(filteredVideosBySearch, maxItems);

  // check correct page from url

  if (params.page > videoPackages.length) {
    return <div>Page not found</div>;
  }

  return (
    <>
      {
        !isTableView
          ? <VideoCategoryGridContainer>
            {
              videoPackages[params.page - 1].map((video) => {
                return (
                  <VideoCard
                    key={video.id}
                    video={video}
                  />
                )
              })}
          </VideoCategoryGridContainer>
          : <VideoTable
            videoList={videoPackages[params.page - 1]}
          />
      }
      <VideoPaginationRouter
        numPages={videoPackages.length}
        page={params.page}
      />
    </>
  );
};

export default VideoList;
