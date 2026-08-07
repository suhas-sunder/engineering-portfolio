import { educationItems } from "../../data/EngineeringPortfolioData";
import SectionHeading from "../UI/SectionHeading";

export default function Education() {
  return (
    <section
      id="education"
      className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24"
      aria-labelledby="education-heading"
    >
      <div className="mx-auto w-full max-w-[82rem]">
        <div id="education-heading">
          <SectionHeading
            number="04 / 06"
            eyebrow="Education & credentials"
            title="Engineering education and EIT registration"
            description="Graduate study, electrical engineering foundations, and professional registration form the core of this transition into long-term engineering practice."
          />
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(17rem,0.68fr)_minmax(0,1.32fr)] lg:gap-14 xl:gap-20">
          <aside className="border-t-4 border-teal-700 bg-[#f3f5f4] p-6 sm:p-8 lg:self-start">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-700">
              Professional credential
            </p>
            <h3 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950">
              Engineer-in-Training
            </h3>
            <p className="mt-3 text-base font-semibold leading-7 text-slate-700">
              Engineers and Geoscientists BC
            </p>
            <p className="mt-7 border-t border-slate-300 pt-5 text-sm leading-6 text-slate-600">
              Registered as an EIT. P.Eng. is a future licensure goal and is not
              presented as a current designation.
            </p>
          </aside>

          <ol className="border-t border-slate-300">
            {educationItems.map((education, index) => (
              <li
                key={education.degree}
                className="border-b border-slate-300 py-8 sm:py-10"
              >
                <div className="grid gap-5 sm:grid-cols-[minmax(0,1fr)_auto] sm:gap-8">
                  <div>
                    <p className="font-mono text-xs font-semibold tracking-[0.16em] text-teal-700">
                      DEGREE 0{index + 1}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-3xl">
                      {education.degree}
                    </h3>
                    <p className="mt-3 font-semibold text-slate-700">
                      {education.institution} · {education.location}
                    </p>
                  </div>
                  <div className="sm:text-right">
                    <p className="text-sm font-bold text-slate-900">
                      {education.date}
                    </p>
                    {education.distinction ? (
                      <p className="mt-2 text-sm font-semibold text-teal-800">
                        {education.distinction}
                      </p>
                    ) : null}
                  </div>
                </div>

                {education.coursework.length > 0 ? (
                  <div className="mt-7">
                    <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                      Relevant coursework
                    </h4>
                    <ul className="mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                      {education.coursework.map((course) => (
                        <li
                          key={course}
                          className="flex items-start gap-3 text-sm leading-6 text-slate-700"
                        >
                          <span
                            className="mt-[0.55rem] h-1.5 w-1.5 flex-none bg-teal-700"
                            aria-hidden="true"
                          />
                          <span>{course}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                {"leadership" in education && education.leadership ? (
                  <div className="mt-7 border-l-2 border-teal-700 pl-5">
                    <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                      Leadership
                    </h4>
                    <p className="mt-2 text-sm font-semibold text-slate-900">
                      {education.leadership.title}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {education.leadership.detail}
                    </p>
                  </div>
                ) : null}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
