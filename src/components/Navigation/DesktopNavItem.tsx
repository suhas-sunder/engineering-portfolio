import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import type { NavItem } from "../../data/NavBtnData";
import NavLinks from "./NavLinks";

export default function DesktopNavItem({ item }: { item: NavItem }) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLLIElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const hasChildren = Boolean(item.children?.length);

  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        toggleRef.current?.focus();
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  if (!hasChildren) {
    return (
      <li>
        <NavLinks
          id={item.id}
          url={item.url}
          type={item.type}
          text={item.text}
          isHashLink={item.hashLink}
        />
      </li>
    );
  }

  return (
    <li ref={containerRef} className="relative">
      <div className="flex items-center">
        <NavLinks
          id={item.id}
          url={item.url}
          type={item.type}
          text={item.text}
          isHashLink={item.hashLink}
          onClick={() => setIsOpen(false)}
        />
        <button
          ref={toggleRef}
          type="button"
          aria-label={`${isOpen ? "Hide" : "Show"} ${item.text} links`}
          aria-expanded={isOpen}
          aria-controls={`${item.id}-menu`}
          className="flex h-11 w-8 items-center justify-center rounded-sm text-slate-700 transition hover:text-teal-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700"
          onClick={() => setIsOpen((current) => !current)}
        >
          <FontAwesomeIcon
            icon={faChevronDown}
            className={`text-xs transition-transform ${isOpen ? "rotate-180" : ""}`}
            aria-hidden="true"
          />
        </button>
      </div>

      {isOpen ? (
        <ul
          id={`${item.id}-menu`}
          aria-label={`${item.text} links`}
          className="absolute left-0 top-full z-[90] min-w-64 border border-slate-300 bg-[#f7f6f2] py-2 shadow-xl"
        >
          {item.children?.map((child) => (
            <li key={child.id}>
              <NavLinks
                id={child.id}
                url={child.url}
                type="nav-submenu-link"
                text={child.text}
                isHashLink
                onClick={() => setIsOpen(false)}
              />
            </li>
          ))}
        </ul>
      ) : null}
    </li>
  );
}
