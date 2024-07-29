export function removeIdFromVideoUrl(url: string) {
  const parts = url.split('/');

  // Проверяем, достаточно ли частей в URL для обработки
  if (parts.length < 4) {
    return url;
  }

  // Удаляем последний элемент (идентификатор) из массива частей URL
  parts.pop();

  // Собираем обратно URL, объединяя части через '/'
  const modifiedUrl = parts.join('/');

  return modifiedUrl;
}

export function saveVideoId(newUrl: string, currentUrl: string) {
  const currentUrlParts = currentUrl.split('/');

  // Проверяем, достаточно ли частей в URL для обработки
  if (currentUrlParts.length < 4) {
    return newUrl;
  }

  // Собираем обратно URL, объединяя части через '/'
  const modifiedUrl = newUrl + '/' + currentUrlParts[currentUrlParts.length - 1];
  return modifiedUrl;
}
