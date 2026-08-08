import "@testing-library/jest-dom";
import { fireEvent, render, screen, within } from "@testing-library/react";
import NavBar from "../NavBar";
import { siteConfig } from "../../../config/site";

const renderNavBar = () => render(<NavBar />);

const expectedUrls = [
  "/#skills",
  "/#projects",
  "/#education",
  "/#experience",
  "/#contact",
];

describe("primary navigation", () => {
  it("renders a labelled nav element", () => {
    renderNavBar();
    expect(
      screen.getByRole("navigation", { name: /primary navigation/i }),
    ).toBeInTheDocument();
  });

  it("renders the five engineering portfolio section links", () => {
    renderNavBar();
    const links = screen.getAllByTestId(/btn-link-nav/i);

    expect(links).toHaveLength(5);
    links.forEach((link, index) =>
      expect(link).toHaveAttribute("href", expectedUrls[index]),
    );
  });

  it("opens project and experience dropdowns with direct anchors", () => {
    renderNavBar();

    fireEvent.click(
      screen.getByRole("button", { name: /show projects links/i }),
    );
    const projectsMenu = screen.getByRole("list", { name: /projects links/i });
    expect(
      within(projectsMenu).getByRole("link", { name: /arc fault detection/i }),
    ).toHaveAttribute("href", "/#arc-fault");
    expect(
      within(projectsMenu).getByRole("link", { name: /bev simulation/i }),
    ).toHaveAttribute("href", "/#bev-simulation");

    fireEvent.click(
      screen.getByRole("button", { name: /show experience links/i }),
    );
    const experienceMenu = screen.getByRole("list", {
      name: /experience links/i,
    });
    expect(
      within(experienceMenu).getByRole("link", { name: /dobson partners/i }),
    ).toHaveAttribute("href", "/#dobson-partners");
    expect(
      within(experienceMenu).getByRole("link", { name: /ats group/i }),
    ).toHaveAttribute("href", "/#ats-group");
    expect(
      within(experienceMenu).getByRole("link", { name: /eme group/i }),
    ).toHaveAttribute("href", "/#eme-group");
  });

  it("closes an open dropdown with Escape", () => {
    renderNavBar();
    fireEvent.click(
      screen.getByRole("button", { name: /show projects links/i }),
    );
    fireEvent.keyDown(document, { key: "Escape" });

    expect(
      screen.queryByRole("list", { name: /projects links/i }),
    ).not.toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /show projects links/i }),
    ).toHaveFocus();
  });

  it("identifies the professional designation with the regulator", () => {
    renderNavBar();
    expect(
      screen.getAllByText(/^engineer-in-training \(egbc\)$/i),
    ).toHaveLength(2);
  });

  it("shows one navbar resume control with concise wording", () => {
    renderNavBar();
    const resumeLink = screen.getByRole("link", {
      name: /open resume in a new tab/i,
    });

    expect(resumeLink).toHaveTextContent(/^Resume$/);
    expect(resumeLink).toHaveAttribute("href", siteConfig.resumeUrl);
    expect(resumeLink).toHaveAttribute("target", "_blank");
    expect(resumeLink).toHaveAttribute("rel", "noopener noreferrer");
    expect(screen.queryByText(/pdf|pending|download/i)).not.toBeInTheDocument();
  });

  it("opens the configured resume page in a secure new tab", () => {
    renderNavBar();
    const resumeLink = screen.getByRole("link", {
      name: /open resume in a new tab/i,
    });

    expect(resumeLink).toHaveTextContent(/^Resume$/);
    expect(resumeLink).toHaveAttribute("target", "_blank");
    expect(resumeLink).toHaveAttribute("rel", "noopener noreferrer");
    expect(resumeLink).toHaveAttribute("href", siteConfig.resumeUrl);
  });
});
