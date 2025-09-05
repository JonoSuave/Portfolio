# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React + TypeScript portfolio website built with Vite and styled using Tailwind CSS and shadcn/ui components. The project uses Framer Motion for animations and includes Supabase integration.

## Common Commands

### Development
```bash
npm run dev        # Start development server with HMR
npm run preview    # Preview production build locally
```

### Building & Deployment
```bash
npm run build      # TypeScript check + production build
npm run lint       # Run ESLint with TypeScript checks
```

### Supabase Types
```bash
npm run types:supabase   # Generate TypeScript types from Supabase schema
```

## Architecture

### Component Structure
The application follows a single-page application pattern with smooth scrolling between sections:

- **Main App** (`src/App.tsx`): Routes management using React Router
- **Home Component** (`src/components/home.tsx`): Main landing page orchestrator that:
  - Manages section navigation and active section state
  - Coordinates smooth scrolling between sections
  - Applies Framer Motion animations for section visibility

### Key Sections
- `HeroSection`: Landing hero with introduction
- `SkillsSection`: Technical skills showcase  
- `ProjectsGrid`: Portfolio projects display
- `ContactSection`: Contact information
- `SideNavigation`: Fixed navigation sidebar
- `BackgroundDesign`: Visual background wrapper

### UI Component Library
Located in `src/components/ui/`: Pre-built shadcn/ui components using Radix UI primitives. These components follow a consistent pattern with class variance authority (CVA) for styling variants.

### Path Aliases
- `@/*` maps to `./src/*` for clean imports

### Styling
- Tailwind CSS with custom theme configuration
- CSS variables for theme colors defined in CSS
- shadcn/ui component library with Radix UI primitives
- Framer Motion for animations

### State Management
- React hooks for local component state
- Supabase client for potential data fetching (`src/lib/supabase.ts`)

### Environment Variables
Required for Supabase integration:
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`
- `VITE_BASE_PATH` (optional, for deployment path)
- `VITE_TEMPO` (for Tempo dev tools integration)

### Build Configuration
- Vite with React SWC plugin for fast builds
- TypeScript with non-strict mode (`strict: false`)
- Tempo dev tools integration when enabled
- Dynamic base path for deployment flexibility