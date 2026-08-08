import { skillGroups } from "../../data/EngineeringPortfolioData";
import SectionHeading from "../UI/SectionHeading";

export default function Skills() {
  return (
    <section
      id="skills"
      className="anchor-target bg-slate-900 px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-10 lg:py-24"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto w-full max-w-[96rem]">
        <div id="skills-heading">
          <SectionHeading
            eyebrow="Skills & technologies"
            title="Technical Skills"
            inverse
          />
        </div>

        <div
          data-testid="skills-grid"
          className="mt-10 grid border-y border-slate-700 sm:grid-cols-2 xl:grid-cols-4"
        >
          {skillGroups.map((group, index) => (
            <article
              key={group.title}
              data-testid="skill-category"
              className={`py-7 sm:p-7 xl:border-t-0 xl:px-8 xl:py-8 ${
                index > 0 ? "border-t border-slate-700 sm:border-t-0" : ""
              } ${index % 2 === 1 ? "sm:border-l" : ""} ${
                index >= 2 ? "sm:border-t" : ""
              } ${index > 0 ? "xl:border-l" : "xl:border-l-0"}`}
            >
              <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-cyan-300">
                {group.title}
              </h3>
              <ul className="mt-5 grid gap-2.5">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    data-testid={`skill-name-${skill}`}
                    className="text-base font-semibold leading-7 text-slate-100"
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
