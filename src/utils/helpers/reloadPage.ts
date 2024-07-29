export const reloadPage = (url: string) => {
  const isVideoRoute = url.includes('/videos/');
  if (isVideoRoute) {
    window.location.reload();
  }
}
