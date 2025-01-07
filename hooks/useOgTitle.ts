export default function useOgTitle(title: string, hasTitle: boolean = true) {
  const origin = process.env.ORIGIN_URL;

  if (origin) {
    return `${origin}/api/og/${encodeURIComponent(title)}${
      hasTitle ? "" : "?no-title"
    }`;
  } else {
    return "/og-image.png";
  }
}
