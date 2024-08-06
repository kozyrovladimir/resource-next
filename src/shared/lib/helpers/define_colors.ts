import { Colors } from '../../constants';

import { ElementT, OrganT, PhaseT, SearchOptions, SeasonT } from '../../models';

export function definePhaseColor(phase: PhaseT | undefined): string {
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

export function defineElementColor(element: ElementT | undefined): string {
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

export function defineSeasonColor(element: SeasonT | undefined): string {
  switch (element) {
    case 'late summer':
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

export function defineOrganColor(element: OrganT | undefined): string {
  switch (element) {
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

export function defineDefaultColor(element: string | undefined): string {
  return Colors.defaultColor;
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const defineColorGenerator = (item: SearchOptions) => {
  switch (item) {
    case SearchOptions.phase:
      return definePhaseColor;
    case SearchOptions.season:
      return defineSeasonColor;
    case SearchOptions.element:
      return defineElementColor;
    case SearchOptions.organ:
      return defineOrganColor;
    default:
      return defineDefaultColor;
  }
};
