# Suhas Sunder — Engineering Portfolio

A purpose-built electrical and computer engineering portfolio for Suhas Sunder,
Engineer-in-Training with Engineers and Geoscientists BC.

The site presents engineering identity first: EIT registration, an MEng in
Electrical and Computer Engineering, substantive academic and independent
engineering projects, project-delivery capability, and transferable professional
software experience.

## Portfolio structure

- Engineering-first hero and relocation status
- Engineering focus and capabilities
- Detailed engineering project case studies
- Categorized engineering tools, analysis, delivery, and programming skills
- Education and EIT credential
- Professional technical delivery experience
- Accessible contact information and Formspree contact form

## Technical foundation

- React
- TypeScript
- React Router / hash navigation
- Tailwind CSS
- React Testing Library and Jest
- Netlify-compatible routing and Formspree contact submission

## Local development

```bash
npm install
npm start
```

Run the automated checks with:

```bash
npm test -- --runInBand
npm run build
```

## Resume configuration

The legacy software-development resume is intentionally not exposed. Add the
verified engineering resume URL or asset in `src/config/site.ts` before enabling
the prominent resume controls.

## Content TODOs

- Add the verified engineering-resume PDF.
- Add verified MATLAB/Simulink model screenshots, plots, or report excerpts.
- Add verified engineering construction-planning artifacts such as the Gantt,
  WBS, or risk-register excerpt.
- Add exact BEng coursework when supplied; duplicated placeholder coursework is
  intentionally omitted.
