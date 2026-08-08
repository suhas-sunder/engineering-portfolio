import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faChevronDown,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import NavLinks from "./NavLinks";
import NavBtnData from "../../data/NavBtnData";
import ResumeLink from "./ResumeLink";

export default function MobileNav() {
  const [isMenuClosed, setIsMenuClosed] = useState(true);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const toggleBurgerMenu = () => {
    setIsMenuClosed((currentState) => !currentState);
  };

  const closeBurgerMenu = () => {
    setIsMenuClosed(true);
    setExpandedSection(null);
  };

  useEffect(() => {
    if (isMenuClosed) return;

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeBurgerMenu();
        menuButtonRef.current?.focus();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isMenuClosed]);

  return (
    <div className="xl:hidden">
      <div className="relative z-[80] flex min-h-[4.25rem] items-center justify-between gap-2 px-4 sm:px-6">
        <a
          href="/"
          onClick={closeBurgerMenu}
          aria-label="Suhas Sunder engineering portfolio home"
          className="flex min-h-11 min-w-0 items-center gap-3 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700"
        >
          <span className="flex h-10 w-10 items-center justify-center bg-slate-900 text-sm font-bold tracking-wider text-white">
            SS
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-bold text-slate-950">
              Suhas Sunder
            </span>
            <span className="block text-[0.78rem] font-bold uppercase tracking-[0.08em] text-teal-700 max-[359px]:hidden">
              Engineer-in-Training (EGBC)
            </span>
          </span>
        </a>

        <button
          ref={menuButtonRef}
          type="button"
          data-testid={isMenuClosed ? "burgerBtn-open" : "burgerBtn-close"}
          aria-label={
            isMenuClosed ? "Open navigation menu" : "Close navigation menu"
          }
          aria-expanded={!isMenuClosed}
          aria-controls="burger-menu"
          className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-md border border-slate-300 bg-white text-slate-900 transition hover:border-teal-700 hover:text-teal-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700"
          onClick={toggleBurgerMenu}
        >
          <FontAwesomeIcon
            icon={isMenuClosed ? faBars : faXmark}
            className="text-lg"
            aria-hidden="true"
          />
        </button>
      </div>

      {!isMenuClosed && (
        <>
          <button
            type="button"
            data-testid="mobile-nav-bkgd"
            aria-label="Close navigation menu"
            className="fixed inset-x-0 bottom-0 top-[4.25rem] z-[60] h-auto w-full cursor-pointer border-0 bg-slate-950/35"
            onClick={closeBurgerMenu}
          />

          <div
            id="burger-menu"
            className="fixed inset-x-0 top-[4.25rem] z-[70] max-h-[calc(100dvh-4.25rem)] overflow-y-auto border-b border-slate-300 bg-[#f7f6f2] px-4 py-5 shadow-xl sm:px-6"
          >
            <ul className="mx-auto grid w-full max-w-xl gap-2">
              {NavBtnData.map((item) => {
                const hasChildren = Boolean(item.children?.length);
                const isExpanded = expandedSection === item.id;

                return (
                  <li key={item.id}>
                    <div
                      className={`flex items-center ${
                        hasChildren
                          ? `border-b ${
                              isExpanded
                                ? "border-teal-700"
                                : "border-slate-300"
                            }`
                          : ""
                      }`}
                    >
                      <NavLinks
                        id={item.id}
                        url={item.url}
                        type={
                          hasChildren
                            ? "mobile-parent-link"
                            : "mobile-menu-link"
                        }
                        text={item.text}
                        isHashLink={item.hashLink}
                        onClick={closeBurgerMenu}
                      />
                      {hasChildren ? (
                        <button
                          type="button"
                          aria-label={`${isExpanded ? "Hide" : "Show"} ${item.text} links`}
                          aria-expanded={isExpanded}
                          aria-controls={`${item.id}-mobile-menu`}
                          className="flex h-12 w-12 flex-none items-center justify-center rounded-sm text-slate-700 transition hover:text-teal-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700"
                          onClick={() =>
                            setExpandedSection((current) =>
                              current === item.id ? null : item.id,
                            )
                          }
                        >
                          <FontAwesomeIcon
                            icon={faChevronDown}
                            className={`text-sm transition-transform ${
                              isExpanded ? "rotate-180" : ""
                            }`}
                            aria-hidden="true"
                          />
                        </button>
                      ) : null}
                    </div>

                    {hasChildren && isExpanded ? (
                      <ul
                        id={`${item.id}-mobile-menu`}
                        aria-label={`${item.text} links`}
                      >
                        {item.children?.map((child) => (
                          <li key={child.id}>
                            <NavLinks
                              id={child.id}
                              url={child.url}
                              type="mobile-submenu-link"
                              text={child.text}
                              isHashLink
                              onClick={closeBurgerMenu}
                            />
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </li>
                );
              })}
            </ul>

            <div className="mx-auto mt-4 w-full max-w-xl border-t border-slate-300 pt-4">
              <ResumeLink />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
