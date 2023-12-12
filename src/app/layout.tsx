import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Peace and tranquility",
  description:
    "An application to maximize the peace and tranquility in your life with a peaceful garden full of peaceful sounds.",
};

declare global {
  interface Window {
    datalayer: Record<string, any>;
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1011363414869039"
          crossOrigin="anonymous"
        ></script>
      </head>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-GJ11E50SLP"
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: ` window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());=
          gtag('config', 'G-GJ11E50SLP');
          `,
        }}
      ></script>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
