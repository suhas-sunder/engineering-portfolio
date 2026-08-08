import { useCallback, useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faChevronDown,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import NavLinks from "./NavLinks";
import NavBtnData from "../../data/NavBtnData";
import ResumeLink from "./ResumeLink";

const focusableSelector =
  'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

export default function MobileNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const menuPanelRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const closeMenu = useCallback((restoreFocus = false) => {
    setIsMenuOpen(false);
    setExpandedSection(null);

    if (restoreFocus) {
      window.requestAnimationFrame(() => menuButtonRef.current?.focus());
    }
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    menuPanelRef.current
      ?.querySelector<HTMLElement>(focusableSelector)
      ?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu(true);
        return;
      }

      if (event.key !== "Tab") return;

      const focusableElements = Array.from(
        rootRef.current?.querySelectorAll<HTMLElement>(focusableSelector) || [],
      );
      if (focusableElements.length === 0) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    const desktopQuery = window.matchMedia?.("(min-width: 1024px)");
    const handleDesktopChange = (event: MediaQueryListEvent) => {
      if (event.matches) closeMenu(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    desktopQuery?.addEventListener("change", handleDesktopChange);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      desktopQuery?.removeEventListener("change", handleDesktopChange);
    };
  }, [closeMenu, isMenuOpen]);

  return (
    <div
      ref={rootRef}
      className="lg:hidden"
      role={isMenuOpen ? "dialog" : undefined}
      aria-modal={isMenuOpen ? "true" : undefined}
      aria-labelledby={isMenuOpen ? "mobile-menu-title" : undefined}
    >
      <div className="relative z-[80] flex min-h-[4.25rem] items-center justify-between gap-2 px-4 sm:px-6">
        <a
          href="/"
          onClick={() => closeMenu(false)}
          aria-label="Suhas Sunder home"
          className="flex min-h-11 min-w-0 items-center gap-3 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700"
        >
          <span className="flex h-10 w-10 flex-none items-center justify-center bg-slate-900 text-sm font-bold tracking-wider text-white">
            SS
          </span>
          <span className="min-w-0 leading-tight">
            <span className="block truncate text-sm font-bold text-slate-950">
              Suhas Sunder
            </span>
            <span className="hidden text-[0.78rem] font-bold uppercase tracking-[0.08em] text-teal-700 min-[360px]:block">
              Engineer-in-Training (EGBC)
            </span>
            <span className="block text-[0.76rem] font-bold uppercase tracking-[0.08em] text-teal-700 min-[360px]:hidden">
              EIT (EGBC)
            </span>
          </span>
        </a>

        <button
          ref={menuButtonRef}
          type="button"
          data-testid={isMenuOpen ? "burgerBtn-close" : "burgerBtn-open"}
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isMenuOpen}
          aria-controls="burger-menu"
          className="flex h-11 w-11 flex-none cursor-pointer items-center justify-center rounded-md border border-slate-300 bg-white text-slate-900 transition hover:border-teal-700 hover:text-teal-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 focus-visible:ring-offset-2"
          onClick={() =>
            isMenuOpen ? closeMenu(true) : setIsMenuOpen(true)
          }
        >
          <FontAwesomeIcon
            icon={isMenuOpen ? faXmark : faBars}
            className="text-lg"
            aria-hidden="true"
          />
        </button>
      </div>

      {isMenuOpen ? (
        <>
          <div
            data-testid="mobile-nav-bkgd"
            className="fixed inset-x-0 bottom-0 top-[4.25rem] z-[60] bg-slate-200"
            aria-hidden="true"
            onClick={() => closeMenu(true)}
          />

          <div
            ref={menuPanelRef}
            id="burger-menu"
            className="fixed right-0 top-[4.25rem] z-[70] max-h-[calc(100dvh-4.25rem)] w-full max-w-[30rem] overflow-y-auto overscroll-contain border-b border-l border-slate-300 bg-[#f7f6f2] px-5 py-5 shadow-xl sm:px-7"
          >
            <p
              id="mobile-menu-title"
              className="border-b border-slate-300 pb-4 text-xs font-bold uppercase tracking-[0.16em] text-teal-700"
            >
              Navigation
            </p>

            <ul className="w-full">
              {NavBtnData.map((item) => {
                const hasChildren = Boolean(item.children?.length);
                const isExpanded = expandedSection === item.id;

                return (
                  <li key={item.id} className="border-b border-slate-300">
                    {hasChildren ? (
                      <button
                        type="button"
                        data-testid={`mobile-disclosure-${item.id}`}
                        aria-expanded={isExpanded}
                        aria-controls={`${item.id}-mobile-menu`}
                        className="flex min-h-14 w-full items-center justify-between gap-4 px-1 py-3 text-left text-base font-semibold text-slate-900 transition hover:text-teal-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-teal-700"
                        onClick={() =>
                          setExpandedSection((current) =>
                            current === item.id ? null : item.id,
                          )
                        }
                      >
                        <span>{item.text}</span>
                        <FontAwesomeIcon
                          icon={faChevronDown}
                          className={`mr-1 text-sm transition-transform ${
                            isExpanded ? "rotate-180" : ""
                          }`}
                          aria-hidden="true"
                        />
                      </button>
                    ) : (
                      <NavLinks
                        id={item.id}
                        url={item.url}
                        type="mobile-menu-link"
                        text={item.text}
                        isHashLink={item.hashLink}
                        onClick={() => closeMenu(false)}
                      />
                    )}

                    {hasChildren && isExpanded ? (
                      <ul
                        id={`${item.id}-mobile-menu`}
                        aria-label={`${item.text} links`}
                        className="border-t border-slate-200 pb-2"
                      >
                        {item.children?.map((child) => (
                          <li key={child.id}>
                            <NavLinks
                              id={child.id}
                              url={child.url}
                              type="mobile-submenu-link"
                              text={child.text}
                              isHashLink
                              onClick={() => closeMenu(false)}
                            />
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </li>
                );
              })}

              <li className="pt-5">
                <ResumeLink />
              </li>
            </ul>
          </div>
        </>
      ) : null}
    </div>
  );
}
