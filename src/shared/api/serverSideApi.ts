import {Category} from "@/models/Category";

import {replaceUnderscoresWithSpaces} from "@/utils/helpers/normaliseCategoryString";
import {VideoDetailsI, VideoListItemI} from "@/shared/models";

const baseURL = process.env.API_PATH;

export const getCategoriesServerSide = async (): Promise<Category[]> => {
  const response = await fetch(`${baseURL}courses/1/get_categories`, {next: {tags: ['all']}});
  const data = await response.json();
  return data;
};

export const getVideosServerSide = async (): Promise<VideoListItemI[]> => {
  const response = await fetch(`${baseURL}courses/1/videos`, {next: {tags: ['all']}});
  const data = await response.json();
  return data;
};

// export const getVideosByCategoryServerSide = async (category: string): Promise<VideoListItemI[]> => {
//   const videos = await getVideosServerSide();
//   return videos.filter(video => video.categories.some(videoCategory => videoCategory.name === replaceUnderscoresWithSpaces(category) && videoCategory.published));
// }

export const getVideoServerSide = async (id: string): Promise<VideoDetailsI> => {
  const response = await fetch(`${baseURL}courses/1/videos/${id}`, {next: {tags: ['all']}});
  const data = await response.json();
  return data;
}
