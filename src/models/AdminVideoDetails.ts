import {
  Dantain,
  DantainT,
  Element,
  ElementT,
  MeridianT,
  Organ,
  OrganT,
  Phase,
  PhaseT,
  SearchOptions,
  Season,
  SeasonT,
} from './SearchOptions';

export interface AdminVideoDetails {
  thumbnail: File;
  front_view: File;
  side_view: File;
  variations: File;
  visibility: VisibilityStatus;
  flow_name: string;
  phase: PhaseT;
  element: ElementT;
  organ: OrganT;
  season: SeasonT;
  meridian: MeridianT[];
  dantain: DantainT;
  additional_correspondences?: Array<{
    type: SearchOptions;
    value: Phase | Season | Element | Organ | Dantain;
  }>;
  description: string;
  benefits: string;
  how_do_this_flow: string;
  pro_tips: string;
  links: string[];
}

export type VisibilityStatus = 'Published' | 'Hidden';
