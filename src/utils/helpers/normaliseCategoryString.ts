export function replaceSpacesWithUnderscores(inputString: string): string {
  return inputString.replace(/\s+/g, '_');
}

export function replaceUnderscoresWithSpaces(inputString: string): string {
  return inputString.replace(/_/g, ' ');
}

