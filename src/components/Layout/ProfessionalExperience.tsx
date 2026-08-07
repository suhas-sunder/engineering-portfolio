import { experienceItems } from "../../data/EngineeringPortfolioData";
import SectionHeading from "../UI/SectionHeading";

export default function ProfessionalExperience() {
  return (
    <section
      id="experience"
      className="bg-[#eef1f0] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto w-full max-w-[82rem]">
        <div id="experience-heading">
          <SectionHeading
            number="05 / 06"
            eyebrow="Professional experience"
            title="Technical delivery in real organizations"
            description="Approximately three years of software and consulting work demonstrate requirements analysis, testing, troubleshooting, documentation, and stakeholder coordination. The roles are presented accurately—not recast as electrical engineering employment."
          />
        </div>

        <ol className="mt-12 border-t border-slate-300">
          {experienceItems.map((experience, index) => (
            <li
              key={experience.company}
              className="grid gap-7 border-b border-slate-300 py-10 lg:grid-cols-[minmax(15rem,0.65fr)_minmax(0,1.35fr)] lg:gap-14 lg:py-12"
            >
              <div>
                <p className="font-mono text-xs font-semibold tracking-[0.16em] text-teal-700">
                  EXPERIENCE 0{index + 1}
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
                  {experience.company}
                </h3>
                {experience.legalName ? (
                  <p className="mt-1 text-sm text-slate-500">
                    {experience.legalName}
                  </p>
                ) : null}
                <p className="mt-3 text-sm font-semibold text-slate-600">
                  {experience.location}
                </p>

                <div className="mt-6 grid gap-5">
                  {experience.roles.map((role) => (
                    <div key={`${role.title}-${role.dates}`}>
                      <p className="text-sm font-bold leading-6 text-slate-900">
                        {role.title}
                      </p>
                      <p className="mt-1 text-sm font-semibold leading-6 text-teal-800">
                        {role.dates}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <ul className="grid content-start gap-4 text-base leading-7 text-slate-700">
                {experience.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3">
                    <span
                      className="mt-[0.7rem] h-1.5 w-1.5 flex-none bg-teal-700"
                      aria-hidden="true"
                    />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        <div className="mt-10 grid border-y border-slate-300 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["3-member team", "Undergraduate capstone team lead"],
            ["7-member team", "MEng project manager / team lead"],
            ["2,300+ students", "Orientation onboarding supported"],
            ["Cross-functional", "Demos, requirements, and stakeholder alignment"],
          ].map(([metric, detail], index) => (
            <div
              key={metric}
              className={`py-6 sm:p-6 ${
                index > 0
                  ? "border-t border-slate-300 sm:[&:nth-child(even)]:border-l lg:border-l lg:border-t-0"
                  : ""
              } ${index >= 2 ? "sm:border-t lg:border-t-0" : ""}`}
            >
              <p className="text-lg font-semibold text-slate-950">{metric}</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">{detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
