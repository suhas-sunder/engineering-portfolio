import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Skills from "../Skills";

describe("engineering skills", () => {
  beforeEach(() => render(<Skills />));

  it("renders the categorized skills heading", () => {
    expect(
      screen.getByRole("heading", {
        name: /engineering capability, clearly categorized/i,
      }),
    ).toBeInTheDocument();
  });

  it("renders four skill categories instead of a software icon wall", () => {
    expect(screen.getAllByTestId("skill-category")).toHaveLength(4);
    expect(screen.queryByTestId(/skill-icon/i)).not.toBeInTheDocument();
  });

  it("includes engineering tools and the accurate AutoCAD Web label", () => {
    expect(screen.getByText("MATLAB")).toBeInTheDocument();
    expect(screen.getByText("Simulink")).toBeInTheDocument();
    expect(screen.getByText("AutoCAD Web")).toBeInTheDocument();
    expect(screen.queryByText(/^AutoCAD$/)).not.toBeInTheDocument();
  });
});
