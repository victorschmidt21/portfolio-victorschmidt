import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SITE } from "@/lib/constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — Full Stack Developer`,
    template: `%s — ${SITE.name}`,
  },
  description:
    "Full Stack Developer com expertise em DevOps e Automação com IA. Construo aplicações escaláveis com React e Node.js, orquestro infraestrutura em produção e automatizo processos com IA e RAG.",
  keywords: [
    "Full Stack Developer",
    "Next.js",
    "Node.js",
    "TypeScript",
    "DevOps",
    "IA",
    "RAG",
  ],
  authors: [{ name: SITE.fullName }],
  openGraph: {
    title: `${SITE.name} — Full Stack Developer`,
    description:
      "Full Stack Developer com expertise em DevOps e Automação com IA.",
    url: SITE.url,
    siteName: SITE.name,
    locale: "pt_BR",
    type: "website",
  },
};

const themeInit = `(function(){try{var t=localStorage.getItem("theme");if(!t)t=matchMedia("(prefers-color-scheme: light)").matches?"light":"dark";document.documentElement.dataset.theme=t}catch(e){document.documentElement.dataset.theme="dark"}})()`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        <div className="scroll-progress" aria-hidden />
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
