
import "./globals.css";
import { profile } from "../portfolio";

const siteUrl = "https://anas-jawed-portfolio.vercel.app";

const title =
  "Anas Jawed | Full Stack Developer & Software Engineer";

const description =
  "Explore Muhammad Anas Jawed's portfolio: a Karachi-based software engineer and full stack developer working with React, JavaScript, web applications and software quality assurance.";

export const metadata = {
  metadataBase: new URL(siteUrl),

  title,
  description,

  applicationName: "Anas Jawed Portfolio",

  authors: [
    {
      name: profile.name,
      url: siteUrl,
    },
  ],

  creator: profile.name,

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "profile",
    locale: "en_US",
    url: siteUrl,
    siteName: "Anas Jawed Portfolio",
    title,
    description,
  },

  twitter: {
    card: "summary",
    title,
    description,
  },

  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
