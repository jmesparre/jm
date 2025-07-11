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
- Completed review of all `page.tsx` files in `app/` directory. No significant structural changes or new functionalities found beyond what is already documented; content is primarily informative and uses existing components.
- Implemented a sequential image preloading system to improve navigation performance.
- The preloading logic is centralized in `PageWrapper.tsx`.
- The system preloads the main image of the *next* page in the navigation sequence only after the current page has fully loaded.
- Obsolete preloading components (`ClientSidePreloader.tsx`, `ImagePreloader.tsx`) were removed.
- Changes were committed and pushed to the remote repository.
- **Implemented a robust internationalization (i18n) system:**
    - Installed and configured `i18next-http-backend` to dynamically load translation files.
    - Centralized the `i18next` configuration in `src/i18n.js`.
    - Refactored `I18nProvider` to remove duplicate code and use the central configuration.
    - Translated all hardcoded text in the header and project cards.
    - Cleaned up the root layout to be a server component and use reliable relative paths.
- **Updated the language switcher button in the header:**
    - Replaced the two separate "EN" and "ES" buttons with a single, dynamic button.
    - The button now displays the opposite language (e.g., shows "EN" when the site is in Spanish).
    - Added the "Earth" icon from `lucide-react` to the button for better user experience.

## Next Steps

- Continue to implement remaining sections and features as outlined in `projectbrief.md` and `progress.md`.
- Develop content for the "Sobre Mí" page (if not already completed).
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
- Centralizing navigation-related logic (like sequential preloading) within a wrapper component (`PageWrapper.tsx`) that has access to routing context (`pathname`) is an effective and clean architectural pattern.
- Delaying non-critical background tasks (like preloading) until after the `window.load` event is a good strategy to optimize the initial page load time (Time to Interactive).
