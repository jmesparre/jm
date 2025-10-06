# Technical Context

This document details the technologies used, the development setup, technical constraints, dependencies, and tool usage patterns.

## Technologies Used

- **Framework:** Next.js (v15.3.2)
- **Language:** TypeScript
- **Frontend Library:** React (v19.0.0)
- **Styling:** Tailwind CSS (v4)
- **Component Libraries:** Radix UI (via `@radix-ui/react-slot`), shadcn/ui (implied by `components.json` and `components/ui` directory structure)
- **Animation:** Motion (v12.12.1)
- **Carousel:** Embla Carousel React (v8.6.0)
- **Icons:** Lucide React (v0.511.0)
- **Linting:** ESLint (v9)
- **Package Manager:** npm (based on `package-lock.json`)
- **Backend (Contact Form):** Decision pending between Supabase and Netlify Functions.
- **Headless CMS (Blog):** Decision pending between Sanity and Strapi.

## Development Setup

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Run the development server using `npm run dev`.
4. Build the project using `npm run build`.
5. Start the production server using `npm run start`.
6. Run linting using `npm run lint`.
7. Additional setup will be required based on the chosen backend and headless CMS solutions.

## Technical Constraints

- Project is built with Next.js, requiring a Node.js environment.
- Styling relies heavily on Tailwind CSS utility classes.
- Component structure follows React and potentially shadcn/ui conventions.
- Integration with external services (backend endpoint, headless CMS) will introduce external dependencies and potential API constraints.

## Dependencies

- `next`: The Next.js framework.
- `react`, `react-dom`: React libraries for building the UI.
- `typescript`: For type safety.
- `i18next`, `react-i18next`, `i18next-browser-languagedetector`, `i18next-http-backend`: For internationalization (i18n).
- `tailwindcss`, `@tailwindcss/postcss`: For styling.
- `@radix-ui/react-slot`, `class-variance-authority`: Likely used for shadcn/ui components.
- `embla-carousel-react`: For carousel functionality.
- `lucide-react`: For icons.
- `motion`: For animations.
- `tailwind-merge`: For merging Tailwind CSS classes.
- `eslint`, `eslint-config-next`, `@eslint/eslintrc`: For linting.
- Additional dependencies will be required for the chosen backend and headless CMS integrations.

## Tool Usage Patterns

- **Development Server:** `npm run dev` is used for local development with hot-reloading.
- **Building:** `npm run build` compiles the project for production.
- **Linting:** `npm run lint` is used to enforce code style and identify potential issues.
- **Component Management:** The presence of `components.json` suggests the use of a tool like the shadcn/ui CLI for managing UI components.
- **Backend/CMS Tools:** Tools specific to the chosen backend (Supabase CLI, Netlify CLI) and headless CMS (Sanity CLI, Strapi CLI) will be used for setup, development, and content management.
