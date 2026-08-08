import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import {
  EngineeringProject,
  engineeringProjects,
} from "../../data/EngineeringPortfolioData";
import SectionHeading from "../UI/SectionHeading";

function ProjectEvidence({ project }: { project: EngineeringProject }) {
  if (!project.evidence?.images.length) return null;

  const galleryClass = {
    single: "max-w-[82rem]",
    stacked: "max-w-[96rem]",
    "wide-pair": "max-w-[96rem] 2xl:max-w-none 2xl:grid-cols-2",
  }[project.evidence.layout];

  return (
    <div
      className={`mt-10 grid min-w-0 grid-cols-1 gap-8 ${galleryClass}`}
      role="group"
      aria-label={`${project.title} technical evidence`}
      data-testid={`${project.id}-evidence`}
      data-evidence-layout={project.evidence.layout}
    >
      {project.evidence.images.map((evidence) => (
        <figure key={evidence.image} className="min-w-0">
          <div className="border border-slate-300 bg-white p-2 sm:p-3">
            <img
              src={evidence.image}
              alt={evidence.alt}
              className="h-auto w-full object-contain"
              loading="lazy"
              decoding="async"
              width={evidence.width}
              height={evidence.height}
            />
          </div>
          <figcaption className="border-x border-b border-slate-300 bg-white px-4 py-3 text-sm leading-6 text-slate-700">
            {evidence.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

function ProjectArticle({ project }: { project: EngineeringProject }) {
  const hasVisualEvidence = Boolean(project.evidence?.images.length);

  return (
    <article
      id={project.id}
      className="anchor-target border-t border-slate-300 py-12 sm:py-16 lg:py-20"
      aria-labelledby={`${project.id}-heading`}
    >
      <div className="min-w-0">
        <div className="max-w-[68rem]" data-testid="project-intro">
          <h3
            id={`${project.id}-heading`}
            className="text-3xl font-semibold leading-tight tracking-[-0.035em] text-slate-950 sm:text-4xl"
          >
            {project.title}
          </h3>
          <p className="mt-3 text-base font-bold leading-7 text-teal-800">
            {project.context} | {project.role}
          </p>

          <div className="mt-7 border-l-2 border-teal-700 pl-5">
            <h4 className="text-sm font-bold uppercase tracking-[0.14em] text-slate-700">
              Objective
            </h4>
            <p className="mt-2 text-lg font-medium leading-8 text-slate-900">
              {project.objective}
            </p>
          </div>

          <div className="mt-8">
            <h4 className="text-sm font-bold uppercase tracking-[0.14em] text-slate-700">
              Key contributions
            </h4>
            <ul className="mt-4 grid gap-3 text-base leading-7 text-slate-800">
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
          </div>
        </div>

        {hasVisualEvidence ? <ProjectEvidence project={project} /> : null}

        <div className="max-w-[82rem]" data-testid="project-support">
          <dl className="mt-10 grid gap-6 border-y border-slate-300 py-6 sm:grid-cols-2 sm:gap-8">
            <div>
              <dt className="text-sm font-bold uppercase tracking-[0.14em] text-slate-700">
                Tools & methods
              </dt>
              <dd className="mt-2 text-base font-medium leading-7 text-slate-800">
                {project.methods.join(" | ")}
              </dd>
            </div>
            <div className="sm:border-l sm:border-slate-300 sm:pl-8">
              <dt className="text-sm font-bold uppercase tracking-[0.14em] text-slate-700">
                Outcome
              </dt>
              <dd
                className={`mt-2 text-base leading-7 ${
                  project.id === "bev-simulation"
                    ? "font-bold text-teal-900"
                    : "font-medium text-slate-800"
                }`}
              >
                {project.outcome}
              </dd>
            </div>
          </dl>

          {project.links ? (
            <div className="mt-7 flex flex-wrap gap-3">
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
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="anchor-target bg-[#eef1f0] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24"
      aria-labelledby="projects-heading"
    >
      <div
        className="mx-auto w-full max-w-[100rem]"
        data-testid="projects-container"
      >
        <div id="projects-heading">
          <SectionHeading
            eyebrow="Projects"
            title="Engineering Projects"
            description="Selected academic and independent work in engineering analysis, systems modelling, and technical project delivery."
          />
        </div>

        <div className="mt-12">
          {engineeringProjects.map((project) => (
            <ProjectArticle key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
