import { educationItems } from "../../data/EngineeringPortfolioData";
import SectionHeading from "../UI/SectionHeading";

export default function Education() {
  return (
    <section
      id="education"
      className="anchor-target bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24"
      aria-labelledby="education-heading"
    >
      <div className="mx-auto w-full max-w-[82rem]">
        <div id="education-heading">
          <SectionHeading eyebrow="Education" title="Education & Credentials" />
        </div>

        <div className="mt-12 border-t border-slate-300">
          <article className="grid gap-3 border-b border-slate-300 py-8 sm:grid-cols-[minmax(0,1fr)_minmax(16rem,0.55fr)] sm:items-start sm:gap-10 sm:py-10">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-teal-700">
                Professional credential
              </p>
              <h3 className="mt-3 text-2xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-3xl">
                Engineer-in-Training (EGBC)
              </h3>
            </div>
            <p className="text-base font-semibold leading-7 text-slate-700 sm:pt-8">
              Engineers and Geoscientists BC
            </p>
          </article>

          {educationItems.map((education) => (
            <article
              key={education.degree}
              className="border-b border-slate-300 py-8 sm:py-10"
            >
              <div className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:gap-10">
                <div>
                  <h3 className="text-2xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-3xl">
                    {education.degree}
                  </h3>
                  <p className="mt-3 text-base font-semibold leading-7 text-slate-700">
                    {education.institution}, {education.location}
                  </p>
                </div>
                <div className="sm:min-w-44 sm:text-right">
                  <p className="text-base font-bold leading-7 text-slate-900">
                    {education.date}
                  </p>
                  {education.distinction ? (
                    <p className="mt-1 text-base font-semibold leading-7 text-teal-800">
                      {education.distinction}
                    </p>
                  ) : null}
                </div>
              </div>

              {education.coursework.length > 0 ? (
                <div className="mt-7 max-w-5xl">
                  <h4 className="text-sm font-bold uppercase tracking-[0.14em] text-slate-700">
                    Relevant coursework
                  </h4>
                  <ul className="mt-4 grid gap-x-10 gap-y-2.5 sm:grid-cols-2">
                    {education.coursework.map((course) => (
                      <li
                        key={course}
                        className="flex items-start gap-3 text-base leading-7 text-slate-800"
                      >
                        <span
                          className="mt-[0.65rem] h-1.5 w-1.5 flex-none bg-teal-700"
                          aria-hidden="true"
                        />
                        <span>{course}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {"leadership" in education && education.leadership ? (
                <div className="mt-7 max-w-4xl border-l-2 border-teal-700 pl-5">
                  <h4 className="text-base font-bold text-slate-950">
                    {education.leadership.title}
                  </h4>
                  <p className="mt-1 text-base leading-7 text-slate-700">
                    {education.leadership.detail}
                  </p>
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
