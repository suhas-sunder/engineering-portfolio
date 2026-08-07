import { skillGroups } from "../../data/EngineeringPortfolioData";
import SectionHeading from "../UI/SectionHeading";

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-slate-900 px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-10 lg:py-24"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto w-full max-w-[82rem]">
        <div id="skills-heading">
          <SectionHeading
            number="03 / 06"
            eyebrow="Skills & tools"
            title="Engineering capability, clearly categorized"
            description="Programming remains visible as a useful systems and automation differentiator while engineering tools, analysis, and delivery methods lead the presentation."
            inverse
          />
        </div>

        <div className="mt-12 grid border-y border-slate-700 md:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map((group, index) => (
            <article
              key={group.title}
              data-testid="skill-category"
              className={`py-8 md:p-8 xl:min-h-[25rem] ${
                index > 0
                  ? "border-t border-slate-700 md:border-t-0 md:[&:nth-child(odd)]:border-l xl:border-l"
                  : ""
              } ${index >= 2 ? "md:border-t xl:border-t-0" : ""}`}
            >
              <p className="font-mono text-xs font-semibold tracking-[0.18em] text-cyan-300">
                0{index + 1}
              </p>
              <h3 className="mt-4 text-xl font-semibold tracking-tight text-white">
                {group.title}
              </h3>
              {group.note ? (
                <p className="mt-3 text-xs leading-5 text-slate-400">
                  {group.note}
                </p>
              ) : null}
              <ul className="mt-6 grid gap-3">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    data-testid={`skill-name-${skill}`}
                    className="flex items-start gap-3 text-sm font-semibold leading-6 text-slate-200"
                  >
                    <span
                      className="mt-[0.55rem] h-1.5 w-1.5 flex-none bg-cyan-300"
                      aria-hidden="true"
                    />
                    <span>{skill}</span>
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
