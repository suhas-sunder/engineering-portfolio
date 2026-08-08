import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Skills from "../Skills";

describe("engineering skills", () => {
  beforeEach(() => render(<Skills />));

  it("renders the categorized skills heading", () => {
    expect(
      screen.getByRole("heading", {
        name: /technical skills/i,
      }),
    ).toBeInTheDocument();
  });

  it("renders four skill categories instead of a software icon wall", () => {
    expect(screen.getAllByTestId("skill-category")).toHaveLength(4);
    expect(screen.queryByTestId(/skill-icon/i)).not.toBeInTheDocument();
  });

  it("uses one, two, and four-column density without flattening categories", () => {
    const grid = screen.getByTestId("skills-grid");

    expect(grid.className).toContain("sm:grid-cols-2");
    expect(grid.className).toContain("xl:grid-cols-4");
    expect(grid.className).not.toContain("flex-wrap");
  });

  it("includes engineering tools and the accurate AutoCAD Web label", () => {
    expect(screen.getByText("MATLAB")).toBeInTheDocument();
    expect(screen.getByText("Simulink")).toBeInTheDocument();
    expect(screen.getByText("AutoCAD Web")).toBeInTheDocument();
    expect(screen.queryByText(/^AutoCAD$/)).not.toBeInTheDocument();
  });

  it("uses the four requested resume-style categories without disclaimers", () => {
    [
      "ENGINEERING TOOLS",
      "ENGINEERING ANALYSIS",
      "PROJECT DELIVERY",
      "PROGRAMMING & DATA",
    ].forEach((category) => {
      expect(
        screen.getByRole("heading", { name: category }),
      ).toBeInTheDocument();
    });

    expect(screen.getByText("Requirements analysis")).toBeInTheDocument();
    expect(
      screen.queryByText(/academic|transferable|working exposure/i),
    ).not.toBeInTheDocument();
  });
});
