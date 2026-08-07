import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import NavBtnData from "../../data/NavBtnData";
import ResumeLink from "./ResumeLink";

export default function MobileNav() {
  const [isMenuClosed, setIsMenuClosed] = useState(true);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const toggleBurgerMenu = () => {
    setIsMenuClosed((currentState) => !currentState);
  };

  const closeBurgerMenu = () => {
    setIsMenuClosed(true);
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
        <Link
          to="/"
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
            <span className="block text-[0.62rem] font-bold uppercase tracking-[0.13em] text-teal-700 max-[359px]:hidden">
              EIT · Electrical Engineering
            </span>
          </span>
        </Link>

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
              {NavBtnData.map((data) => (
                <li key={data.id} onClick={closeBurgerMenu}>
                  <NavLinks
                    id={data.id}
                    url={data.url}
                    type="mobile-menu-link"
                    text={data.text}
                    isHashLink={data.hashLink}
                  />
                </li>
              ))}
            </ul>

            <div className="mx-auto mt-4 w-full max-w-xl border-t border-slate-300 pt-4">
              <ResumeLink variant="nav" />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
