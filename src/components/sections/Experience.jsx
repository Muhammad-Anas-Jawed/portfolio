import { experience, internships, education } from "@/portfolio";
import { m } from "framer-motion";
import { LiquidHeading } from "@/components/ui/LiquidHeading";
const experiences = [
  ...experience.map((item) => ({ ...item, role: item.title })),
  ...internships.map((item) => ({
    ...item,
    role: item.title,
    period: "Remote internship",
  })),
  ...education.map((item) => ({
    role: item.degree,
    company: item.school,
    period: item.period,
    description: "Education",
  })),
];
export function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          <LiquidHeading as="span">Experience</LiquidHeading>
        </h2>
        <p className="text-muted-foreground max-w-2xl text-lg">
          My journey through software development, quality assurance and
          education.
        </p>
      </div>

      <div className="relative border-l border-border/50 ml-4 md:ml-6 space-y-12">
        {experiences.map((exp, index) => (
          <m.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative pl-8 md:pl-12"
          >
            {/* Timeline Dot */}
            <div className="absolute left-1.25 top-1.5 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-background" />

            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
              <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
              <span className="text-sm font-medium text-primary md:ml-4">
                {exp.period}
              </span>
            </div>
            <div className="text-lg font-medium text-muted-foreground mb-4">
              {exp.company}
            </div>
            {Array.isArray(exp.description) ? (
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground leading-relaxed marker:text-primary">
                {exp.description.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            ) : (
              <p className="text-muted-foreground leading-relaxed">
                {exp.description}
              </p>
            )}
          </m.div>
        ))}
      </div>
    </section>
  );
}
