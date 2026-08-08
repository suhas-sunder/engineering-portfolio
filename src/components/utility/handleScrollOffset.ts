import type { MouseEvent } from "react";

function handleScrollOffset(element: HTMLElement) {
  element.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function handleSectionLinkClick(
  event: MouseEvent<HTMLAnchorElement>,
  href: string,
) {
  if (
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey
  ) {
    return;
  }

  const hash = href.includes("#") ? href.slice(href.indexOf("#")) : "";
  const targetId = decodeURIComponent(hash.slice(1));
  const target = targetId ? document.getElementById(targetId) : null;

  if (!target) return;

  event.preventDefault();
  window.history.pushState(null, "", `/${hash}`);
  handleScrollOffset(target);
}

export default handleScrollOffset;
