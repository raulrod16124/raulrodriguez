<div align="center">
  <a href="https://raulrodriguez.dev/">
    <img src="./public/favicon.svg" alt="Raúl Rodríguez logo" width="96" height="96" />
  </a>
  <h1>Raúl Rodríguez</h1>
  <p>Senior Frontend Engineer</p>
  <p>
    <a href="https://raulrodriguez.dev/">Live site</a> ·
    <a href="https://www.linkedin.com/in/raul-rod/">LinkedIn</a> ·
    <a href="https://github.com/raulrod16124">GitHub</a> ·
    <a href="mailto:raul.rod16124@gmail.com">Email</a>
  </p>
</div>

## About

Personal portfolio of Raúl Rodríguez, a Senior Frontend Engineer with 5+ years of
experience building scalable React products, design systems and frontend
architecture. Currently at Openbank · Capgemini.

The site is a single-page portfolio available in English and Spanish. It combines
real project captures, a career timeline and an accessible CV preview, with a
focus on maintainable frontend work. The years of experience
shown in the About section are calculated dynamically from the career start date.

## Live site

- Portfolio: https://raulrodriguez.dev/

## What's inside

| Section        | Anchor         | Content                                                        |
| -------------- | -------------- | -------------------------------------------------------------- |
| Hero           | `#home`        | Role, current company, value proposition and main calls to action |
| What I do      | `#what-i-do`   | Product frontends, design systems and frontend architecture    |
| Selected Work  | `#work`        | Cachiplunca, raulrod-ui, Chicmouse and Stellar Fusion          |
| Experience     | `#experience`  | Openbank · Capgemini, Vehnet, Advance Digital Experts and freelance work |
| About          | `#about`       | Profile summary and accessible CV dialog                       |
| Contact        | `#contact`     | Email, GitHub, LinkedIn and CV                                 |

The navbar links to the main sections and marks the active one while scrolling.
Legacy routes (`/home`, `/experience`, `/expertise` and `/contact`) redirect to the
matching anchors. Unknown routes return to the homepage.

## Tech stack

| Area            | Tools                                                                 |
| --------------- | --------------------------------------------------------------------- |
| Core            | React 18.3, TypeScript 5.5 (strict), Vite 5.4                         |
| UI and styling  | styled-components 6, `@raulrod/ui`, `@raulrod/tokens`                 |
| Iconography     | `@raulrod/icons` for UI icons, `react-icons` for brand marks          |
| Content and i18n| `react-intl` with typed English and Spanish message catalogs          |
| Routing         | `react-router-dom` 6 for the homepage and legacy redirects            |
| Documents       | `react-pdf` with a local PDF worker                                   |
| Testing         | Vitest 2, Testing Library, jest-dom and V8 coverage                   |
| Deployment      | `gh-pages`                                                            |

## Project structure

```text
src/
  components/     # Navbar, footer, section shell and CV dialog
  sections/       # Hero, What I do, Work, Experience, About, Contact
  content/        # Global site data
  i18n/           # Locale detection, provider and EN/ES message catalogs
  helpers/        # Experience years calculation
  hooks/          # Hash scroll, active section, scroll state and viewport
  assets/         # Avatar, CV and project captures
  styles/         # @raulrod/ui token bridge
  theme/          # Portfolio design tokens
```

Sections consume content, helpers, hooks and shared components. Content and helpers
do not depend on React, and sections do not import each other. The `docs/`
directory is local-only and ignored by Git.

## Content and internationalization

All visible copy is defined in `src/i18n/messages/en.ts` and
`src/i18n/messages/es.ts`. Components read it through `useSiteContent`, which also
formats dates and interpolates values such as the current company and years of
experience.

The locale is detected from `localStorage` first, then from the browser language,
and defaults to English. The navbar language toggle persists the selected locale
under `rr-locale` and updates the document `lang`, title and meta description.

To add a new string, add the same key to both catalogs and use it through
`useSiteContent` or `react-intl`.

## Images and iconography

- Project captures are real WebP images stored in `src/assets/images/projects/`.
- Project images use descriptive `alt` text, `loading="lazy"`, `decoding="async"`
  and explicit dimensions to avoid layout shifts.
- The hero avatar is served as WebP with a PNG fallback.
- The logo is an inline SVG and the favicon lives in `public/favicon.svg`.
- UI icons come from `@raulrod/icons`; `react-icons` is only used for GitHub and
  LinkedIn brand marks.

## Scripts

```bash
yarn dev             # Start the development server
yarn test            # Run Vitest in watch mode
yarn test --run      # Run the test suite once
yarn test:coverage   # Run the test suite with coverage
yarn build           # Type-check and build for production
yarn lint            # Run ESLint
yarn preview         # Preview the production build
yarn deploy          # Publish the existing dist folder to GitHub Pages
yarn gh-deploy       # Build and publish to GitHub Pages
```

## Development

Requirements: Node.js 18+ (required by Vite 5) and Yarn.

```bash
git clone https://github.com/raulrod16124/raulrodriguez.git
cd raulrodriguez
yarn install
yarn dev
```

Before opening a pull request, run:

```bash
yarn test --run
yarn build
yarn lint
```

## Accessibility, SEO and performance

- Semantic landmarks, one H1 per page and heading levels per section.
- Skip link, visible focus styles, keyboard navigation and `prefers-reduced-motion`
  support.
- WCAG AA contrast for text and controls.
- Accessible CV dialog with focus management, Escape handling and announced loading
  states.
- Localized title, description, Open Graph and Twitter metadata, JSON-LD, canonical
  URL, sitemap, robots file and GitHub Pages redirects.
- WebP images, lazy loading for project captures and a local `react-pdf` worker.

## Selected work

- **Cachiplunca** — [Live](https://raulrod16124.github.io/cachiplunca/) · [GitHub](https://github.com/raulrod16124/cachiplunca)
- **raulrod-ui** — [npm](https://www.npmjs.com/package/@raulrod/ui) · [Storybook](https://raulrod16124.github.io/raulrod-ui/) · [GitHub](https://github.com/raulrod16124/raulrod-ui)
- **Chicmouse** — [Live](https://chicmouse.com/)
- **Stellar Fusion: Merge Puzzle** — [Google Play](https://play.google.com/store/apps/details?id=com.stellarmerge.app)

## Contact

- [LinkedIn](https://www.linkedin.com/in/raul-rod/)
- [GitHub](https://github.com/raulrod16124)
- Email: raul.rod16124@gmail.com
