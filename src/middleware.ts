import { NextResponse } from 'next/server';

const API_URL = process.env.API_PATH;;

export function middleware(req: any) {
  const url = req.nextUrl.clone();

  // Проверяем, что запрос начинается с /api
  if (url.pathname.startsWith('/api')) {
    // Добавляем заголовок авторизации
    const authHeader = req.headers.get('authorization') || `Bearer ${req.cookies.get('token')}`;

    // Перенаправляем запрос на внешний API
    url.pathname = url.pathname.replace('/api', '');
    const requestHeaders = new Headers(req.headers);
    requestHeaders.set('Authorization', authHeader);

    const response = NextResponse.next();
    response.headers.set('Authorization', authHeader);

    return NextResponse.rewrite(new URL(`${API_URL}${url.pathname}${url.search}`, req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/api/:path*',
};
