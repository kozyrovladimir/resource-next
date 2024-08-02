export enum SearchOptions {
  Phase = 'Phase',
  Season = 'Season',
  Element = 'Element',
  Organ = 'Organ',
  Dantain = 'Dantain',
}

export type PhaseT = 'Attune' | 'Purge' | 'Tonify' | 'Grow' | 'Circulate' | 'Integrate';
export enum Phase {
  Attune = 'Attune',
  Purge = 'Purge',
  Tonify = 'Tonify',
  Grow = 'Grow',
  Circulate = 'Circulate',
  Integrate = 'Integrate',
}

export type SeasonT = 'Spring' | 'Summer' | 'Late Summer' | 'Autumn' | 'Winter';

export enum Season {
  Spring = 'Spring',
  Summer = 'Summer',
  LateSummer = 'Late Summer',
  Autumn = 'Autumn',
  Winter = 'Winter',
}

export type ElementT = 'Earth' | 'Metal' | 'Water' | 'Wood' | 'Fire';

export enum Element {
  Earth = 'Earth',
  Metal = 'Metal',
  Water = 'Water',
  Wood = 'Wood',
  Fire = 'Fire',
}

export type DantainT = 'Upper' | 'Lower' | 'Middle';

export enum Dantain {
  Upper = 'Upper',
  Lower = 'Lower',
  Middle = 'Middle',
}

export type OrganT =
  | 'Heart'
  | 'Small Intestine'
  | 'Spleen'
  | 'Stomach'
  | 'Lungs'
  | 'Large Intestine'
  | 'Kidneys'
  | 'Bladder'
  | 'Liver'
  | 'Gall Bladder';

export enum Organ {
  Heart = 'Heart',
  SmallIntestine = 'Small Intestine',
  Spleen = 'Spleen',
  Stomach = 'Stomach',
  Lungs = 'Lungs',
  LargeIntestine = 'Large Intestine',
  Kidneys = 'Kidneys',
  Bladder = 'Bladder',
  Liver = 'Liver',
  GallBladder = 'Gall Bladder',
}

export type MeridianT =
  | 'Heart'
  | 'Small Intestine'
  | 'Spleen'
  | 'Stomach'
  | 'Pancreas'
  | 'Lungs'
  | 'Skin'
  | 'Large Intestine'
  | 'Kidney'
  | 'Ears'
  | 'Bladder'
  | 'Liver'
  | 'Eyes'
  | 'Gall Bladder';

export enum Meridian {
  Heart = 'Heart',
  SmallIntestine = 'Small Intestine',
  Spleen = 'Spleen',
  Stomach = 'Stomach',
  Pancreas = 'Pancreas',
  Lungs = 'Lungs',
  Skin = 'Skin',
  LargeIntestine = 'Large Intestine',
  Kidney = 'Kidney',
  Ears = 'Ears',
  Bladder = 'Bladder',
  Liver = 'Liver',
  Eyes = 'Eyes',
  GallBladder = 'Gall Bladder',
}
