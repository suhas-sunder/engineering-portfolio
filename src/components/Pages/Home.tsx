import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiagramProject,
  faEnvelope,
  faGraduationCap,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import ProfilePic from "../../assets/profile-pic.png";
import { siteConfig } from "../../config/site";
import { handleSectionLinkClick } from "../utility/handleScrollOffset";
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
        className="anchor-target relative overflow-hidden border-b border-slate-200 bg-[#f7f6f2] px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20"
      >
        <div
          className="pointer-events-none absolute inset-y-0 right-[8%] hidden w-px bg-slate-200 xl:block"
          aria-hidden="true"
        />

        <div className="mx-auto grid w-full max-w-[82rem] items-center gap-10 lg:grid-cols-[minmax(16rem,0.72fr)_minmax(0,1.28fr)] lg:gap-16 xl:gap-20">
          <div className="order-2 mx-auto w-full max-w-[27rem] lg:order-1 lg:mx-0">
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
          </div>

          <div className="order-1 min-w-0 lg:order-2">
            <h1 className="text-[clamp(2.7rem,7.5vw,5.8rem)] font-semibold leading-[0.92] tracking-[-0.055em] text-slate-950">
              Suhas Sunder
            </h1>

            <p className="mt-6 max-w-4xl text-[clamp(1.25rem,2.2vw,2rem)] font-medium leading-tight tracking-[-0.025em] text-slate-700">
              ENGINEER-IN-TRAINING (EGBC)
            </p>

            <p className="mt-4 max-w-4xl text-base font-semibold leading-7 text-teal-800 sm:text-lg">
              Engineering Analysis | Systems Thinking | Technical Project
              Delivery
            </p>

            <p className="mt-6 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Completed an MEng in Electrical and Computer Engineering and a
              BEng in Electrical Engineering and Management. Brings
              approximately three years of professional software-development and
              technical project-delivery experience, with strengths in
              requirements analysis, testing, troubleshooting, documentation,
              and cross-functional collaboration. Engineering project experience
              includes modelling, optimization, embedded systems, technical
              analysis, and project planning. Pursuing a long-term engineering
              career and P.Eng. licensure.
            </p>

            <div className="mt-5 text-slate-700">
              <p className="flex items-start gap-3 text-base font-semibold">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="mt-1 text-teal-700"
                  aria-hidden="true"
                />
                <span>{siteConfig.location}</span>
              </p>
              <p className="mt-3 max-w-4xl text-base font-semibold leading-7">
                {siteConfig.availability}
              </p>
              <p className="mt-2 text-base font-medium leading-7 text-slate-700">
                {siteConfig.driverLicence}
              </p>
            </div>

            <nav
              aria-label="Portfolio shortcuts"
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href={siteConfig.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open LinkedIn profile"
                title="LinkedIn"
                data-testid="hero-quick-link"
                className="inline-flex h-12 w-12 items-center justify-center rounded-md border border-slate-300 bg-white text-lg text-slate-700 shadow-sm transition hover:border-teal-700 hover:bg-teal-50 hover:text-teal-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 focus-visible:ring-offset-2"
              >
                <FontAwesomeIcon icon={faLinkedin} aria-hidden="true" />
              </a>
              <a
                href="/#projects"
                onClick={(event) => handleSectionLinkClick(event, "/#projects")}
                aria-label="View engineering projects"
                title="Projects"
                data-testid="hero-quick-link"
                className="inline-flex h-12 w-12 items-center justify-center rounded-md border border-slate-300 bg-white text-lg text-slate-700 shadow-sm transition hover:border-teal-700 hover:bg-teal-50 hover:text-teal-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 focus-visible:ring-offset-2"
              >
                <FontAwesomeIcon icon={faDiagramProject} aria-hidden="true" />
              </a>
              <a
                href="/#education"
                onClick={(event) =>
                  handleSectionLinkClick(event, "/#education")
                }
                aria-label="View education and credentials"
                title="Education & credentials"
                data-testid="hero-quick-link"
                className="inline-flex h-12 w-12 items-center justify-center rounded-md border border-slate-300 bg-white text-lg text-slate-700 shadow-sm transition hover:border-teal-700 hover:bg-teal-50 hover:text-teal-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 focus-visible:ring-offset-2"
              >
                <FontAwesomeIcon icon={faGraduationCap} aria-hidden="true" />
              </a>
              <a
                href="/#contact"
                onClick={(event) => handleSectionLinkClick(event, "/#contact")}
                aria-label="Go to contact section"
                title="Contact"
                data-testid="hero-quick-link"
                className="inline-flex h-12 w-12 items-center justify-center rounded-md border border-slate-300 bg-white text-lg text-slate-700 shadow-sm transition hover:border-teal-700 hover:bg-teal-50 hover:text-teal-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 focus-visible:ring-offset-2"
              >
                <FontAwesomeIcon icon={faEnvelope} aria-hidden="true" />
              </a>
            </nav>
          </div>
        </div>
      </header>

      <main id="main-content">
        <Skills />
        <Projects />
        <Education />
        <ProfessionalExperience />
        <Contact />
      </main>
    </>
  );
}

export default Home;
