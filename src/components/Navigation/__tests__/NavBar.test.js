import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import NavBar from "../NavBar";

const renderNavBar = () => render(<NavBar />);

const expectedUrls = [
  "/#projects",
  "/#skills",
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

  it("identifies the professional designation with the regulator", () => {
    renderNavBar();
    expect(
      screen.getAllByText(/^engineer-in-training \(egbc\)$/i),
    ).toHaveLength(2);
  });

  it("shows the resume control as pending without a legacy link", () => {
    renderNavBar();
    expect(
      screen.getAllByTestId("engineering-resume-pending").length,
    ).toBeGreaterThan(0);
    expect(screen.queryByTestId("engineering-resume-link")).not.toBeInTheDocument();
  });
});
