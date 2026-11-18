
import Portfolio from "../Portfolio.jsx";
import { profile } from "../portfolio";

const siteUrl =
  "https://anas-jawed-portfolio.vercel.app";

export default function HomePage() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",

    name: profile.name,
    alternateName: profile.shortName,

    url: siteUrl,

    jobTitle:
      "Software Engineer and Full Stack Developer",

    description:
      "Karachi-based software engineer working on React web applications, full stack development and software quality assurance.",

    homeLocation: {
      "@type": "Place",
      name: profile.location,
    },

    knowsAbout: [
      "Full Stack Development",
      "Software Engineering",
      "React",
      "JavaScript",
      "TypeScript",
      "MongoDB",
      "REST APIs",
      "Software Quality Assurance",
    ],

    sameAs: [
      profile.linkedin,
      profile.github.split("?")[0],
    ],

    mainEntityOfPage: siteUrl,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(person).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      <Portfolio />
    </>
  );
}
