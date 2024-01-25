import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

let prevPathname = "";

export async function middleware(req: NextRequest) {
  // сохранить pathname последней страницы (не pathname модальной страницы), (чтобы на ее основе показывать модальную страницу)
  if (!req.nextUrl.pathname.startsWith("/auth")) {
    prevPathname = req.nextUrl.pathname;
  }

  // добавить хедер, если pathname модальной страницы (чтобы отреагировать в серверном экшне и показать модальную страницу)
  if (req.nextUrl.pathname.startsWith("/auth")) {
    const url = new URL(prevPathname, req.url);

    const response = NextResponse.rewrite(url);
    response.headers.set("x-middleware-custom-test", "test");

    if (prevPathname) {
      return response;
    }
  }

  return NextResponse.next();
}

// исключить все, что не является страницей (может быть больше, если например добавить robots.txt(?))
export const config = {
  matcher: "/((?!api|_next|static|public|favicon.ico).*)",
};
