export function setCookieParams(cookieParamsString: string) {

  // Проверка на существование строки параметров
  if (cookieParamsString) {
    // Разбиваем строку на массив пар ключ-значение
    const keyValuePairs = cookieParamsString.split(',');

    // Проходимся по каждой паре ключ-значение и добавляем в объект
    keyValuePairs.forEach(pair => {
      // Разбиваем пару ключ-значение по знаку равенства
      const [key, value] = pair.split('=');

      // Записываем значение в куки
      document.cookie = `${key.trim()}=${value.trim()}; path=/`;
    });
  }

}
