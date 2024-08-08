export function packItems<T>(videos: T[], num: number): T[][] {
  const videosForPacking: T[] = JSON.parse(JSON.stringify(videos));
  const videoPackages: T[][] = [];

  for (let i = 0; i < Math.ceil(videosForPacking.length / num); i++) {
    videoPackages[i] = videosForPacking.slice(i * num, i * num + num);
  }

  return videoPackages;
}
