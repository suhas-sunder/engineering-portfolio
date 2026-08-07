import { render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../Home";
import { MemoryRouter } from "react-router-dom";

const renderHome = () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>,
  );
};

describe("engineering portfolio home", () => {
  beforeEach(renderHome);

  it("renders the engineering-first hero", () => {
    const hero = screen.getByRole("banner");

    expect(
      screen.getByRole("heading", { name: /suhas sunder/i, level: 1 }),
    ).toBeInTheDocument();
    expect(
      within(hero).getByText(/^engineer-in-training \(egbc\)$/i),
    ).toBeInTheDocument();
    expect(
      within(hero).getByText(
        /electrical engineering\s*•\s*power systems\s*•\s*technical project delivery/i,
      ),
    ).toBeInTheDocument();
    expect(
      within(hero).getByText(
        /open to relocation across canada & the u\.s\. • open to travel • on-site & hybrid/i,
      ),
    ).toBeInTheDocument();
    expect(
      within(hero).getByText(/valid canadian driver’s licence/i),
    ).toBeInTheDocument();
    expect(
      within(hero).queryByText(/^electrical & computer engineering$/i),
    ).not.toBeInTheDocument();
    expect(within(hero).queryByText(/relocating to vancouver/i)).not.toBeInTheDocument();
    expect(
      within(hero).queryByText(/software developer/i),
    ).not.toBeInTheDocument();
  });

  it("renders the professional headshot", () => {
    expect(
      screen.getByAltText(/professional headshot of suhas sunder/i),
    ).toBeInTheDocument();
  });

  it("renders all four engineering projects", () => {
    [
      /arc fault detection system/i,
      /hybrid electric vehicle \/ battery electric vehicle simulation/i,
      /engineering construction planning/i,
      /smart home sensor planner/i,
    ].forEach((name) => {
      expect(screen.getByRole("heading", { name })).toBeInTheDocument();
    });
  });

  it("renders verified project images and explicit evidence placeholders", () => {
    expect(
      screen.getByAltText(/arc fault detection capstone prototype/i),
    ).toBeInTheDocument();
    expect(
      screen.getByAltText(/smart home sensor planner interface/i),
    ).toBeInTheDocument();
    expect(screen.getAllByText(/evidence placeholder/i)).toHaveLength(2);
  });

  it("renders engineering education without duplicated BEng coursework", () => {
    expect(
      screen.getByRole("heading", {
        name: /master of engineering in electrical and computer engineering/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: /bachelor of engineering in electrical engineering and management/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getAllByText(/advanced engineering mathematics/i),
    ).toHaveLength(1);
  });

  it("renders the working contact form and direct contact details", () => {
    expect(screen.getByRole("form", { name: /contact form/i })).toHaveAttribute(
      "action",
      "https://formspree.io/f/xknaendo",
    );
    expect(
      screen
        .getAllByRole("link", { name: /suhas@live.ca/i })
        .every((link) => link.getAttribute("href") === "mailto:suhas@live.ca"),
    ).toBe(true);
  });

  it("does not expose the legacy software resume", () => {
    expect(
      screen.getByRole("button", { name: /engineering résumé pdf is pending/i }),
    ).toBeDisabled();
    expect(screen.queryByTestId("engineering-resume-link")).not.toBeInTheDocument();
  });
});
