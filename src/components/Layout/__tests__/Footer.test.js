import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "../Footer";

describe("engineering portfolio footer", () => {
  beforeEach(() => render(<Footer />));

  it("renders portfolio ownership text", () => {
    expect(screen.getByText(/suhas sunder\.$/i)).toBeInTheDocument();
    expect(
      screen.queryByText(/engineering portfolio/i),
    ).not.toBeInTheDocument();
  });

  it("renders direct email, LinkedIn, and repository links", () => {
    expect(screen.getByRole("link", { name: /email/i })).toHaveAttribute(
      "href",
      "mailto:suhas@live.ca",
    );
    expect(screen.getByRole("link", { name: /linkedin/i })).toHaveAttribute(
      "href",
      "https://linkedin.com/in/s-sunder",
    );
    expect(screen.getByRole("link", { name: /view source/i })).toHaveAttribute(
      "href",
      "https://github.com/suhas-sunder/engineering-portfolio",
    );
  });
});
