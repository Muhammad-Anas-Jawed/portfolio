import "./globals.css";
import { profile } from "../portfolio";

export const metadata = {
  title: `${profile.name} | Software Engineer`,
  description:
    "Muhammad Anas Jawed — Software Engineer, Full Stack Developer and SQA Engineer in Karachi, Pakistan. Explore projects, skills and experience.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
