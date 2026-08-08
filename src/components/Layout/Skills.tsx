import { skillGroups } from "../../data/EngineeringPortfolioData";

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-slate-900 px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-10 lg:py-24"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto w-full max-w-[82rem]">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">
          Skills & technologies
        </p>
        <h2
          id="skills-heading"
          className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl"
        >
          Technical Skills
        </h2>

        <div className="mt-10 grid border-y border-slate-700 sm:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map((group, index) => (
            <article
              key={group.title}
              data-testid="skill-category"
              className={`py-7 sm:p-7 ${
                index > 0 ? "border-t border-slate-700 sm:border-t-0" : ""
              } ${index % 2 === 1 ? "sm:border-l" : ""} ${
                index >= 2 ? "sm:border-t xl:border-t-0" : ""
              } ${index > 0 ? "xl:border-l" : ""}`}
            >
              <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-cyan-300">
                {group.title}
              </h3>
              <ul className="mt-5 grid gap-2.5">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    data-testid={`skill-name-${skill}`}
                    className="text-sm font-semibold leading-6 text-slate-200"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
