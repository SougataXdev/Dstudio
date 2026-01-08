import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";
import Loader from "@/components/Loader";
import SmoothScrollProvider from "@/components/animations/SmoothScrollProvider";

const graphik = localFont({
  src: [
    { path: "../fonts/GraphikThin.otf", weight: "100", style: "normal" },
    { path: "../fonts/GraphikExtralight.otf", weight: "200", style: "normal" },
    { path: "../fonts/GraphikRegular.otf", weight: "400", style: "normal" },
    { path: "../fonts/GraphikMedium.otf", weight: "500", style: "normal" },
    { path: "../fonts/GraphikSemibold.otf", weight: "600", style: "normal" },
    { path: "../fonts/GraphikBold.otf", weight: "700", style: "normal" },
    { path: "../fonts/GraphikBlack.otf", weight: "800", style: "normal" },
    { path: "../fonts/GraphikSuper.otf", weight: "900", style: "normal" },
  ],
  variable: "--font-graphik",
});

const ppFragment = localFont({
  src: [{ path: "../fonts/ppFragment.otf", weight: "400", style: "normal" }],
  variable: "--font-pp-fragment",
});

export const metadata: Metadata = {
  title: "Dstudio by sougataXdev",
  description: "Dstudio clone for practice",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${graphik.variable} ${ppFragment.variable} antialiased`}
      >
        <Loader />
        <SmoothScrollProvider>
        {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
