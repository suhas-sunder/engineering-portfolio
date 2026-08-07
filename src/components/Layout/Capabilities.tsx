import { capabilityGroups } from "../../data/EngineeringPortfolioData";
import SectionHeading from "../UI/SectionHeading";

export default function Capabilities() {
  return (
    <section
      id="focus"
      className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24"
      aria-labelledby="focus-heading"
    >
      <div className="mx-auto w-full max-w-[82rem]">
        <div id="focus-heading">
          <SectionHeading
            number="01 / 06"
            eyebrow="Engineering focus"
            title="Capabilities grounded in project work"
            description="Areas of technical exposure and interest are presented at their actual level: academic engineering work, project leadership, and transferable professional delivery experience."
          />
        </div>

        <div className="mt-12 grid border-y border-slate-300 md:grid-cols-3">
          {capabilityGroups.map((group, index) => (
            <article
              key={group.title}
              className={`py-8 md:px-8 md:py-10 ${
                index > 0
                  ? "border-t border-slate-300 md:border-l md:border-t-0"
                  : "md:pl-0"
              } ${index === capabilityGroups.length - 1 ? "md:pr-0" : ""}`}
            >
              <p className="font-mono text-xs font-semibold tracking-[0.18em] text-teal-700">
                0{index + 1}
              </p>
              <h3 className="mt-4 text-xl font-semibold tracking-tight text-slate-950">
                {group.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {group.description}
              </p>
              <ul className="mt-6 grid gap-3 text-sm font-semibold text-slate-800">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="mt-[0.55rem] h-1.5 w-1.5 flex-none bg-teal-700"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="mt-6 max-w-4xl border-l-2 border-teal-700 pl-4 text-sm leading-6 text-slate-600">
          Capabilities reflect demonstrated academic project work and
          transferable professional experience. Individual projects provide
          specific technical context without defining a single career
          specialization.
        </p>
      </div>
    </section>
  );
}
