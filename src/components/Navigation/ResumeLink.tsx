import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { siteConfig } from "../../config/site";

export default function ResumeLink() {
  const baseClass =
    "inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-md border px-5 py-2.5 text-sm font-bold tracking-wide transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 focus-visible:ring-offset-2 lg:w-auto";

  return (
    <a
      href={siteConfig.resumeUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Open resume in a new tab"
      className={`${baseClass} border-teal-700 bg-teal-700 text-white shadow-sm hover:border-teal-800 hover:bg-teal-800 active:border-teal-900 active:bg-teal-900`}
      data-testid="resume-link"
    >
      <span>Resume</span>
      <FontAwesomeIcon
        icon={faArrowUpRightFromSquare}
        data-testid="resume-icon"
        aria-hidden="true"
      />
    </a>
  );
}
