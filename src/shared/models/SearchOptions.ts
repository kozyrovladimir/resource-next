export enum SearchOptions {
  phase = 'phase',
  season = 'peason',
  element = 'element',
  organ = 'organ',
  dantain = 'dantain',
}

export type PhaseT = 'attune' | 'purge' | 'tonify' | 'grow' | 'circulate' | 'integrate';
export enum Phase {
  attune = 'attune',
  purge = 'purge',
  tonify = 'tonify',
  grow = 'grow',
  circulate = 'circulate',
  integrate = 'integrate',
}

export type SeasonT = 'spring' | 'summer' | 'late_summer' | 'autumn' | 'winter';

export enum Season {
  spring = 'spring',
  summer = 'summer',
  lateSummer = 'late_summer',
  autumn = 'autumn',
  winter = 'winter',
}

export type ElementT = 'earth' | 'metal' | 'water' | 'wood' | 'fire';

export enum Element {
  earth = 'earth',
  metal = 'metal',
  water = 'water',
  wood = 'wood',
  fire = 'fire',
}

export type DantainT = 'upper' | 'lower' | 'middle';

export enum Dantain {
  upper = 'upper',
  lower = 'lower',
  middle = 'middle',
}

export type OrganT =
  | 'heart'
  | 'small intestine'
  | 'spleen'
  | 'stomach'
  | 'lungs'
  | 'large intestine'
  | 'kidneys'
  | 'bladder'
  | 'liver'
  | 'gall bladder';

export enum Organ {
  heart = 'heart',
  smallIntestine = 'small intestine',
  spleen = 'spleen',
  stomach = 'stomach',
  lungs = 'lungs',
  largeIntestine = 'large intestine',
  kidneys = 'kidneys',
  bladder = 'bladder',
  liver = 'liver',
  gallBladder = 'gall bladder',
}

export type MeridianT =
  | 'heart'
  | 'small intestine'
  | 'spleen'
  | 'stomach'
  | 'pancreas'
  | 'lungs'
  | 'skin'
  | 'large intestine'
  | 'kidney'
  | 'ears'
  | 'bladder'
  | 'liver'
  | 'eyes'
  | 'gall bladder';

export enum Meridian {
  heart = 'heart',
  smallIntestine = 'small intestine',
  spleen = 'spleen',
  stomach = 'stomach',
  pancreas = 'pancreas',
  lungs = 'lungs',
  skin = 'skin',
  largeIntestine = 'large intestine',
  kidney = 'kidney',
  ears = 'ears',
  bladder = 'bladder',
  liver = 'liver',
  eyes = 'eyes',
  gallBladder = 'gall bladder',
}
