import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import {
  EngineeringProject,
  engineeringProjects,
} from "../../data/EngineeringPortfolioData";
import SectionHeading from "../UI/SectionHeading";

function ProjectEvidence({ project }: { project: EngineeringProject }) {
  if (!project.evidence) return null;

  return (
    <figure className="min-w-0">
      {project.evidence.image ? (
        <div className="overflow-hidden border border-slate-300 bg-slate-100">
          <img
            src={project.evidence.image}
            alt={project.evidence.alt || ""}
            className="aspect-[16/10] h-auto w-full object-cover"
            loading="lazy"
          />
        </div>
      ) : (
        <div className="flex min-h-[17rem] flex-col justify-between border border-dashed border-slate-400 bg-slate-50 p-6 sm:min-h-[20rem] sm:p-8">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-teal-700">
              Evidence placeholder
            </p>
            <p className="mt-5 max-w-md text-lg font-semibold leading-7 text-slate-800">
              {project.evidence.placeholder}
            </p>
          </div>
          <p className="mt-8 text-sm leading-6 text-slate-500">
            No illustrative or fabricated project evidence is shown.
          </p>
        </div>
      )}

      <figcaption className="border-x border-b border-slate-300 bg-white px-4 py-3 text-xs leading-5 text-slate-500">
        {project.evidence.caption}
      </figcaption>
    </figure>
  );
}
function ProjectArticle({
  project,
  index,
}: {
  project: EngineeringProject;
  index: number;
}) {
  return (
    <li>
      <article className="border-t border-slate-300 py-12 sm:py-16 lg:py-20">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(20rem,0.85fr)] lg:gap-14 xl:gap-20">
          <div className={index % 2 === 1 ? "lg:order-2" : ""}>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <span className="font-mono text-sm font-bold tracking-[0.18em] text-teal-700">
                PROJECT {project.number}
              </span>
              <span className="h-px w-10 bg-slate-300" aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                {project.context}
              </span>
            </div>

            <h3 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.035em] text-slate-950 sm:text-4xl">
              {project.title}
            </h3>
            <p className="mt-3 text-sm font-bold uppercase tracking-[0.12em] text-teal-800">
              {project.role}
            </p>

            <div className="mt-8 border-l-2 border-teal-700 pl-5">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                Engineering objective
              </p>
              <p className="mt-2 text-lg font-medium leading-8 text-slate-800">
                {project.objective}
              </p>
            </div>

            <ul className="mt-8 grid gap-4 text-base leading-7 text-slate-700">
              {project.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3">
                  <span
                    className="mt-[0.7rem] h-1.5 w-1.5 flex-none bg-teal-700"
                    aria-hidden="true"
                  />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            <dl className="mt-9 grid border-y border-slate-300 sm:grid-cols-3">
              <div className="py-4 sm:pr-5">
                <dt className="text-[0.68rem] font-bold uppercase tracking-[0.15em] text-slate-500">
                  Technical system
                </dt>
                <dd className="mt-2 text-sm leading-6 text-slate-700">
                  {project.system}
                </dd>
              </div>
              <div className="border-t border-slate-300 py-4 sm:border-l sm:border-t-0 sm:px-5">
                <dt className="text-[0.68rem] font-bold uppercase tracking-[0.15em] text-slate-500">
                  Constraints
                </dt>
                <dd className="mt-2 text-sm leading-6 text-slate-700">
                  {project.constraints}
                </dd>
              </div>
              <div className="border-t border-slate-300 py-4 sm:border-l sm:border-t-0 sm:pl-5">
                <dt className="text-[0.68rem] font-bold uppercase tracking-[0.15em] text-slate-500">
                  Outcome
                </dt>
                <dd className="mt-2 text-sm leading-6 text-slate-700">
                  {project.outcome}
                </dd>
              </div>
            </dl>

            <div className="mt-7">
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.15em] text-slate-500">
                Methods & tools
              </p>
              <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
                {project.methods.map((method) => (
                  <li
                    key={method}
                    className="border-b border-teal-200 pb-1 text-sm font-semibold text-slate-700"
                  >
                    {method}
                  </li>
                ))}
              </ul>
            </div>

            {project.links ? (
              <div className="mt-8 flex flex-wrap gap-3">
                {project.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center gap-2 rounded-md border border-teal-700 px-4 py-2.5 text-sm font-bold text-teal-800 transition hover:bg-teal-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 focus-visible:ring-offset-2"
                  >
                    {link.label}
                    <FontAwesomeIcon
                      icon={faArrowUpRightFromSquare}
                      aria-hidden="true"
                    />
                  </a>
                ))}
              </div>
            ) : null}
          </div>

          <div className={index % 2 === 1 ? "lg:order-1" : ""}>
            <ProjectEvidence project={project} />
          </div>
        </div>
      </article>
    </li>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#eef1f0] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto w-full max-w-[82rem]">
        <div id="projects-heading">
          <SectionHeading
            number="02 / 06"
            eyebrow="Engineering projects"
            title="Technical work, methods, and evidence"
            description="Academic and independent projects are documented by objective, system, constraints, responsibility, and outcome—without presenting them as professional engineering practice."
          />
        </div>

        <ol className="mt-12">
          {engineeringProjects.map((project, index) => (
            <ProjectArticle
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </ol>
      </div>
    </section>
  );
}
