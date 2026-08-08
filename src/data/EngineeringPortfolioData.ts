import CapstoneImage from "../assets/capstone-proj-screenshot.jpg";
import SensorPlannerImage from "../assets/sensor_planner.jpg";

export interface EngineeringProject {
  number: string;
  title: string;
  context: string;
  role: string;
  objective: string;
  highlights: string[];
  system: string;
  constraints: string;
  outcome: string;
  methods: string[];
  evidence?: {
    image?: string;
    alt?: string;
    caption: string;
    placeholder?: string;
  };
  links?: {
    label: string;
    url: string;
  }[];
}

export const engineeringProjects: EngineeringProject[] = [
  {
    number: "01",
    title: "Arc Fault Detection System",
    context: "Undergraduate capstone",
    role: "Team Lead · 3-member engineering team",
    objective:
      "Develop an Arduino-based prototype that detects predefined electrical arc-fault conditions and provides remote fault notification.",
    highlights: [
      "Led a 3-member engineering team in developing the sensing and notification prototype.",
      "Integrated sensing, embedded control, Wi-Fi communication, and IFTTT-based SMS alerts for remote notification.",
      "Developed an SQL-based logging system to record fault events and retrieve historical notification data.",
      "Coordinated hardware/software integration, testing, task allocation, and final project deliverables.",
    ],
    system:
      "Sensing → Arduino control → Wi-Fi / IFTTT notification → SQL event logging",
    constraints:
      "Academic prototype evaluated against predefined fault conditions; not professional protection-and-control work.",
    outcome:
      "Completed integrated prototype, testing, remote notification, and historical event logging deliverables.",
    methods: [
      "Arduino",
      "Embedded systems",
      "Wi-Fi",
      "IFTTT",
      "SQL",
      "System integration",
      "Testing",
    ],
    evidence: {
      image: CapstoneImage,
      alt: "Arc fault detection capstone prototype with Arduino, sensing hardware, outlet module, and mobile notifications",
      caption:
        "Capstone prototype hardware and remote notification interfaces.",
    },
    links: [
      {
        label: "View capstone demo video",
        url: "https://drive.google.com/file/d/1kzKO8vva8IF2pJV-VUExGpKP8mYJUerR/view?usp=sharing",
      },
    ],
  },
  {
    number: "02",
    title: "Hybrid Electric Vehicle / Battery Electric Vehicle Simulation",
    context: "MEng course project",
    role: "MATLAB / Simulink modelling",
    objective:
      "Evaluate vehicle energy use and regenerative-braking performance through a closed-loop battery-electric-vehicle model.",
    highlights: [
      "Developed a closed-loop MATLAB/Simulink BEV model integrating the motor, inverter, battery, energy-management strategy, and longitudinal vehicle dynamics.",
      "Implemented regenerative and friction brake blending under thermal, state-of-charge, and inverter constraints.",
      "Evaluated performance across UDDS, WLTP, and HWFET drive cycles.",
      "Quantified up to approximately 2% SOC recovery in urban driving and identified practical limitations of unconstrained energy-management models.",
    ],
    system:
      "Motor, inverter, battery, energy management, brake blending, and longitudinal vehicle dynamics",
    constraints:
      "Thermal limits, battery state of charge, inverter limits, and representative urban/highway drive cycles.",
    outcome:
      "Measured regenerative-braking impact and documented the limitations of unconstrained energy-management assumptions.",
    methods: [
      "MATLAB",
      "Simulink",
      "BEV modelling",
      "Motor and inverter",
      "Battery",
      "Energy management",
      "Regenerative braking",
      "Drive-cycle analysis",
    ],
    evidence: {
      caption: "Reserved for verified MATLAB/Simulink project evidence.",
      placeholder:
        "Model screenshots, drive-cycle plots, or report excerpts can be added here when supplied.",
    },
  },
  {
    number: "03",
    title: "Engineering Construction Planning",
    context: "MEng course project",
    role: "Project Manager / Team Lead · 7-member engineering team",
    objective:
      "Develop a complete project-management plan for a regulated construction project under fixed deadlines.",
    highlights: [
      "Led a 7-member engineering team across scope, schedule, cost, quality, risk, procurement, stakeholder, and change management planning.",
      "Built project controls including a WBS, Gantt schedule, critical path analysis, burn-down tracking, and risk-management plan.",
      "Covered permitting, procurement, construction, inspection, and closeout activities.",
      "Developed and maintained a quantitative RPN risk register across schedule, cost, safety, environmental, and regulatory risks.",
    ],
    system:
      "Integrated project controls spanning scope, schedule, cost, quality, procurement, stakeholders, risk, and change",
    constraints:
      "Fixed deadlines with mitigation planning aligned to the Ontario Building Code and OHSA.",
    outcome:
      "Delivered an integrated management plan, schedule controls, and quantitative risk register with assigned mitigation actions.",
    methods: [
      "WBS",
      "Gantt scheduling",
      "Critical path",
      "Risk register",
      "RPN",
      "Stakeholder management",
      "Ontario Building Code",
      "OHSA",
    ],
    evidence: {
      caption: "Reserved for verified engineering project-control artifacts.",
      placeholder:
        "Gantt screenshots, WBS diagrams, or risk-register excerpts can be added here when supplied.",
    },
  },
  {
    number: "04",
    title: "Smart Home Sensor Planner",
    context: "IoT planning & simulation platform",
    role: "Systems modelling / optimization / full-stack delivery",
    objective:
      "Model smart-home sensor placement, connectivity, and automation workflows while evaluating placement tradeoffs.",
    highlights: [
      "Built and deployed a full-stack IoT planning and simulation platform for modelling sensor placement, connectivity, and automation workflows.",
      "Developed an interactive system using React, Python APIs, and a relational database for layout modelling, sensor configuration, event logging, and rule-based simulation.",
      "Developed a hybrid PSO-GA optimization algorithm in Python to evaluate sensor-placement tradeoffs.",
      "Evaluated near-optimal configurations against coverage, overlap, cost, and energy-related constraints.",
    ],
    system:
      "Interactive layout model, configurable sensors, connectivity, event logging, rule-based simulation, and PSO-GA optimization",
    constraints:
      "Coverage, overlap, cost, and energy-related placement tradeoffs.",
    outcome:
      "Deployed platform supports scenario modelling and the comparison of near-optimal sensor configurations.",
    methods: [
      "Python",
      "React",
      "Relational database",
      "IoT simulation",
      "PSO-GA optimization",
      "Systems modelling",
    ],
    evidence: {
      image: SensorPlannerImage,
      alt: "Smart Home Sensor Planner interface for configuring a multi-floor sensor layout",
      caption: "Deployed Sensor Planner layout-modelling interface.",
    },
    links: [
      {
        label: "Visit SensorPlanner.com",
        url: "https://www.sensorplanner.com",
      },
      {
        label: "View Sensor Planner source",
        url: "https://github.com/suhas-sunder/sensor-planner",
      },
    ],
  },
];

export const skillGroups = [
  {
    title: "ENGINEERING TOOLS",
    items: ["MATLAB", "Simulink", "AutoCAD Web", "Siemens NX"],
  },
  {
    title: "ENGINEERING ANALYSIS",
    items: [
      "Systems modelling",
      "Optimization",
      "Engineering calculations",
      "Testing",
      "Troubleshooting",
    ],
  },
  {
    title: "PROJECT DELIVERY",
    items: [
      "Requirements analysis",
      "WBS",
      "Gantt scheduling",
      "Critical path analysis",
      "Risk registers",
      "RPN",
      "Technical documentation",
      "Stakeholder coordination",
    ],
  },
  {
    title: "PROGRAMMING & DATA",
    items: [
      "Python",
      "SQL",
      "JavaScript",
      "TypeScript",
      "PostgreSQL",
      "Git",
      "HTML",
      "CSS",
      "React",
    ],
  },
];

export const educationItems = [
  {
    degree: "Master of Engineering in Electrical and Computer Engineering",
    institution: "Ontario Tech University",
    location: "Oshawa, ON",
    date: "December 2025",
    distinction: "GPA: 4.21 / 4.30",
    coursework: [
      "Engineering Communication and Ethics",
      "Project Management for Engineers",
      "Advanced Engineering Mathematics",
      "Smart Grid Technology",
      "Electric Vehicles",
      "Advanced Optimization",
      "Pervasive and Mobile Computing",
    ],
    leadership: {
      title: "Orientation Leader",
      detail:
        "Supported campus-wide onboarding for 2,300+ incoming students during the Fall 2025 multi-day orientation.",
    },
  },
  {
    degree: "Bachelor of Engineering in Electrical Engineering and Management (Honours)",
    institution: "Ontario Tech University",
    location: "Oshawa, ON",
    date: "May 2019",
    distinction: "",
    // TODO: Add verified undergraduate course titles when supplied. The
    // duplicated resume coursework was intentionally not copied.
    coursework: [],
  },
];

export const experienceItems = [
  {
    company: "Dobson Partners",
    legalName: "8906386 Canada Limited",
    location: "Toronto, ON",
    roles: [
      {
        title: "Full-Stack Software Developer",
        dates: "Nov 2023 – May 2024 · Nov 2024 – Jun 2025",
      },
    ],
    highlights: [
      "Translated evolving operational requirements from management and cross-functional stakeholders into implemented platform changes, coordinating priorities and documenting delivered work.",
      "Tested, troubleshot, and refined production workflows involving document handling, identity verification, messaging, and transaction processes based on technical issues and stakeholder feedback.",
      "Designed structured data and process workflows supporting reliable information handling, secure user operations, and multi-step verification processes.",
    ],
  },
  {
    company: "ATS Group Inc.",
    legalName: "",
    location: "Toronto, ON",
    roles: [
      {
        title: "Full-Stack Web Application Developer, Freelance",
        dates: "Jan 2023 – Aug 2023",
      },
      {
        title: "Software Consulting Intern",
        dates: "Apr 2021 – Apr 2022",
      },
    ],
    highlights: [
      "Worked with management, executives, planners, developers, and clients to translate facilities-management needs into technical requirements and proposed system workflows.",
      "Identified operational and usability issues across maintenance workflows, contributing improvements that raised post-release client feedback from 3/5 to 5/5.",
      "Helped define features including GPS tracking, proof-of-work submissions, repair status updates, employee records, maintenance history, reporting, and role-based access controls.",
      "Created floor-plan mockups in AutoCAD Web and interactive web application prototypes to visualize facilities workflows and support technical demonstrations.",
      "Led demos, technical presentations, and project discussions to align technical and non-technical stakeholders.",
      "Designed, tested, and delivered a client-facing web solution from requirements through deployment.",
    ],
  },
  {
    company: "EME Group Inc.",
    legalName: "",
    location: "Toronto, ON",
    roles: [
      {
        title: "Web Developer, Freelance",
        dates: "Nov 2022 – Dec 2022",
      },
    ],
    highlights: [
      "Built and launched the first client-facing website in more than 20 years for an electrical and mechanical engineering firm, contributing to a reported 200%+ increase in inbound inquiries and continuing to provide occasional domain, hosting, and maintenance support.",
    ],
  },
];
