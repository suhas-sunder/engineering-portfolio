import { render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../Home";

const renderHome = () => {
  render(<Home />);
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
        /engineering analysis\s*\|\s*systems thinking\s*\|\s*technical project delivery/i,
      ),
    ).toBeInTheDocument();
    expect(
      within(hero).getByText(
        /open to relocation across canada & the u\.s\. \| open to travel \| on-site & hybrid/i,
      ),
    ).toBeInTheDocument();
    expect(
      within(hero).getByText(/valid canadian driver's licence/i),
    ).toBeInTheDocument();
    expect(
      within(hero).getByText(
        /engineering project experience includes modelling, optimization, embedded systems, technical analysis, and project planning/i,
      ),
    ).toBeInTheDocument();
    expect(
      within(hero).queryByText(/^electrical & computer engineering$/i),
    ).not.toBeInTheDocument();
    expect(within(hero).queryByText(/power systems/i)).not.toBeInTheDocument();
    expect(
      within(hero).queryByText(/relocating to vancouver/i),
    ).not.toBeInTheDocument();
    expect(
      within(hero).queryByText(/software developer/i),
    ).not.toBeInTheDocument();
  });

  it("renders the professional headshot", () => {
    expect(
      screen.getByAltText(/professional headshot of suhas sunder/i),
    ).toBeInTheDocument();
    expect(
      screen.queryByText(/engineering portfolio/i),
    ).not.toBeInTheDocument();
    expect(screen.queryByText(/eit · egbc/i)).not.toBeInTheDocument();
  });

  it("renders four compact hero shortcuts without a duplicate resume control", () => {
    const hero = screen.getByRole("banner");
    const shortcuts = within(hero).getAllByTestId("hero-quick-link");

    expect(shortcuts).toHaveLength(4);
    expect(
      within(hero).getByRole("link", { name: /open linkedin profile/i }),
    ).toHaveAttribute("target", "_blank");
    expect(
      within(hero).getByRole("link", { name: /view engineering projects/i }),
    ).toHaveAttribute("href", "/#projects");
    expect(
      within(hero).getByRole("link", {
        name: /view education and credentials/i,
      }),
    ).toHaveAttribute("href", "/#education");
    expect(
      within(hero).getByRole("link", { name: /go to contact section/i }),
    ).toHaveAttribute("href", "/#contact");
    expect(within(hero).queryByText(/^resume$/i)).not.toBeInTheDocument();
    expect(within(hero).queryByText(/suhas@live\.ca/i)).not.toBeInTheDocument();
    expect(within(hero).queryByText(/647.*242.*2969/i)).not.toBeInTheDocument();
    expect(
      within(hero).queryByText(/suhassunder\.ca/i),
    ).not.toBeInTheDocument();
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

  it("retains the unique evidence links from the retired project pages", () => {
    expect(
      screen.getByRole("link", { name: /view capstone demo video/i }),
    ).toHaveAttribute("href", expect.stringContaining("drive.google.com"));
    expect(
      screen.getByRole("link", { name: /view sensor planner source/i }),
    ).toHaveAttribute("href", "https://github.com/suhas-sunder/sensor-planner");
    expect(
      screen.getByRole("link", { name: /visit sensor planner/i }),
    ).toHaveAttribute("href", "https://sensor-planner.netlify.app/");
    expect(document.body.innerHTML).not.toContain("www.sensorplanner.com");
  });

  it("renders verified project images without fabricated evidence placeholders", () => {
    const altTextPatterns = [
      /arc fault detection prototype with arduino/i,
      /matlab and simulink brake-split controller/i,
      /wltp simulation plots comparing actual and desired speed/i,
      /phase 1 construction project schedule/i,
      /construction risk management plan with rpn categories/i,
      /smart home sensor planner interface showing a multi-floor layout/i,
      /pso-ga sensor placement results/i,
    ];

    altTextPatterns.forEach((pattern) => {
      const image = screen.getByAltText(pattern);
      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute("loading", "lazy");
      expect(image).toHaveAttribute("decoding", "async");
      expect(image.className).toContain("object-contain");
      expect(image.className).not.toContain("object-cover");
      expect(Number(image.getAttribute("width"))).toBeGreaterThan(0);
      expect(Number(image.getAttribute("height"))).toBeGreaterThan(0);
    });

    const projects = document.getElementById("projects");
    expect(projects).not.toBeNull();
    if (!projects) throw new Error("Expected projects section");
    expect(
      within(projects).queryByAltText(/professional headshot/i),
    ).not.toBeInTheDocument();
    expect(screen.queryByText(/evidence placeholder/i)).not.toBeInTheDocument();
    expect(
      screen.queryByText(/no illustrative or fabricated/i),
    ).not.toBeInTheDocument();
    expect(document.body.textContent).not.toMatch(
      /capstone-proj-screenshot|hev_bev|project_management_|sensor_planner_pso/i,
    );
  });

  it("keeps multi-image project evidence in deterministic order", () => {
    const bevEvidence = screen.getByRole("group", {
      name: /hybrid electric vehicle.*technical evidence/i,
    });
    expect(
      within(bevEvidence)
        .getAllByRole("img")
        .map((image) => image.getAttribute("alt")),
    ).toEqual([
      expect.stringMatching(/brake-split controller/i),
      expect.stringMatching(/wltp simulation plots/i),
    ]);

    const constructionEvidence = screen.getByRole("group", {
      name: /engineering construction planning technical evidence/i,
    });
    expect(
      within(constructionEvidence)
        .getAllByRole("img")
        .map((image) => image.getAttribute("alt")),
    ).toEqual([
      expect.stringMatching(/phase 1 construction project schedule/i),
      expect.stringMatching(/risk management plan/i),
    ]);

    const sensorEvidence = screen.getByRole("group", {
      name: /smart home sensor planner technical evidence/i,
    });
    expect(
      within(sensorEvidence)
        .getAllByRole("img")
        .map((image) => image.getAttribute("alt")),
    ).toEqual([
      expect.stringMatching(/sensor planner interface/i),
      expect.stringMatching(/pso-ga sensor placement results/i),
    ]);
  });

  it("supports one-image and responsive two-image evidence layouts", () => {
    expect(screen.getByTestId("arc-fault-evidence")).toHaveAttribute(
      "data-evidence-layout",
      "single",
    );
    expect(
      within(screen.getByTestId("arc-fault-evidence")).getAllByRole("img"),
    ).toHaveLength(1);

    expect(screen.getByTestId("bev-simulation-evidence")).toHaveAttribute(
      "data-evidence-layout",
      "wide-pair",
    );
    expect(
      within(screen.getByTestId("bev-simulation-evidence")).getAllByRole("img"),
    ).toHaveLength(2);
    [
      "bev-simulation-evidence",
      "construction-planning-evidence",
      "sensor-planner-evidence",
    ].forEach((testId) => {
      expect(screen.getByTestId(testId).className).toContain("grid-cols-1");
      expect(screen.getByTestId(testId).className).toContain(
        "2xl:grid-cols-2",
      );
    });
    expect(screen.getByTestId("arc-fault-evidence").className).toContain(
      "mx-auto",
    );
    expect(screen.getByTestId("arc-fault-evidence").className).toContain(
      "max-w-5xl",
    );
    expect(screen.getByTestId("projects-container").className).toContain(
      "max-w-[100rem]",
    );
    screen.getAllByTestId("project-intro").forEach((intro) => {
      expect(intro.className).toContain("max-w-[68rem]");
    });
  });

  it("provides stable anchors for projects and employers", () => {
    [
      "arc-fault",
      "bev-simulation",
      "construction-planning",
      "sensor-planner",
      "dobson-partners",
      "ats-group",
      "eme-group",
    ].forEach((id) => {
      expect(document.getElementById(id)).toBeInTheDocument();
      expect(document.getElementById(id)).toHaveClass("anchor-target");
    });
  });

  it("shows skills before projects and removes decorative numbering", () => {
    const skills = document.getElementById("skills");
    const projects = document.getElementById("projects");

    expect(skills).not.toBeNull();
    expect(projects).not.toBeNull();
    if (!skills || !projects) throw new Error("Expected portfolio sections");

    expect(
      skills.compareDocumentPosition(projects) &
        Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
    expect(document.body.textContent).not.toMatch(
      /\b(?:PROJECT|DEGREE|EXPERIENCE) 0\d\b/,
    );
    expect(document.body.textContent).not.toMatch(/\d{2} \/ \d{2}/);
  });

  it("contains no visible em dash characters", () => {
    expect(document.body.textContent).not.toContain("—");
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
    expect(
      screen.queryByRole("link", { name: /suhassunder\.ca/i }),
    ).not.toBeInTheDocument();
  });

  it("does not expose PDF or pending resume wording in the hero", () => {
    const hero = screen.getByRole("banner");

    expect(within(hero).queryByText(/pdf pending/i)).not.toBeInTheDocument();
    expect(
      within(hero).queryByText(/engineering résumé/i),
    ).not.toBeInTheDocument();
  });
});
