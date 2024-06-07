import { paths, underConstructionPaths } from '@lib/constant';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export default async function middleware(req: NextRequest) {
  const pathName = req.nextUrl.pathname;

  try {
    if (underConstructionPaths.includes(pathName) && !req.nextUrl.searchParams.has('requestUrl')) {
      return NextResponse.redirect(new URL(paths.underConstruction), {
        status: 302,
        headers: { 'Cache-Control': 'no-store' },
      });
    }
  } catch (err) {
    if (pathName.startsWith(paths.underConstruction)) return;

    const requestUrl = req.nextUrl.href?.split('?')?.[0];
    return NextResponse.redirect(new URL(`${paths.underConstruction}?requestUrl=${requestUrl}`, req.url), {
      status: 302,
      headers: { 'Cache-Control': 'no-store' },
    });
  }
}
