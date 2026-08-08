import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowRight,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { handleSectionLinkClick } from "../utility/handleScrollOffset";

interface PropType {
  id?: string;
  text?: string;
  logo?: "download" | "linkedin" | "github" | "arrow" | "arrowUp";
  type?: string;
  url: string;
  target?: string;
  isHashLink?: boolean;
  onClick?: () => void;
}
export default function NavLinks({
  id,
  text,
  logo,
  type,
  url,
  target,
  isHashLink,
  onClick,
}: PropType) {
  const logos = {
    download: faArrowUpRightFromSquare,
    linkedin: faLinkedin,
    github: faGithub,
    arrow: faArrowRight,
    arrowUp: faArrowUpRightFromSquare,
  };

  const className =
    type === "mobile-menu-link"
      ? "flex min-h-14 w-full items-center px-1 py-3 text-base font-semibold text-slate-900 transition hover:text-teal-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-teal-700"
      : type === "mobile-parent-link"
        ? "flex min-h-12 min-w-0 flex-1 items-center px-2 py-3 text-base font-semibold text-slate-900 transition hover:text-teal-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700"
        : type === "mobile-submenu-link"
          ? "ml-1 flex min-h-12 w-[calc(100%-0.25rem)] items-center border-l-2 border-slate-300 px-5 py-2.5 text-[0.95rem] font-semibold text-slate-700 transition hover:border-teal-700 hover:bg-white/70 hover:text-teal-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-teal-700"
          : type === "nav-submenu-link"
            ? "flex min-h-11 w-full items-center px-4 py-2.5 text-sm font-semibold text-slate-800 transition hover:bg-teal-50 hover:text-teal-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-teal-700"
            : type === "nav-link"
              ? "inline-flex min-h-11 items-center px-3 py-2 text-sm font-bold uppercase tracking-[0.08em] text-slate-700 transition hover:text-teal-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700"
              : "inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-teal-700 bg-white px-4 py-2.5 text-sm font-bold text-teal-800 transition hover:bg-teal-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 focus-visible:ring-offset-2";

  const contents = (
    <>
      <span>{text}</span>
      {logo ? <FontAwesomeIcon icon={logos[logo]} aria-hidden="true" /> : null}
    </>
  );

  if (isHashLink) {
    return (
      <a
        data-testid={`btn-link-${id}`}
        href={url}
        aria-label={text || "Navigation link"}
        className={className}
        target={target}
        onClick={(event) => {
          handleSectionLinkClick(event, url);
          onClick?.();
        }}
      >
        {contents}
      </a>
    );
  }

  const isExternalLink =
    target === "_blank" ||
    url.startsWith("http://") ||
    url.startsWith("https://");

  if (isExternalLink) {
    return (
      <a
        data-testid={`btn-link-${id}`}
        href={url}
        aria-label={text || "Navigation link"}
        className={className}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        onClick={onClick}
      >
        {contents}
      </a>
    );
  }

  return (
    <a
      data-testid={`btn-link-${id}`}
      href={url}
      aria-label={text || "Navigation link"}
      className={className}
      target={target}
      onClick={onClick}
    >
      {contents}
    </a>
  );
}
