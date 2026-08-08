import "@testing-library/jest-dom";
import { act, fireEvent, render, screen } from "@testing-library/react";
import MobileNav from "../MobileNav";
import { siteConfig } from "../../../config/site";

const mediaListeners = new Map();

const installMatchMedia = () => {
  mediaListeners.clear();
  Object.defineProperty(window, "matchMedia", {
    configurable: true,
    writable: true,
    value: jest.fn().mockImplementation((query) => {
      const listeners = new Set();
      mediaListeners.set(query, listeners);
      return {
        matches: false,
        media: query,
        onchange: null,
        addEventListener: (_type, listener) => listeners.add(listener),
        removeEventListener: (_type, listener) => listeners.delete(listener),
        addListener: (listener) => listeners.add(listener),
        removeListener: (listener) => listeners.delete(listener),
        dispatchEvent: jest.fn(),
      };
    }),
  });
};

const renderMobileNav = () => render(<MobileNav />);

describe("mobile navigation", () => {
  beforeEach(() => {
    installMatchMedia();
    jest
      .spyOn(window, "requestAnimationFrame")
      .mockImplementation((callback) => {
        callback(0);
        return 0;
      });
  });

  afterEach(() => {
    jest.restoreAllMocks();
    document.body.style.overflow = "";
  });

  it("defaults to a closed menu with no hidden navigation destinations", () => {
    renderMobileNav();

    expect(screen.getByTestId("burgerBtn-open")).toBeInTheDocument();
    expect(screen.getAllByRole("link")).toHaveLength(1);
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    expect(screen.queryByText("Skills")).not.toBeInTheDocument();
  });

  it("opens a modal navigation sheet, locks background scroll, and focuses Skills", () => {
    renderMobileNav();
    fireEvent.click(screen.getByTestId("burgerBtn-open"));

    expect(screen.getByRole("dialog", { name: /navigation/i })).toHaveAttribute(
      "aria-modal",
      "true",
    );
    expect(screen.getByRole("link", { name: "Skills" })).toHaveFocus();
    expect(document.body.style.overflow).toBe("hidden");
    expect(screen.getByTestId("resume-link")).toHaveAttribute(
      "href",
      siteConfig.resumeUrl,
    );
  });

  it("uses full-row, mutually exclusive Projects and Experience disclosures", () => {
    renderMobileNav();
    fireEvent.click(screen.getByTestId("burgerBtn-open"));

    const projects = screen.getByTestId("mobile-disclosure-nav-projects");
    const experience = screen.getByTestId(
      "mobile-disclosure-nav-experience",
    );
    expect(projects).toHaveTextContent(/^Projects$/i);
    expect(projects).toHaveAttribute("aria-expanded", "false");
    expect(
      screen.queryByRole("link", { name: /arc fault detection/i }),
    ).not.toBeInTheDocument();

    fireEvent.click(projects);
    expect(projects).toHaveAttribute("aria-expanded", "true");
    expect(
      screen.getByRole("link", { name: /arc fault detection/i }),
    ).toHaveAttribute("href", "/#arc-fault");
    expect(
      screen.getByRole("link", { name: /power system algorithms/i }),
    ).toHaveAttribute("href", "/#power-system-algorithms");

    fireEvent.click(experience);
    expect(experience).toHaveAttribute("aria-expanded", "true");
    expect(projects).toHaveAttribute("aria-expanded", "false");
    expect(
      screen.queryByRole("link", { name: /arc fault detection/i }),
    ).not.toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /dobson partners/i }),
    ).toHaveAttribute("href", "/#dobson-partners");
  });

  it("closes from the close control and restores the previous scroll state", () => {
    document.body.style.overflow = "auto";
    renderMobileNav();
    fireEvent.click(screen.getByTestId("burgerBtn-open"));
    fireEvent.click(screen.getByTestId("burgerBtn-close"));

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    expect(document.body.style.overflow).toBe("auto");
    expect(screen.getByTestId("burgerBtn-open")).toHaveFocus();
  });

  it("closes with Escape and returns focus to the menu trigger", () => {
    renderMobileNav();
    fireEvent.click(screen.getByTestId("burgerBtn-open"));
    fireEvent.keyDown(window, { key: "Escape" });

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    expect(screen.getByTestId("burgerBtn-open")).toHaveFocus();
    expect(document.body.style.overflow).toBe("");
  });

  it("closes after selecting a destination and removes hidden items from focus order", () => {
    renderMobileNav();
    fireEvent.click(screen.getByTestId("burgerBtn-open"));
    fireEvent.click(screen.getByRole("link", { name: "Education" }));

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    expect(screen.queryByText("Contact")).not.toBeInTheDocument();
    expect(screen.getAllByRole("link")).toHaveLength(1);
  });

  it("clears open mobile state when the desktop breakpoint becomes active", () => {
    renderMobileNav();
    fireEvent.click(screen.getByTestId("burgerBtn-open"));
    fireEvent.click(screen.getByTestId("mobile-disclosure-nav-projects"));

    const listeners = mediaListeners.get("(min-width: 1024px)");
    act(() => {
      listeners.forEach((listener) => listener({ matches: true }));
    });

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    expect(document.body.style.overflow).toBe("");
    expect(
      screen.queryByRole("link", { name: /arc fault detection/i }),
    ).not.toBeInTheDocument();
  });

  it("keeps the Resume CTA reachable, accented, icon-labelled, and secure", () => {
    renderMobileNav();
    fireEvent.click(screen.getByTestId("burgerBtn-open"));
    const resumeLink = screen.getByTestId("resume-link");

    expect(resumeLink).toHaveAttribute("href", siteConfig.resumeUrl);
    expect(resumeLink).toHaveAttribute("target", "_blank");
    expect(resumeLink).toHaveAttribute("rel", "noopener noreferrer");
    expect(resumeLink.className).toContain("bg-teal-700");
    expect(screen.getByTestId("resume-icon")).toBeInTheDocument();
  });
});
