import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HashLink } from "react-router-hash-link";

function SideNav() {
  return (
    <HashLink
      to="/#about"
      scroll={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 z-40 hidden h-12 w-12 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 shadow-md transition hover:border-teal-700 hover:text-teal-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 focus-visible:ring-offset-2 sm:flex"
    >
      <FontAwesomeIcon icon={faArrowUp} aria-hidden="true" />
    </HashLink>
  );
}

export default SideNav;
