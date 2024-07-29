import { Category } from "@/models/Category";
import { CategoriesDataI } from "@/models/CategoriesDataI";
import { replaceSpacesWithUnderscores } from "@/utils/helpers/normaliseCategoryString";
import {VideoListItemI} from "@/models/VideoListItem";
import _ from "lodash";

export function processCategoriesForMain(categories: Category[], videos: VideoListItemI[]): CategoriesDataI[] {
  if (Array.isArray(categories)) {
    categories.sort((a: Category, b: Category) => a.position - b.position);
    categories.forEach((category: Category) => {
      category.name = replaceSpacesWithUnderscores(category.name);
    });
  }

  const categoriesData: CategoriesDataI[] = categories.map((category: Category) => {
    const videosByCategory = videos.filter(video => video.categories.some(videoCategory => replaceSpacesWithUnderscores(videoCategory.name) === category.name && videoCategory.published));
    const sortedVideos = _.sortBy(videosByCategory, ['categories[0].position'])
    const firstVideo = sortedVideos[0];

    return {
      path: `/videos/${category.name}/${firstVideo.id}`,
      link: category.thumbnail ? category.thumbnail : '',
      title: category.title ? category.title : category.name,
      position: category.position ? category.position : 0,
      name: category.name ? category.name : '',
    }
  });

  return categoriesData;
}
