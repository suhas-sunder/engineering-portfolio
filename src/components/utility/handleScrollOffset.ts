function handleScrollOffset(el: HTMLElement) {
  const yCoordinate = el.getBoundingClientRect().top + window.scrollY;
  const yOffset = -160;

  window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
}

export default handleScrollOffset;
