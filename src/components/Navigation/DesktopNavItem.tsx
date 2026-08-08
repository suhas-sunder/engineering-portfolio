import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import type { NavItem } from "../../data/NavBtnData";
import NavLinks from "./NavLinks";

const finePointerQuery = "(hover: hover) and (pointer: fine)";

interface DesktopNavItemProps {
  item: NavItem;
  isOpen: boolean;
  onOpenChange: (itemId: string | null) => void;
}

export default function DesktopNavItem({
  item,
  isOpen,
  onOpenChange,
}: DesktopNavItemProps) {
  const containerRef = useRef<HTMLLIElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const openedByHoverRef = useRef(false);
  const hasChildren = Boolean(item.children?.length);

  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        onOpenChange(null);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onOpenChange(null);
        toggleRef.current?.focus();
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onOpenChange]);

  if (!hasChildren) {
    return (
      <li>
        <NavLinks
          id={item.id}
          url={item.url}
          type={item.type}
          text={item.text}
          isHashLink={item.hashLink}
          onClick={() => onOpenChange(null)}
        />
      </li>
    );
  }

  const supportsHover = () =>
    typeof window.matchMedia === "function" &&
    window.matchMedia(finePointerQuery).matches;

  const handlePointerEnter = () => {
    if (supportsHover()) {
      openedByHoverRef.current = true;
      onOpenChange(item.id);
    }
  };

  const handlePointerLeave = () => {
    if (
      supportsHover() &&
      openedByHoverRef.current &&
      !containerRef.current?.contains(document.activeElement)
    ) {
      openedByHoverRef.current = false;
      onOpenChange(null);
    }
  };

  return (
    <li
      ref={containerRef}
      className="relative"
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          openedByHoverRef.current = false;
          onOpenChange(null);
        }
      }}
    >
      <button
        ref={toggleRef}
        type="button"
        aria-expanded={isOpen}
        aria-controls={`${item.id}-menu`}
        data-testid={`desktop-disclosure-${item.id}`}
        className={`inline-flex min-h-11 items-center gap-2 rounded-sm px-3 py-2 text-sm font-bold uppercase tracking-[0.08em] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 ${
          isOpen
            ? "bg-teal-50 text-teal-800"
            : "text-slate-700 hover:bg-teal-50 hover:text-teal-800"
        }`}
        onClick={() => {
          if (openedByHoverRef.current) {
            openedByHoverRef.current = false;
            onOpenChange(item.id);
            return;
          }

          openedByHoverRef.current = false;
          onOpenChange(isOpen ? null : item.id);
        }}
        onKeyDown={(event) => {
          if (event.key !== "Enter" && event.key !== " ") return;

          event.preventDefault();
          openedByHoverRef.current = false;
          onOpenChange(isOpen ? null : item.id);
        }}
      >
        <span>{item.text}</span>
        <FontAwesomeIcon
          icon={faChevronDown}
          className={`text-xs transition-transform ${isOpen ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>

      {isOpen ? (
        <div
          className={`absolute top-full z-[90] pt-[0.875rem] ${
            item.id === "nav-experience" ? "right-0" : "left-0"
          }`}
        >
          <ul
            id={`${item.id}-menu`}
            aria-label={`${item.text} links`}
            className="min-w-72 overflow-hidden rounded-b-md border border-t-2 border-slate-300 border-t-teal-700 bg-[#f7f6f2] py-2 shadow-lg"
          >
            {item.children?.map((child) => (
              <li key={child.id}>
                <NavLinks
                  id={child.id}
                  url={child.url}
                  type="nav-submenu-link"
                  text={child.text}
                  isHashLink
                  onClick={() => onOpenChange(null)}
                />
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </li>
  );
}
