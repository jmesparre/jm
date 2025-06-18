# Active Context

This document captures the current focus of work, recent changes, next steps, active decisions, important patterns, learnings, and project insights.

## Current Work Focus

Maintaining and updating the project structure and components based on user requests, and ensuring the memory bank documentation is accurate and up-to-date.

## Recent Changes

- Created the `/servicios/desarrollo-web` page.
- Updated `app/servicios/page.tsx` to include a link to `/servicios/desarrollo-web`.
- Created the `/servicios/servicios-de-diseño` page.
- Updated `components/blocks/animated-slideshow-demo.tsx` to link "slide-1" to `/servicios/desarrollo-web` and "slide-2" to `/servicios/servicios-de-diseño`.
- Corrected the URL issue with the "ñ" character:
    - Renamed `app/servicios/servicios-de-diseño` directory to `app/servicios/servicios-de-diseno`.
    - Updated links in `animated-slideshow-demo.tsx` and `app/servicios/page.tsx` to use `/servicios/servicios-de-diseno`.
- Created the `/blog` page and `app/blog/page.tsx`.
- Added the `Blog8` component (`components/blocks/blog8.tsx`) and its demo (`components/blocks/blog8-demo.tsx`).
- Added the `Card` ShadCN UI component (`components/ui/card.tsx`).
- Created the `/sobre-mi` page (`app/sobre-mi/page.tsx`).
- Updated `components/PageWrapper.tsx` to include `/sobre-mi` in the navigation order.
- Installed `lucide-react` as a dependency.
- Integrated `Blog8Demo` into `app/proyectos/page.tsx`.
- Updated `memory-bank/ShadCN-context.md` to include `Card`.

## Next Steps

- Continue to implement remaining sections and features as outlined in `projectbrief.md` and `progress.md`.
- Develop content for the "Sobre Mí" page.
- Address any new user requests for modifications or additions.
- Ensure all new components and pages are properly integrated and functional.
- Regularly update memory bank files to reflect project status and decisions.

## Active Decisions and Considerations

- The project continues to expand with new pages and components.
- The issue with special characters in URLs has been addressed by renaming the directory and updating relevant links.
- The choice of backend technology (Supabase vs Netlify Functions) and headless CMS (Sanity vs Strapi) for future integrations remains pending.

## Important Patterns and Preferences

- Use of Next.js App Router (`app` directory).
- Component organization within `components/ui` (for ShadCN components) and `components/blocks` (for larger, composite blocks).
- Utility-first styling with Tailwind CSS.
- Use of shadcn/ui components.
- Integration with external backend and CMS services will be a future focus.

## Learnings and Project Insights

- Special characters in URLs can cause routing issues in Next.js, requiring careful handling (e.g., renaming paths to use ASCII-compatible characters).
- Modular component design (e.g., `Blog8` and `Blog8Demo`) facilitates easier integration and reusability.
- Consistent documentation of ShadCN components in `ShadCN-context.md` helps avoid redundant installations.
