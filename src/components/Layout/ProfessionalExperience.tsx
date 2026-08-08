import { experienceItems } from "../../data/EngineeringPortfolioData";
import SectionHeading from "../UI/SectionHeading";

export default function ProfessionalExperience() {
  return (
    <section
      id="experience"
      className="anchor-target bg-[#eef1f0] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto w-full max-w-[82rem]">
        <div id="experience-heading">
          <SectionHeading
            eyebrow="Experience"
            title="Professional Experience"
            description="More than three years of professional software-development and technical project-delivery experience."
          />
        </div>

        <div className="mt-12 border-t border-slate-300">
          {experienceItems.map((experience) => (
            <article
              id={experience.id}
              key={experience.company}
              className="anchor-target grid gap-7 border-b border-slate-300 py-10 lg:grid-cols-[minmax(16rem,0.65fr)_minmax(0,1.35fr)] lg:gap-14 lg:py-12"
              aria-labelledby={`${experience.id}-heading`}
            >
              <div>
                <h3
                  id={`${experience.id}-heading`}
                  className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl"
                >
                  {experience.company}
                </h3>
                {experience.legalName ? (
                  <p className="mt-1 text-base leading-7 text-slate-700">
                    {experience.legalName}
                  </p>
                ) : null}
                <p className="mt-2 text-base font-semibold leading-7 text-slate-700">
                  {experience.location}
                </p>

                <div className="mt-6 grid gap-5">
                  {experience.roles.map((role) => (
                    <div key={`${role.title}-${role.dates}`}>
                      <p className="text-base font-bold leading-7 text-slate-950">
                        {role.title}
                      </p>
                      <p className="mt-1 text-base font-semibold leading-7 text-teal-800">
                        {role.dates}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <ul className="grid content-start gap-3 text-base leading-7 text-slate-800">
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
