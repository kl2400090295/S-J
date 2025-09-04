# Voice Journal Application

## Overview

This is a React-based voice journal application designed for singers and vocal performers to track their voice health and singing activities. The application provides a comprehensive daily tracking system that includes voice quality assessments, health metrics (hydration, sleep, hormonal status), nutrition tracking, and weekly activity planning. Users can log their voice condition at different times of the day (morning, evening, after singing) and maintain detailed notes about their vocal health journey.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React with TypeScript using Vite as the build tool
- **UI Components**: Utilizes shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS custom properties for theming
- **State Management**: React hooks (useState, useEffect) for local component state
- **Data Persistence**: Browser localStorage for client-side data storage
- **Routing**: Wouter for lightweight client-side routing
- **Type Safety**: Full TypeScript implementation with strict compiler settings

**Component Structure**:
- Modular UI components in `/client/src/components/ui/`
- Page components in `/client/src/pages/`
- Custom hooks in `/client/src/hooks/`
- Shared utilities in `/client/src/lib/`

### Backend Architecture

**Framework**: Express.js with TypeScript
- **Runtime**: Node.js with ES modules
- **Development**: tsx for TypeScript execution
- **Build Process**: esbuild for server bundling, Vite for client bundling
- **Database Integration**: Configured for PostgreSQL with Drizzle ORM
- **Session Management**: PostgreSQL session store with connect-pg-simple

**API Design**:
- RESTful API structure with `/api` prefix
- Centralized error handling middleware
- Request/response logging for development
- Type-safe route handlers

### Data Storage Solutions

**Database**: PostgreSQL with Neon Database serverless hosting
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Connection**: Serverless PostgreSQL adapter for edge runtime compatibility

**Current Schema**:
- User authentication system with username/password
- Extensible schema structure for adding voice journal data models

**Client Storage**:
- localStorage for offline data persistence
- JSON serialization for complex data structures
- Automatic data loading on application startup

### Authentication and Authorization

**Strategy**: Session-based authentication
- PostgreSQL session store for server-side session management
- Credential-based authentication flow
- User model with unique username constraints
- Password storage (implementation pending)

### External Dependencies

**UI Framework**:
- Radix UI for accessible component primitives
- Lucide React for consistent iconography
- Tailwind CSS for utility-first styling
- shadcn/ui for pre-built component patterns

**Development Tools**:
- Vite with React plugin for fast development
- Replit integration plugins for cloud development
- PostCSS with autoprefixer for CSS processing

**Data Management**:
- TanStack Query for server state management
- React Hook Form with Zod resolvers for form validation
- date-fns for date manipulation utilities

**Database & Backend**:
- Drizzle ORM with PostgreSQL dialect
- Neon Database serverless PostgreSQL
- Express.js with TypeScript support
- esbuild for production bundling

**Utility Libraries**:
- clsx and tailwind-merge for conditional styling
- class-variance-authority for component variant management
- Embla Carousel for interactive components
- cmdk for command palette functionality