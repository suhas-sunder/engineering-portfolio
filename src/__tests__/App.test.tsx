import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

const renderApp = () => {
  render(<App />);
};

describe("engineering portfolio application", () => {
  it("renders the engineering identity and EIT registration", () => {
    renderApp();

    expect(
      screen.getByRole("heading", { name: /suhas sunder/i, level: 1 }),
    ).toBeInTheDocument();
    expect(screen.getAllByText(/engineer-in-training/i).length).toBeGreaterThan(
      0,
    );
    expect(
      screen.getAllByText(/engineers and geoscientists bc/i).length,
    ).toBeGreaterThan(0);
  });

  it("renders the engineering sections in the portfolio", () => {
    renderApp();

    expect(
      screen.getByRole("heading", {
        name: /technical skills/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: /engineering projects/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: /education & credentials/i,
      }),
    ).toBeInTheDocument();
  });

  it("renders the engineering repository source link", () => {
    renderApp();

    expect(screen.getByRole("link", { name: /view source/i })).toHaveAttribute(
      "href",
      "https://github.com/suhas-sunder/engineering-portfolio",
    );
  });
});
