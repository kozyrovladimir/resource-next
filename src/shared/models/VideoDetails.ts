import {
  DantainT,
  ElementT, MeridianT,
  OrganT,
  PhaseT,
  SearchOptions,
  SeasonT
} from './SearchOptions';

export interface VideoDetailsI {
  id: number;
  title: string;
  phase: PhaseT;
  season: SeasonT;
  organ: OrganT;
  element: ElementT;
  dantian: DantainT;
  meridian: MeridianT;
  description: string;
  benefits: string;
  flow_variations: string;
  pro_tips: string;
  link: string;
  sideview_link: string;
  variations_link: string;
  thumbnail: string | null;
  titlecard: string | null;
  cover: string | null;
  published: boolean;
  public: boolean;
  is_favorite: boolean;
}

export interface VideoDetailAPIT {
  videoDetail: VideoDetailsI;
  isLoading: boolean;
  error: string | undefined;
}
