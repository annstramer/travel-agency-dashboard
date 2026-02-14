# Travel Agency Admin Dashboard with AI Image Generation

[![Next.js](https://img.shields.io/badge/Next.js-brightgreen)](https://nextjs.org/docs)
[![React Router](https://img.shields.io/badge/React-brightgreen)](https://reactrouter.com/start/framework/routing)
[![Node.js](https://img.shields.io/badge/Node.js-brightgreen)](https://nodejs.org/docs/latest/api/)
[![Vite](https://img.shields.io/badge/Vite-brightgreen)](https://vite.dev/guide/)
[![Gemini API](https://img.shields.io/badge/API-Gemini-lightblue)](https://ai.google.dev/gemini-api/docs)
[![Unsplash API](https://img.shields.io/badge/API-Unsplash-lightblue)](https://unsplash.com/documentation)
[![Appwrite API](https://img.shields.io/badge/API-Appwrite-purple)](https://appwrite.io/docs/references/cloud/client-web/databases)
[![Syncfusion API](https://img.shields.io/badge/API-Syncfusion-purple)](https://help.syncfusion.com/)
[![HTML5](https://img.shields.io/badge/HTML5-violet)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![TypeScript](https://img.shields.io/badge/TypeScript-blue)](https://www.typescriptlang.org/docs/)

A role-based administrative dashboard for managing travel bookings and destinations, featuring authenticated routing, protected data access, and AI-powered image generation using Unsplash and AI-powered trip generation using Gemini.
Status: Development build. Not publicly deployed due to production-level backend authorization and database hardening requirements.

## Overview
This project simulates an internal travel agency management system designed for authenticated administrative users. The dashboard enables structured management of travel destinations and bookings while integrating AI-generated imagery to dynamically enhance destination content.
The primary objective of the build was architectural: to explore authenticated application flow, role-gated routing, structured dashboard composition, and safe integration of third-party AI services within a controlled application environment.

## Core Features
🔐 Authentication & Protected Routing
- Login-gated admin access
- Conditional route rendering based on authentication state
- Redirect handling for unauthorized users
- Session-aware UI composition

🧭 Dashboard Architecture
- Modular dashboard layout
- Segmented management views (destinations, bookings, etc.)
- CRUD-style interface patterns
- Reusable data tables and controlled form components

🌍 AI Image Generation (Gemini Integration)
- Dynamic image generation for travel destinations
- Prompt-based image creation tied to user-defined country selections
- Asynchronous request handling
- Loading state management during AI response cycles
- Graceful UI fallback handling for generation latency

The Gemini integration required coordinating:
- Secure API key handling (development environment)
- Client-triggered server-side requests
- Async data synchronization with UI updates
- State reconciliation after AI response resolution

## Architectural Focus
This project emphasized:
- Separation of layout, view modules, and data logic
- Role-aware UI gating vs. true backend authorization
- Controlled mutation patterns
- Async request lifecycle management
- Conditional rendering based on system state
- Component-level encapsulation for dashboard scalability

Authentication state determines:
- Route accessibility
- Navigation visibility
- Data fetch permissions
- Administrative action controls
-
## Technology Stack
- Next.js
- React Router
- Vite
- Node.js API routes
- Unsplash API (AI image generation)
- Gemini API (AI trip generation)
- Appwrite Database
- Development database integration
- component-scoped styling
- Syncfusion components

## Security & Deployment Considerations
While the frontend architecture, authentication flow, and AI integration are functionally complete, the backend layer was not hardened for production deployment.
Specifically:
- Server-side role enforcement requires stricter validation.
- Database query validation and sanitization require production-level safeguards.
- Environment variable management and API key protection need hardened deployment configuration.
- Rate limiting and abuse protection for AI endpoint usage were not implemented.

Because this application includes administrative data management and external API access, I chose not to deploy it publicly without fully implementing production-grade security controls.
The repository remains available as an architectural demonstration of authenticated dashboard systems and AI service integration.

## Engineering Takeaways
Through this project, I deepened my understanding of:
- Designing authenticated systems with layered access control
- Coordinating frontend route gating with backend authorization
- Integrating third-party AI services into structured applications
- Managing asynchronous workflows across UI and server boundaries
- Evaluating when an application is not yet production-ready

## Running Locally

npm install

npm run dev

Requires environment variables for:
- Database connection
- Unsplash API key
- Gemini API key
- Syncfusion API key
  
See .env.example for configuration structure.

##Future Enhancements
- Hardened backend authorization middleware
- Server-side role validation enforcement
- Rate limiting and AI usage safeguards
- Production-safe deployment configuration
- Improved error handling and logging layer
- 