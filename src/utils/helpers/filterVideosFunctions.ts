import {VideoListItemI} from "../../models/VideoListItem";

const filterVideosWithSubcategory = (videos: VideoListItemI[], category: string): VideoListItemI[] => {
  return videos.filter((video) => {
    let hasSubcategory = false;
    video.categories.forEach((videoCategory) => {
      if (videoCategory.name === category) {
        hasSubcategory = true;
      }
    });
    return video.subcategory === category || hasSubcategory;
  });
}

const filterVideosWithoutSubcategory = (videos: VideoListItemI[], category: string): VideoListItemI[] => {
  return videos.filter((video) => {
    let hasSubcategory = false;
    video.categories.forEach((videoCategory) => {
      if (videoCategory.name === category) {
        hasSubcategory = true;
      }
    });
    return video.category === category || hasSubcategory;
  });
}

export {
  filterVideosWithSubcategory,
  filterVideosWithoutSubcategory
}
