import { siteConfig } from "../../config/site";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-300 bg-[#f7f6f2] px-5 py-8 sm:px-8 lg:px-10">
      <div className="mx-auto flex w-full max-w-[82rem] flex-col gap-5 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
        <p>
          &copy; {currentYear} {siteConfig.name}.
        </p>

        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-3">
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex min-h-11 items-center font-semibold underline decoration-slate-300 underline-offset-4 hover:text-teal-800 hover:decoration-teal-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700"
              >
                Email
              </a>
            </li>
            <li>
              <a
                href={siteConfig.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center font-semibold underline decoration-slate-300 underline-offset-4 hover:text-teal-800 hover:decoration-teal-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/suhas-sunder/engineering-portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center font-semibold underline decoration-slate-300 underline-offset-4 hover:text-teal-800 hover:decoration-teal-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700"
              >
                View source
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
