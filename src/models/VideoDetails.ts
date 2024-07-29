import {VideoCategoriesListItemI} from "./VideoListItem";

export interface VideoDetailsI {
  id: number;
  title: string;
  category: string;
  subcategory: string | null;
  description: string;
  html_description: string;
  short_description: string;
  published: boolean;
  accessible: boolean;
  link: string;
  thumbnail: string;
  titlecard: string;
  video_attachments: Array<{
    title: string;
    description: string;
    link: string;
  }>
  categories: VideoCategoriesListItemI[];
  favourite: boolean;
}

export interface VideoDetailsWithSubscriptionStatusI extends VideoDetailsI {
  subscriptionStatus: string;
}

export interface VideoDetailAPIT {
  videoDetail: VideoDetailsWithSubscriptionStatusI;
  isLoading: boolean;
  error: string | undefined;
}
