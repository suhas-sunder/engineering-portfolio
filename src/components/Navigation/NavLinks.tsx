import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowRight,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import handleScrollOffset from "../utility/handleScrollOffset";

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
      ? "flex min-h-12 w-full items-center justify-between border-b border-slate-300 px-2 py-3 text-base font-semibold text-slate-800 transition hover:border-teal-700 hover:text-teal-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700"
      : type === "nav-link"
        ? "inline-flex min-h-11 items-center px-3 py-2 text-[0.78rem] font-bold uppercase tracking-[0.1em] text-slate-700 transition hover:text-teal-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700"
        : "inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-teal-700 bg-white px-4 py-2.5 text-sm font-bold text-teal-800 transition hover:bg-teal-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 focus-visible:ring-offset-2";

  const contents = (
    <>
      <span>{text}</span>
      {logo ? <FontAwesomeIcon icon={logos[logo]} aria-hidden="true" /> : null}
    </>
  );

  if (isHashLink) {
    return (
      <HashLink
        data-testid={`btn-link-${id}`}
        to={url}
        aria-label={text || "Navigation link"}
        className={className}
        target={target}
        onClick={onClick}
        scroll={(element) => handleScrollOffset(element)}
      >
        {contents}
      </HashLink>
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
    <Link
      data-testid={`btn-link-${id}`}
      to={url}
      aria-label={text || "Navigation link"}
      className={className}
      target={target}
      onClick={onClick}
    >
      {contents}
    </Link>
  );
}
