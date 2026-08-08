# Suhas Sunder - Engineering Portfolio

A purpose-built engineering portfolio for Suhas Sunder, Engineer-in-Training
with Engineers and Geoscientists BC.

The site presents engineering identity first: EIT registration, an MEng in
Electrical and Computer Engineering, substantive academic and independent
engineering projects, project-delivery capability, and transferable professional
software experience.

## Portfolio structure

- Engineering-first hero and broad mobility / work availability
- Recruiter-readable technical skills grouped by tools, analysis, delivery, and programming
- Engineering project case studies organized by objective, contribution, methods, and outcome
- Education and EIT credential
- Professional technical delivery experience
- Accessible contact information and Formspree contact form

## Technical foundation

- React
- TypeScript
- Native single-page section navigation
- Tailwind CSS
- React Testing Library and Jest
- Root canonical URL, legacy-path fallback, and Formspree contact submission

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
verified Google Drive resume page URL to `resumeUrl` in `src/config/site.ts` to
enable the single navigation Resume button.

## Content TODOs

- Add the verified Google Drive resume page URL.
- Add verified MATLAB/Simulink model screenshots, plots, or report excerpts.
- Add verified engineering construction-planning artifacts such as the Gantt,
  WBS, or risk-register excerpt.
- Add exact BEng coursework when supplied; duplicated placeholder coursework is
  intentionally omitted.
