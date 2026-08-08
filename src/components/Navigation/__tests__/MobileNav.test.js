import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import MobileNav from "../MobileNav";
import { siteConfig } from "../../../config/site";

const renderMobileNav = () => render(<MobileNav />);

const expectedUrls = [
  "/",
  "/#skills",
  "/#projects",
  "/#education",
  "/#experience",
  "/#contact",
  siteConfig.resumeUrl,
];

describe("mobile navigation", () => {
  it("defaults to a closed menu with only the home link", () => {
    renderMobileNav();
    const links = screen.getAllByRole("link");

    expect(screen.getByTestId(/burgerBtn-open/i)).toBeInTheDocument();
    expect(links).toHaveLength(1);
    expect(links[0]).toHaveAttribute("href", "/");
  });

  it("opens the menu with all section links and one concise resume control", () => {
    renderMobileNav();
    fireEvent.click(screen.getByTestId(/burgerBtn-open/i));

    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(expectedUrls.length);
    links.forEach((link, index) =>
      expect(link).toHaveAttribute("href", expectedUrls[index]),
    );
    const resumeLink = screen.getByTestId("resume-link");
    expect(resumeLink).toHaveTextContent(/^Resume$/);
    expect(resumeLink).toHaveAttribute("href", siteConfig.resumeUrl);
    expect(resumeLink).toHaveAttribute("target", "_blank");
    expect(resumeLink).toHaveAttribute("rel", "noopener noreferrer");
    expect(screen.queryByText(/pdf|pending|download/i)).not.toBeInTheDocument();
  });

  it("expands project and experience destinations without hover", () => {
    renderMobileNav();
    fireEvent.click(screen.getByTestId(/burgerBtn-open/i));

    fireEvent.click(
      screen.getByRole("button", { name: /show projects links/i }),
    );
    expect(
      screen.getByRole("link", { name: /arc fault detection/i }),
    ).toHaveAttribute("href", "/#arc-fault");
    expect(
      screen.getByRole("link", { name: /sensor planner/i }),
    ).toHaveAttribute("href", "/#sensor-planner");

    fireEvent.click(
      screen.getByRole("button", { name: /show experience links/i }),
    );
    expect(
      screen.getByRole("link", { name: /dobson partners/i }),
    ).toHaveAttribute("href", "/#dobson-partners");
    expect(screen.getByRole("link", { name: /eme group/i })).toHaveAttribute(
      "href",
      "/#eme-group",
    );
  });

  it("closes from the menu button and background overlay", () => {
    renderMobileNav();
    fireEvent.click(screen.getByTestId(/burgerBtn-open/i));
    fireEvent.click(screen.getByTestId(/burgerBtn-close/i));
    expect(screen.queryByTestId("mobile-nav-bkgd")).not.toBeInTheDocument();

    fireEvent.click(screen.getByTestId(/burgerBtn-open/i));
    fireEvent.click(screen.getByTestId("mobile-nav-bkgd"));
    expect(screen.getAllByRole("link")).toHaveLength(1);
  });

  it("closes when Escape is pressed", () => {
    renderMobileNav();
    fireEvent.click(screen.getByTestId(/burgerBtn-open/i));
    fireEvent.keyDown(window, { key: "Escape" });
    expect(screen.getByTestId(/burgerBtn-open/i)).toBeInTheDocument();
  });
});
