import { Colors } from '../../constants';

import { ElementT, OrganT, PhaseT, SearchOptions, SeasonT } from '../../models';

export function definePhaseColor(phase: PhaseT | undefined): string {
  switch (phase) {
    case 'Attune':
      return Colors.orange;
    case 'Purge':
      return Colors.gray;
    case 'Tonify':
      return Colors.blue;
    case 'Grow':
      return Colors.green;
    case 'Circulate':
      return Colors.red;
    case 'Integrate':
      return Colors.pink;
    default:
      return Colors.defaultColor;
  }
}

export function defineElementColor(element: ElementT | undefined): string {
  switch (element) {
    case 'Earth':
      return Colors.orange;
    case 'Metal':
      return Colors.gray;
    case 'Water':
      return Colors.blue;
    case 'Wood':
      return Colors.green;
    case 'Fire':
      return Colors.red;
    default:
      return Colors.defaultColor;
  }
}

export function defineSeasonColor(element: SeasonT | undefined): string {
  switch (element) {
    case 'Late Summer':
      return Colors.orange;
    case 'Autumn':
      return Colors.gray;
    case 'Winter':
      return Colors.blue;
    case 'Spring':
      return Colors.green;
    case 'Summer':
      return Colors.red;
    default:
      return Colors.defaultColor;
  }
}

export function defineOrganColor(element: OrganT | undefined): string {
  switch (element) {
    case 'Spleen':
      return Colors.orange;
    case 'Lungs':
      return Colors.gray;
    case 'Kidneys':
      return Colors.blue;
    case 'Liver':
      return Colors.green;
    case 'Heart':
      return Colors.red;
    case 'Small Intestine':
      return Colors.red;
    case 'Stomach':
      return Colors.orange;
    case 'Large Intestine':
      return Colors.gray;
    case 'Bladder':
      return Colors.blue;
    case 'Gall Bladder':
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
    case SearchOptions.Phase:
      return definePhaseColor;
    case SearchOptions.Season:
      return defineSeasonColor;
    case SearchOptions.Element:
      return defineElementColor;
    case SearchOptions.Organ:
      return defineOrganColor;
    default:
      return defineDefaultColor;
  }
};
