import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { siteConfig } from "../../config/site";

interface ResumeLinkProps {
  variant?: "nav" | "primary";
}
export default function ResumeLink({
  variant = "primary",
}: ResumeLinkProps) {
  const baseClass =
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-md border px-4 py-2.5 text-sm font-bold tracking-wide transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 focus-visible:ring-offset-2";
  const variantClass =
    variant === "nav"
      ? "border-slate-800 bg-slate-900 text-white hover:border-teal-700 hover:bg-teal-800"
      : "border-slate-900 bg-slate-900 text-white shadow-sm hover:border-teal-800 hover:bg-teal-800";

  if (siteConfig.engineeringResumeUrl) {
    return (
      <a
        href={siteConfig.engineeringResumeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClass} ${variantClass}`}
        data-testid="engineering-resume-link"
      >
        Engineering résumé
        <FontAwesomeIcon icon={faArrowUpRightFromSquare} aria-hidden="true" />
      </a>
    );
  }

  return (
    <button
      type="button"
      disabled
      aria-label="Engineering résumé PDF is pending"
      title="Engineering résumé PDF will be linked here when supplied"
      className={`${baseClass} cursor-not-allowed border-slate-300 bg-slate-100 text-slate-500 shadow-none`}
      data-testid="engineering-resume-pending"
    >
      Engineering résumé
      <span className="text-[0.65rem] font-semibold uppercase tracking-widest">
        PDF pending
      </span>
    </button>
  );
}
