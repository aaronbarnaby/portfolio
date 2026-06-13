export const metadata = {
  title: "Showcase - Aaron Barnaby",
};

const projects = [
  {
    title: "Funky Pigeon — Next.js Website Rework",
    summary:
      "Led the modernisation of the Funky Pigeon ecommerce frontend by migrating the platform to Next.js. Improved page performance, delivery speeds, and the overall developer experience — resulting in a faster, more maintainable codebase and a better customer journey.",
    tags: ["Next.js", "React", "TypeScript", "Performance", "Ecommerce"],
  },
  {
    title: "Funky Pigeon — Personalisation Editor (Printess)",
    summary:
      "Designed and built a new product personalisation editor powered by Printess, replacing a legacy editing experience. Delivered a modern, intuitive UI that significantly improved the customer personalisation journey and reduced friction in the order flow.",
    tags: ["Printess", "React", "TypeScript", "UX", "Personalization", "Integration"],
  },
  {
    title: "Funky Pigeon — Basket Rewrite",
    summary:
      "Architected and delivered a full rewrite of the basket and checkout experience. Focused on reliability, state consistency, and a cleaner user journey — improving conversion and reducing edge-case bugs across the checkout flow.",
    tags: ["Checkout", "Frontend Architecture", "TypeScript", "State Management", "Ecommerce"],
  },
  {
    title: "Funky Pigeon — Internal Admin Tool",
    summary:
      "Built the internal backend administration tool from the ground up off personal initiative. What started as a self-directed project became the core operational system the business relies on today, streamlining workflows across multiple teams.",
    tags: ["Internal Tools", "React", "Admin UX", "Operational Efficiency"],
  },
  {
    title: "AWS & Internal Systems — Production & Data Flow",
    summary:
      "Designed and maintained cloud infrastructure and integration systems on AWS to support production processes and internal data pipelines. Focused on reliability, scalability, and automating the flow of data across business systems.",
    tags: ["AWS", "Systems Integration", "Data Flow", "Automation", "Platform Engineering"],
  },
  {
    title: ".NET API Modules — Microservice Architecture",
    summary:
      "Developed modular .NET API services following microservice patterns, providing a scalable and maintainable backend foundation. Focused on clean architecture, separation of concerns, and consistent API design across services.",
    tags: [".NET", "C#", "APIs", "Microservices", "Backend Architecture"],
  },
  {
    title: "CI/CD Systems — WHSmith & Funky Pigeon",
    summary:
      "Implemented and maintained CI/CD pipelines for both WHSmith and Funky Pigeon codebases, improving build reliability, deployment speed, and overall engineering confidence. Enabled teams to ship faster with greater consistency.",
    tags: ["CI/CD", "GitHub Actions", "DevOps", "Automation", "Release Engineering"],
  },
];

export default function Page() {
  return (
    <div className="py-20 relative max-w-4xl mx-auto text-gray-100 2xl:max-w-5xl 3xl:max-w-7xl">
      <section className="mx-5">
        <h1 className="text-4xl md:text-5xl font-bold text-neutral-200">Showcase</h1>
        <p className="mt-4 text-gray-400 max-w-2xl">
          A selection of core systems and projects I&apos;ve been part of — covering frontend, backend, infrastructure,
          and internal tooling.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col gap-3 p-5 border border-gray-300 rounded-sm bg-gray-50 dark:bg-[var(--color-dark-primary)] dark:border-neutral-700 hover:dark:bg-[var(--color-dark-secondary)] hover:bg-white transition-colors"
            >
              <h2 className="font-bold text-base text-neutral-900 dark:text-neutral-200">{project.title}</h2>
              <p className="text-sm text-gray-500 dark:text-neutral-400 leading-relaxed">{project.summary}</p>
              <div className="flex flex-wrap gap-1 mt-auto pt-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={`${tag}-${tagIndex}`}
                    className="px-2 py-1 text-xs text-gray-500 bg-gray-100 rounded dark:bg-neutral-800 dark:text-neutral-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
