import "@testing-library/jest-dom";
import { fireEvent, render, screen, within } from "@testing-library/react";
import NavBar from "../NavBar";
import { siteConfig } from "../../../config/site";

const renderNavBar = () => render(<NavBar />);

const installMatchMedia = (finePointer = true) => {
  Object.defineProperty(window, "matchMedia", {
    configurable: true,
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: query.includes("hover") ? finePointer : false,
      media: query,
      onchange: null,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      addListener: jest.fn(),
      removeListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
};

describe("primary navigation", () => {
  beforeEach(() => installMatchMedia());

  it("uses normal navigation, links, and disclosure buttons", () => {
    renderNavBar();

    expect(
      screen.getByRole("navigation", { name: /primary navigation/i }),
    ).toBeInTheDocument();
    expect(screen.queryByRole("menubar")).not.toBeInTheDocument();
    expect(screen.queryByRole("menuitem")).not.toBeInTheDocument();

    ["Skills", "Education", "Contact"].forEach((name) => {
      expect(screen.getByRole("link", { name })).toBeInTheDocument();
    });
    ["Projects", "Experience"].forEach((name) => {
      expect(screen.getByRole("button", { name })).toBeInTheDocument();
    });
  });

  it("makes each full Projects and Experience trigger activate its disclosure", () => {
    renderNavBar();

    const projectsTrigger = screen.getByTestId(
      "desktop-disclosure-nav-projects",
    );
    expect(projectsTrigger).toHaveTextContent(/^Projects$/i);
    expect(within(projectsTrigger).getByText("Projects")).toBeInTheDocument();
    fireEvent.click(projectsTrigger);

    const projectsMenu = screen.getByRole("list", { name: /projects links/i });
    expect(projectsTrigger).toHaveAttribute("aria-expanded", "true");
    expect(
      within(projectsMenu).getByRole("link", { name: /arc fault detection/i }),
    ).toHaveAttribute("href", "/#arc-fault");

    const experienceTrigger = screen.getByTestId(
      "desktop-disclosure-nav-experience",
    );
    fireEvent.click(experienceTrigger);
    expect(experienceTrigger).toHaveAttribute("aria-expanded", "true");
    expect(projectsTrigger).toHaveAttribute("aria-expanded", "false");
    expect(
      screen.queryByRole("list", { name: /projects links/i }),
    ).not.toBeInTheDocument();
    expect(
      within(
        screen.getByRole("list", { name: /experience links/i }),
      ).getByRole("link", { name: /dobson partners/i }),
    ).toHaveAttribute("href", "/#dobson-partners");
  });

  it("opens on fine-pointer hover and remains open while the submenu is hovered", () => {
    renderNavBar();
    const trigger = screen.getByTestId("desktop-disclosure-nav-projects");
    const interactionRegion = trigger.closest("li");

    fireEvent.pointerEnter(interactionRegion);
    const menu = screen.getByRole("list", { name: /projects links/i });
    fireEvent.pointerEnter(menu);
    expect(menu).toBeInTheDocument();

    fireEvent.pointerLeave(interactionRegion);
    expect(
      screen.queryByRole("list", { name: /projects links/i }),
    ).not.toBeInTheDocument();

    const experienceTrigger = screen.getByTestId(
      "desktop-disclosure-nav-experience",
    );
    fireEvent.pointerEnter(experienceTrigger.closest("li"));
    expect(
      screen.getByRole("list", { name: /experience links/i }),
    ).toBeInTheDocument();
  });

  it("lets a fine-pointer click pin a hover-open disclosure until it is toggled", () => {
    renderNavBar();
    const trigger = screen.getByTestId("desktop-disclosure-nav-projects");
    const interactionRegion = trigger.closest("li");

    fireEvent.pointerEnter(interactionRegion);
    fireEvent.click(trigger);
    fireEvent.pointerLeave(interactionRegion);

    expect(trigger).toHaveAttribute("aria-expanded", "true");
    expect(
      screen.getByRole("list", { name: /projects links/i }),
    ).toBeInTheDocument();

    fireEvent.click(trigger);
    expect(trigger).toHaveAttribute("aria-expanded", "false");
  });

  it("does not impose hover-open behavior on coarse pointers", () => {
    installMatchMedia(false);
    renderNavBar();
    const trigger = screen.getByTestId("desktop-disclosure-nav-projects");

    fireEvent.pointerEnter(trigger.closest("li"));
    expect(
      screen.queryByRole("list", { name: /projects links/i }),
    ).not.toBeInTheDocument();

    fireEvent.click(trigger);
    expect(
      screen.getByRole("list", { name: /projects links/i }),
    ).toBeInTheDocument();
  });

  it("supports native keyboard activation and visible focus treatment", () => {
    renderNavBar();
    const trigger = screen.getByTestId("desktop-disclosure-nav-projects");
    expect(trigger.tagName).toBe("BUTTON");
    expect(trigger.className).toContain("focus-visible:ring-2");

    trigger.focus();
    fireEvent.keyDown(trigger, { key: "Enter" });
    expect(trigger).toHaveAttribute("aria-expanded", "true");

    fireEvent.keyDown(trigger, { key: " " });
    expect(trigger).toHaveAttribute("aria-expanded", "false");
  });

  it("closes an open dropdown with Escape and returns focus", () => {
    renderNavBar();
    const trigger = screen.getByTestId("desktop-disclosure-nav-projects");
    fireEvent.click(trigger);
    fireEvent.keyDown(document, { key: "Escape" });

    expect(
      screen.queryByRole("list", { name: /projects links/i }),
    ).not.toBeInTheDocument();
    expect(trigger).toHaveFocus();
    expect(trigger).toHaveAttribute("aria-expanded", "false");
  });

  it("closes an open dropdown after an outside pointer interaction", () => {
    renderNavBar();
    fireEvent.click(screen.getByTestId("desktop-disclosure-nav-projects"));
    fireEvent.pointerDown(document.body);

    expect(
      screen.queryByRole("list", { name: /projects links/i }),
    ).not.toBeInTheDocument();
  });

  it("keeps the exact secure Resume destination and established icon treatment", () => {
    renderNavBar();
    const resumeLink = screen.getByRole("link", {
      name: /open resume in a new tab/i,
    });

    expect(resumeLink).toHaveTextContent(/^Resume$/);
    expect(resumeLink).toHaveAttribute("href", siteConfig.resumeUrl);
    expect(resumeLink).toHaveAttribute("target", "_blank");
    expect(resumeLink).toHaveAttribute("rel", "noopener noreferrer");
    expect(resumeLink.className).toContain("bg-teal-700");
    expect(resumeLink.className).toContain("text-white");
    expect(screen.getByTestId("resume-icon")).toHaveAttribute(
      "aria-hidden",
      "true",
    );
  });
});
