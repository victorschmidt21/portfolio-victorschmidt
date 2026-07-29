import { NextResponse, type NextRequest } from "next/server";
import { renderMarkdownForPath, estimateTokens } from "@/lib/markdown";

export function proxy(request: NextRequest) {
  const accept = request.headers.get("accept") ?? "";
  if (!accept.includes("text/markdown")) {
    return NextResponse.next({ headers: { Vary: "Accept" } });
  }

  const markdown = renderMarkdownForPath(request.nextUrl.pathname);
  if (markdown === null) {
    return NextResponse.next({ headers: { Vary: "Accept" } });
  }

  return new NextResponse(markdown, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "x-markdown-tokens": String(estimateTokens(markdown)),
      Vary: "Accept",
    },
  });
}

export const config = {
  matcher: ["/", "/about", "/projects", "/projects/:slug"],
};
