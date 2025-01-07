import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Lines from "@/components/Lines";
import localFont from "next/font/local";
import useOgTitle from "@/hooks/useOgTitle";

const dmFont = localFont({
  src: [
    {
      path: "./fonts/DM/DMSerifDisplay-Regular.ttf",
      style: "normal",
      weight: "400",
    },
    {
      path: "./fonts/DM/DMSerifDisplay-Italic.ttf",
      style: "italic",
      weight: "400",
    },
  ],
  variable: "--font-dm",
  weight: "400",
});

const jostFont = localFont({
  src: [
    {
      path: "./fonts/Jost/Jost-Regular.ttf",
      style: "normal",
      weight: "400",
    },
    {
      path: "./fonts/Jost/Jost-Medium.ttf",
      style: "normal",
      weight: "500",
    },
    {
      path: "./fonts/Jost/Jost-SemiBold.ttf",
      style: "normal",
      weight: "600",
    },
    {
      path: "./fonts/Jost/Jost-Bold.ttf",
      style: "normal",
      weight: "700",
    },
  ],
  variable: "--font-jost",
  weight: "400 500 600 700",
});

export const metadata: Metadata = {
  title: "Interno",
  description: "Design your house with us",
  openGraph: {
    images: [
      {
        url: useOgTitle("Main", false),
        width: 1200,
        height: 630,
        alt: "Interno",
      },
    ],
  },
  metadataBase: new URL("https://interno.stiv.uz"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [
      {
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
        rel: "icon",
      },
      {
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        rel: "icon",
      },
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
        rel: "apple-touch-icon",
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
        rel: "icon",
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
        rel: "icon",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmFont.variable} ${jostFont.variable}`}>
        <Lines />
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
