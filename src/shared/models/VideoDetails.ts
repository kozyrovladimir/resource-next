import { ElementT, OrganT, PhaseT, SearchOptions, SeasonT } from './SearchOptions';

export interface VideoDetailsI {
  id: number;
  title: string;
  phase: PhaseT;
  season: SeasonT;
  organ: OrganT;
  element: ElementT;
  dantian: string;
  meridian: string;
  description: string;
  benefits: string;
  flowvariations: string;
  tipstopro: string;
  link: string;
  sideview: string;
  variations: string;
  thumbnail: string | null;
  createdAt: string | null;
  updatedAt: string | null;
  video_refs: videoReferenceI[] | [];
  add_corresponds: Array<{
    type: SearchOptions;
    value: string;
  }>;
  is_favorite: boolean;
}

interface videoReferenceI {
  reference: string;
  title: string;
}

export interface VideoDetailAPIT {
  videoDetail: VideoDetailsI;
  isLoading: boolean;
  error: string | undefined;
}
