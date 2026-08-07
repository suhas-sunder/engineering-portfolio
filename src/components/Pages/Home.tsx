import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { HashLink } from "react-router-hash-link";
import ProfilePic from "../../assets/profile-pic.png";
import { siteConfig } from "../../config/site";
import handleScrollOffset from "../utility/handleScrollOffset";
import ResumeLink from "../Navigation/ResumeLink";
import Capabilities from "../Layout/Capabilities";
import Projects from "../Layout/Projects";
import Skills from "../Layout/Skills";
import Education from "../Layout/Education";
import ProfessionalExperience from "../Layout/ProfessionalExperience";
import Contact from "../Form/Contact";

function Home() {
  return (
    <>
      <header
        id="about"
        className="relative overflow-hidden border-b border-slate-200 bg-[#f7f6f2] px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20"
      >
        <div
          className="pointer-events-none absolute inset-y-0 right-[8%] hidden w-px bg-slate-200 xl:block"
          aria-hidden="true"
        />

        <div className="mx-auto grid w-full max-w-[82rem] items-center gap-10 lg:grid-cols-[minmax(16rem,0.72fr)_minmax(0,1.28fr)] lg:gap-16 xl:gap-20">
          <figure className="order-2 mx-auto w-full max-w-[27rem] lg:order-1 lg:mx-0">
            <div className="relative overflow-hidden border border-slate-300 bg-[#e7ecec]">
              <div
                className="absolute inset-x-0 top-0 h-2 bg-teal-700"
                aria-hidden="true"
              />
              <img
                alt="Professional headshot of Suhas Sunder"
                src={ProfilePic}
                className="aspect-[4/5] w-full object-contain object-bottom pt-7"
                width={432}
                height={540}
              />
            </div>
            <figcaption className="flex items-start justify-between gap-4 border-x border-b border-slate-300 bg-white px-4 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
              <span>Electrical & computer engineering</span>
              <span className="whitespace-nowrap text-teal-700">EIT · BC</span>
            </figcaption>
          </figure>

          <div className="order-1 min-w-0 lg:order-2">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex min-h-8 items-center border border-teal-700 bg-teal-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-teal-800">
                Engineer-in-Training
              </span>
              <span className="text-sm font-semibold text-slate-600">
                Engineers and Geoscientists BC
              </span>
            </div>

            <h1 className="mt-7 text-[clamp(2.7rem,7.5vw,5.8rem)] font-semibold leading-[0.92] tracking-[-0.055em] text-slate-950">
              Suhas Sunder
            </h1>

            <p className="mt-6 max-w-4xl text-[clamp(1.25rem,2.2vw,2rem)] font-medium leading-tight tracking-[-0.025em] text-slate-700">
              Electrical & Computer Engineering
            </p>

            <p className="mt-6 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              MEng graduate and registered EIT bringing approximately three
              years of professional software development and technical
              project-delivery experience. Graduate studies renewed a focused
              commitment to electrical engineering and a long-term path toward
              P.Eng. licensure.
            </p>

            <p className="mt-5 flex items-start gap-3 text-sm font-semibold text-slate-700 sm:text-base">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="mt-1 text-teal-700"
                aria-hidden="true"
              />
              <span>
                {siteConfig.location}
                <span className="mx-2 text-slate-400" aria-hidden="true">
                  →
                </span>
                {siteConfig.relocation}
              </span>
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <ResumeLink />
              <HashLink
                to="/#contact"
                scroll={(element) => handleScrollOffset(element)}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-teal-700 bg-white px-4 py-2.5 text-sm font-bold text-teal-800 transition hover:bg-teal-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 focus-visible:ring-offset-2"
              >
                Contact
                <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" />
              </HashLink>
              <a
                href={siteConfig.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-3 py-2.5 text-sm font-bold text-slate-700 underline decoration-slate-300 underline-offset-4 transition hover:text-teal-800 hover:decoration-teal-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700"
              >
                <FontAwesomeIcon icon={faLinkedin} aria-hidden="true" />
                LinkedIn
              </a>
            </div>

            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-1 text-sm font-semibold text-slate-600">
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex min-h-10 items-center underline decoration-slate-300 underline-offset-4 transition hover:text-teal-800 hover:decoration-teal-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700"
              >
                {siteConfig.email}
              </a>
              <a
                href={siteConfig.phoneHref}
                className="inline-flex min-h-10 items-center underline decoration-slate-300 underline-offset-4 transition hover:text-teal-800 hover:decoration-teal-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700"
              >
                {siteConfig.phoneDisplay}
              </a>
              <a
                href={siteConfig.url}
                className="inline-flex min-h-10 items-center underline decoration-slate-300 underline-offset-4 transition hover:text-teal-800 hover:decoration-teal-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700"
              >
                suhassunder.ca
              </a>
            </div>

            <dl className="mt-10 grid border-y border-slate-300 sm:grid-cols-3">
              <div className="py-4 sm:pr-5">
                <dt className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-slate-500">
                  Registration
                </dt>
                <dd className="mt-2 text-sm font-semibold leading-6 text-slate-900">
                  EIT · Engineers and Geoscientists BC
                </dd>
              </div>
              <div className="border-t border-slate-300 py-4 sm:border-l sm:border-t-0 sm:px-5">
                <dt className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-slate-500">
                  Graduate degree
                </dt>
                <dd className="mt-2 text-sm font-semibold leading-6 text-slate-900">
                  MEng · Electrical & Computer Engineering
                </dd>
              </div>
              <div className="border-t border-slate-300 py-4 sm:border-l sm:border-t-0 sm:pl-5">
                <dt className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-slate-500">
                  Career direction
                </dt>
                <dd className="mt-2 text-sm font-semibold leading-6 text-slate-900">
                  Long-term engineering practice and P.Eng. licensure
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </header>

      <main id="main-content">
        <Capabilities />
        <Projects />
        <Skills />
        <Education />
        <ProfessionalExperience />
        <Contact />
      </main>
    </>
  );
}

export default Home;
