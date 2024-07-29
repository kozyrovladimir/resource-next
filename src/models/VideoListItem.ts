export interface VideoListItemI {
  id: number;
  title: string;
  category: string;
  subcategory: string | null;
  short_description: string;
  thumbnail: string;
  position: number;
  categories: VideoCategoriesListItemI[];
  favourites: VideoListFavoritesI[];
}
export interface VideoCategoriesListItemI {
  name: string;
  published: string;
  position: number;
}

export interface VideoListFavoritesI {
  id: number;
  project_id: number;
}
