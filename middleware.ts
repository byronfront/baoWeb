import { NextResponse, type NextRequest } from "next/server";
import {
  defaultLocale,
  isLocale,
  localeCookie,
  locales,
  type Locale,
} from "@/lib/i18n/config";

const FILE = /\.[^/]+$/;

const LEGACY: Record<string, string> = {
  catalogo: "catalog",
  taller: "workshop",
  contacto: "contact",
};

function detectLocale(request: NextRequest): Locale {
  const cookie = request.cookies.get(localeCookie)?.value;
  if (cookie && isLocale(cookie)) return cookie;

  const header = request.headers.get("accept-language") ?? "";
  const wanted = header
    .split(",")
    .map((part) => part.split(";")[0]?.trim().slice(0, 2).toLowerCase())
    .filter(Boolean);

  for (const code of wanted) {
    if (isLocale(code)) return code;
  }

  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  const segments = pathname.split("/").filter(Boolean);
  const first = segments[0];

  if (first && LEGACY[first]) {
    const locale = detectLocale(request);
    const rest = segments.slice(1);
    const next = ["", locale, LEGACY[first], ...rest].join("/");
    return NextResponse.redirect(new URL(next || `/${locale}`, request.url));
  }

  if (first && isLocale(first)) {
    const response = NextResponse.next();
    response.headers.set("x-locale", first);
    return response;
  }

  const locale = detectLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|images/).*)"],
};
