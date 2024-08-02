import { DantainT, ElementT, OrganT, PhaseT, SeasonT } from '@/shared/models';

export interface VideoListItemAPI {
  id: number;
  title: string;
  phase: PhaseT;
  season: SeasonT;
  organ: OrganT;
  element: ElementT;
  description: string;
  dantain: DantainT;
  thumbnail: string;
  video_refs: Array<{ reference: string; title: string }>;
  add_corresponds: Array<{ type: string; value: string }>;
  favourites: any[];
}
export interface VideoListItemI extends VideoListItemAPI {
  is_favorite: boolean;
}
