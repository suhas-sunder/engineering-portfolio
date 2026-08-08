import * as fs from "fs";
import * as path from "path";
import {
  educationItems,
  engineeringProjects,
} from "../EngineeringPortfolioData";

const evidenceAssets = [
  {
    projectId: "arc-fault",
    file: "capstone-proj-screenshot.jpg",
    width: 1280,
    height: 720,
  },
  {
    projectId: "bev-simulation",
    file: "hev_bev_matlab.png",
    width: 3315,
    height: 1119,
  },
  {
    projectId: "bev-simulation",
    file: "hev_bev_results_plots.png",
    width: 3304,
    height: 1852,
  },
  {
    projectId: "construction-planning",
    file: "project_management_plan_phase_1.png",
    width: 3088,
    height: 1251,
  },
  {
    projectId: "construction-planning",
    file: "project_management_risk_mgmt_plan.png",
    width: 3073,
    height: 1618,
  },
  {
    projectId: "sensor-planner",
    file: "sensor_planner.png",
    width: 3811,
    height: 1951,
  },
  {
    projectId: "sensor-planner",
    file: "sensor_planner_pso_ga_layouts.png",
    width: 2802,
    height: 1576,
  },
] as const;

function readImageDimensions(buffer: Buffer, extension: string) {
  if (extension === ".png") {
    expect(buffer.subarray(1, 4).toString()).toBe("PNG");
    return {
      width: buffer.readUInt32BE(16),
      height: buffer.readUInt32BE(20),
    };
  }

  let offset = 2;
  const startOfFrameMarkers = new Set([
    0xc0, 0xc1, 0xc2, 0xc3, 0xc5, 0xc6, 0xc7, 0xc9, 0xca, 0xcb, 0xcd, 0xce,
    0xcf,
  ]);

  while (offset < buffer.length) {
    if (buffer[offset] !== 0xff) {
      offset += 1;
      continue;
    }

    const marker = buffer[offset + 1];
    const blockLength = buffer.readUInt16BE(offset + 2);
    if (startOfFrameMarkers.has(marker)) {
      return {
        width: buffer.readUInt16BE(offset + 7),
        height: buffer.readUInt16BE(offset + 5),
      };
    }
    offset += blockLength + 2;
  }

  throw new Error("Unable to read JPEG dimensions");
}

describe("engineering project evidence assets", () => {
  it("references all supplied files with their real nonzero dimensions", () => {
    evidenceAssets.forEach(({ projectId, file, width, height }) => {
      const assetPath = path.resolve(process.cwd(), "src", "assets", file);
      expect(fs.existsSync(assetPath)).toBe(true);

      const dimensions = readImageDimensions(
        fs.readFileSync(assetPath),
        path.extname(file).toLowerCase(),
      );
      expect(dimensions).toEqual({ width, height });
      expect(dimensions.width).toBeGreaterThan(0);
      expect(dimensions.height).toBeGreaterThan(0);

      const project = engineeringProjects.find(({ id }) => id === projectId);
      expect(project?.evidence?.images).toEqual(
        expect.arrayContaining([expect.objectContaining({ width, height })]),
      );
    });
  });

  it("keeps profile-pic outside every project evidence gallery", () => {
    expect(evidenceAssets.map(({ file }) => file)).not.toContain(
      "profile-pic.png",
    );
    expect(
      engineeringProjects
        .flatMap((project) => project.evidence?.images || [])
        .some((image) => image.image.includes("profile-pic")),
    ).toBe(false);
  });
});

describe("engineering education data", () => {
  it("uses the verified BEng coursework supplied in the current resume", () => {
    const beng = educationItems.find(({ degree }) =>
      degree.startsWith("Bachelor of Engineering"),
    );

    expect(beng?.coursework).toEqual([
      "Power Systems",
      "Electric Machines",
      "Fundamentals of Smart Grid",
      "Introduction to Power Electronics",
      "Introduction to Control Systems",
      "Advanced Control Systems",
      "Design Principles & Project Management",
      "Engineering Operations & Project Management",
    ]);
  });
});
