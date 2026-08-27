const siteUrl = "https://landing-sales-proabsen.vercel.app";

export default function sitemap() {
  return [
    {
      url: `${siteUrl}/`,
      priority: 1,
      changeFrequency: "monthly",
    },
  ];
}
