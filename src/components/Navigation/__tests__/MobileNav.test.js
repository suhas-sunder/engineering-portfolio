import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import MobileNav from "../MobileNav";
import { BrowserRouter } from "react-router-dom";

const renderMobileNav = () =>
  render(
    <BrowserRouter>
      <MobileNav />
    </BrowserRouter>,
  );

const expectedUrls = [
  "/",
  "/#projects",
  "/#skills",
  "/#education",
  "/#experience",
  "/#contact",
];

describe("mobile navigation", () => {
  it("defaults to a closed menu with only the home link", () => {
    renderMobileNav();
    const links = screen.getAllByRole("link");

    expect(screen.getByTestId(/burgerBtn-open/i)).toBeInTheDocument();
    expect(links).toHaveLength(1);
    expect(links[0]).toHaveAttribute("href", "/");
  });

  it("opens the menu with all section links and a pending resume control", () => {
    renderMobileNav();
    fireEvent.click(screen.getByTestId(/burgerBtn-open/i));

    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(expectedUrls.length);
    links.forEach((link, index) =>
      expect(link).toHaveAttribute("href", expectedUrls[index]),
    );
    expect(screen.getByTestId("engineering-resume-pending")).toBeDisabled();
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
