
const siteUrl =
  "https://anas-jawed-portfolio.vercel.app";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],

    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
