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
