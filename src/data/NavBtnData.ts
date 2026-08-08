export interface NavChildItem {
  id: string;
  url: string;
  text: string;
}

export interface NavItem {
  id: string;
  url: string;
  text: string;
  type: "nav-link";
  typeMobile: "mobile-nav-link";
  hashLink: true;
  children?: NavChildItem[];
}

const NavBtnData: NavItem[] = [
  {
    id: "nav-skills",
    url: "/#skills",
    text: "Skills",
    type: "nav-link",
    typeMobile: "mobile-nav-link",
    hashLink: true,
  },
  {
    id: "nav-projects",
    url: "/#projects",
    text: "Projects",
    type: "nav-link",
    typeMobile: "mobile-nav-link",
    hashLink: true,
    children: [
      { id: "nav-arc-fault", url: "/#arc-fault", text: "Arc Fault Detection" },
      {
        id: "nav-power-system-algorithms",
        url: "/#power-system-algorithms",
        text: "Power System Algorithms",
      },
      { id: "nav-bev", url: "/#bev-simulation", text: "BEV Simulation" },
      {
        id: "nav-construction",
        url: "/#construction-planning",
        text: "Construction Planning",
      },
      { id: "nav-sensor", url: "/#sensor-planner", text: "Sensor Planner" },
    ],
  },
  {
    id: "nav-education",
    url: "/#education",
    text: "Education",
    type: "nav-link",
    typeMobile: "mobile-nav-link",
    hashLink: true,
  },
  {
    id: "nav-experience",
    url: "/#experience",
    text: "Experience",
    type: "nav-link",
    typeMobile: "mobile-nav-link",
    hashLink: true,
    children: [
      {
        id: "nav-dobson",
        url: "/#dobson-partners",
        text: "Dobson Partners",
      },
      { id: "nav-ats", url: "/#ats-group", text: "ATS Group" },
      { id: "nav-eme", url: "/#eme-group", text: "EME Group" },
    ],
  },
  {
    id: "nav-contact",
    url: "/#contact",
    text: "Contact",
    type: "nav-link",
    typeMobile: "mobile-nav-link",
    hashLink: true,
  },
];

export default NavBtnData;
