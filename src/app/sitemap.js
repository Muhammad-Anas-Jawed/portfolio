
const siteUrl =
  "https://anas-jawed-portfolio.vercel.app";

export default function sitemap() {
  return [
    {
      url: siteUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
