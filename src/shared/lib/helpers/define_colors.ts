import { Colors } from '../../constants';
import { ElementT, OrganT, PhaseT, SearchOptions, SeasonT } from '../../models';

export function definePhaseColor(phase: PhaseT): string {
  switch (phase) {
    case 'attune':
      return Colors.orange;
    case 'purge':
      return Colors.gray;
    case 'tonify':
      return Colors.blue;
    case 'grow':
      return Colors.green;
    case 'circulate':
      return Colors.red;
    case 'integrate':
      return Colors.pink;
    default:
      return Colors.defaultColor;
  }
}

export function defineElementColor(element: ElementT): string {
  switch (element) {
    case 'earth':
      return Colors.orange;
    case 'metal':
      return Colors.gray;
    case 'water':
      return Colors.blue;
    case 'wood':
      return Colors.green;
    case 'fire':
      return Colors.red;
    default:
      return Colors.defaultColor;
  }
}

export function defineSeasonColor(season: SeasonT): string {
  switch (season) {
    case 'late_summer':
      return Colors.orange;
    case 'autumn':
      return Colors.gray;
    case 'winter':
      return Colors.blue;
    case 'spring':
      return Colors.green;
    case 'summer':
      return Colors.red;
    default:
      return Colors.defaultColor;
  }
}

export function defineOrganColor(organ: OrganT): string {
  switch (organ) {
    case 'spleen':
      return Colors.orange;
    case 'lungs':
      return Colors.gray;
    case 'kidneys':
      return Colors.blue;
    case 'liver':
      return Colors.green;
    case 'heart':
      return Colors.red;
    case 'small intestine':
      return Colors.red;
    case 'stomach':
      return Colors.orange;
    case 'large intestine':
      return Colors.gray;
    case 'bladder':
      return Colors.blue;
    case 'gall bladder':
      return Colors.green;
    default:
      return Colors.defaultColor;
  }
}

export function defineDefaultColor(): string {
  return Colors.defaultColor;
}

type DefineColorFunction<T extends SearchOptions> =
  T extends SearchOptions.phase ? (phase: PhaseT) => string :
    T extends SearchOptions.season ? (season: SeasonT) => string :
      T extends SearchOptions.element ? (element: ElementT) => string :
        T extends SearchOptions.organ ? (organ: OrganT) => string :
          never;


export const defineColorGenerator = <T extends SearchOptions>(item: T): DefineColorFunction<T> => {
  switch (item) {
    case SearchOptions.phase:
      return definePhaseColor as DefineColorFunction<T>;
    case SearchOptions.season:
      return defineSeasonColor as DefineColorFunction<T>;
    case SearchOptions.element:
      return defineElementColor as DefineColorFunction<T>;
    case SearchOptions.organ:
      return defineOrganColor as DefineColorFunction<T>;
    default:
      return defineDefaultColor as unknown as DefineColorFunction<T>;
  }
};
