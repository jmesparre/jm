# System Patterns

This document outlines the system architecture, key technical decisions, design patterns in use, component relationships, and critical implementation paths.

## Architecture Overview

The project follows a modern web application architecture based on Next.js, which supports both server-side rendering (SSR) and static site generation (SSG). This allows for performance optimizations like faster initial page loads and improved SEO. The frontend is built with React, utilizing a component-based structure. The architecture now includes backend components for handling contact form submissions and a headless CMS for managing blog content.

## Key Technical Decisions

- **Framework:** Next.js was chosen for its flexibility in rendering (SSR/SSG), built-in routing, API routes, and overall developer experience with React.
- **Styling:** Tailwind CSS is used for utility-first styling, enabling rapid UI development and consistent design.
- **Component Library:** Radix UI is likely used for building accessible and unstyled components, which are then styled with Tailwind CSS (as suggested by the presence of `@radix-ui/react-slot` and `class-variance-authority`). shadcn/ui components are also being used.
- **Animation:** The `motion` library is included for handling animations, suggesting a focus on dynamic and engaging UI elements.
- **Backend for Contact Form:** Decision pending between Supabase and Netlify Functions for handling contact form submissions. This will involve setting up an API endpoint to receive form data.
- **Headless CMS for Blog:** Decision pending between Sanity and Strapi for managing blog content. This will involve integrating the frontend to fetch data from the chosen CMS API.

## Design Patterns

- **Component-Based Architecture:** The project is structured around reusable React components (e.g., components/ui, components/blocks).
- **Utility-First CSS:** Leveraging Tailwind CSS for styling promotes a utility-first approach.
- **API Routes:** Next.js API routes will be used for the contact form backend integration.
- **Data Fetching:** Data fetching patterns will be implemented to retrieve blog content from the headless CMS.

## Component Relationships

- UI components (like Button, Card, Carousel from `components/ui`) serve as building blocks.
- Block components (like `gallery4.tsx`, `demo.tsx` in `components/blocks`) compose UI components and other elements to form larger sections of the page.
- Pages (`app` directory) assemble blocks and other components to create the final user interface.
- Contact form components will interact with Next.js API routes.
- Blog pages and components will fetch data from the headless CMS.

## Critical Implementation Paths

- **Page Rendering:** How Next.js handles routing and renders pages (SSR/SSG).
- **Component Composition:** How UI and block components are combined to build pages.
- **Styling Application:** How Tailwind CSS utilities and potentially custom CSS are applied to components.
- **Contact Form Integration:** Implementing the frontend form and the backend API endpoint.
- **Headless CMS Integration:** Setting up the CMS, defining content models, and fetching data in the frontend.
- **Dynamic Routing:** Implementing dynamic routes for individual service pages and blog posts.
