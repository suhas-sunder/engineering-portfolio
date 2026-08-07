import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Contact from "../Contact";

describe("contact form", () => {
  beforeEach(() => render(<Contact />));

  it("renders the retained Formspree form", () => {
    expect(screen.getByRole("form", { name: /contact form/i })).toHaveAttribute(
      "action",
      "https://formspree.io/f/xknaendo",
    );
  });

  it("renders four labelled text fields", () => {
    expect(screen.getAllByRole("textbox")).toHaveLength(4);
    expect(screen.getByLabelText(/name/i)).toHaveAttribute(
      "autocomplete",
      "name",
    );
    expect(screen.getByLabelText(/email/i)).toHaveAttribute("type", "email");
    expect(screen.getByLabelText(/phone/i)).toHaveAttribute("type", "tel");
  });

  it("renders an accessible message submission button", () => {
    expect(
      screen.getByRole("button", { name: /send message/i }),
    ).toBeInTheDocument();
  });

  it("shows validation feedback after a required field is left empty", () => {
    fireEvent.blur(screen.getByLabelText(/name/i));

    expect(screen.getByText(/please enter your name/i)).toBeInTheDocument();
  });

  it("shows the retained success state after a successful Formspree response", async () => {
    global.fetch = jest.fn().mockResolvedValue({ ok: true });

    fireEvent.change(screen.getByLabelText(/name/i), {
      target: { value: "QA User" },
    });
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "qa@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/message/i), {
      target: { value: "Portfolio verification" },
    });
    fireEvent.submit(screen.getByRole("form", { name: /contact form/i }));

    expect(screen.getByText(/sending your message/i)).toBeInTheDocument();
    await waitFor(() =>
      expect(screen.getByText(/message has been sent successfully/i)).toBeInTheDocument(),
    );
  });

  it("shows a direct-email fallback after a failed Formspree response", async () => {
    global.fetch = jest.fn().mockRejectedValue(new Error("Network error"));

    fireEvent.submit(screen.getByRole("form", { name: /contact form/i }));

    await waitFor(() =>
      expect(screen.getByText(/email suhas@live.ca directly/i)).toBeInTheDocument(),
    );
  });
});
