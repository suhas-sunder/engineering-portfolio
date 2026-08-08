import { siteConfig } from "../../config/site";

export default function ResumeLink() {
  const baseClass =
    "inline-flex min-h-11 items-center justify-center rounded-md border px-5 py-2.5 text-sm font-bold tracking-wide transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 focus-visible:ring-offset-2";

  if (siteConfig.resumeUrl) {
    return (
      <a
        href={siteConfig.resumeUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open resume in a new tab"
        className={`${baseClass} border-slate-800 bg-slate-900 text-white hover:border-teal-700 hover:bg-teal-800`}
        data-testid="resume-link"
      >
        Resume
      </a>
    );
  }

  return (
    <button
      type="button"
      disabled
      aria-label="Resume link requires configuration"
      title="Add the Google Drive resume URL in the site configuration"
      className={`${baseClass} cursor-not-allowed border-slate-300 bg-slate-100 text-slate-500 shadow-none`}
      data-testid="resume-unconfigured"
    >
      Resume
    </button>
  );
}
