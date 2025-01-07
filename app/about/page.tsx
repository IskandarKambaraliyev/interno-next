import useOgTitle from "@/hooks/useOgTitle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Interno",
  description: "Learn more about our company",
  openGraph: {
    images: [
      {
        url: useOgTitle("About Us"),
        width: 1200,
        height: 630,
        alt: "About Us - Interno",
      },
    ],
  },
};

export default async function AboutPage() {
  return (
    <div>
      <h1>About Page</h1>
    </div>
  );
}
