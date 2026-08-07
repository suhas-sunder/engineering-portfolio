function handleScrollOffset(element: HTMLElement) {
  const navigation = document.querySelector<HTMLElement>(
    "nav[aria-label='Primary navigation']",
  );
  const navigationOffset = navigation?.getBoundingClientRect().height ?? 72;
  const targetPosition =
    element.getBoundingClientRect().top + window.scrollY - navigationOffset;

  window.scrollTo({ top: Math.max(0, targetPosition), behavior: "smooth" });
}

export default handleScrollOffset;
