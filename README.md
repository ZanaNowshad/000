# ZAIBuilD

ZAIBuilD is a next-generation, AI-driven full-stack IDE and orchestration platform built on modern web technologies.

## Overview

This repository contains the initial setup for the ZAIBuilD project. The full implementation will be added through pull requests.

## Features

- **AI-Powered Development**: Leverage GPT-4 Turbo for code generation, project scaffolding, and intelligent assistance
- **Integrated Workspace**: In-browser development environment with code editor, terminal, and live preview
- **Project Management**: Create, organize, and manage your projects with an intuitive dashboard
- **Real-time Collaboration**: Work together with team members in real-time
- **Responsive Design**: Seamless experience across desktop and mobile devices

## Tech Stack

- **Frontend**: Next.js 14 (App Router, React Server Components, Edge Runtime), React 18, TypeScript
- **Styling**: Tailwind CSS, Radix UI, Lucide icons
- **Animations**: Framer Motion, GSAP ScrollTrigger, Lottie, three.js/react-three-fiber
- **Backend**: Vercel Edge Functions, PlanetScale, Prisma, MySQL
- **API**: tRPC, Zod
- **Authentication**: Clerk/NextAuth.js, OAuth, JWT, Twilio 2FA
- **Development Environment**: Monaco Editor, WebContainers (Sandpack), xterm.js
- **State Management**: XState, React Context
- **Testing**: Jest, React Testing Library, Playwright
- **CI/CD**: GitHub Actions

## Project Structure

```
zaibuld/
├── apps/
│   └── web/                 # Next.js web application
├── packages/
│   ├── ai/                  # AI services and utilities
│   ├── api/                 # tRPC API definitions
│   ├── config/              # Shared configurations
│   │   ├── eslint/          # ESLint configurations
│   │   └── tsconfig/        # TypeScript configurations
│   └── ui/                  # Shared UI components
├── .github/
│   └── workflows/           # GitHub Actions workflows
├── package.json             # Root package.json
├── pnpm-workspace.yaml      # PNPM workspace configuration
└── turbo.json               # Turborepo configuration
```

## Getting Started

### Prerequisites

- Node.js 18+
- PNPM 8+

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/zaibuld.git
   cd zaibuld
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Set up environment variables:
   ```bash
   cp apps/web/.env.example apps/web/.env.local
   # Edit .env.local with your configuration
   ```

4. Start the development server:
   ```bash
   pnpm dev
   ```

5. Open [http://localhost:12000](http://localhost:12000) in your browser.

## Development Workflow

### Commands

- `pnpm dev` - Start the development server
- `pnpm build` - Build all packages and applications
- `pnpm lint` - Run ESLint on all packages
- `pnpm test` - Run tests for all packages

### Adding a New Package

1. Create a new directory in `packages/`
2. Add a `package.json` file with the appropriate configuration
3. Add the package to `pnpm-workspace.yaml`
4. Install the package in the desired application:
   ```bash
   pnpm add @zaibuld/your-package --workspace
   ```

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)
- [tRPC](https://trpc.io/)
- [Turborepo](https://turbo.build/repo)
- [Framer Motion](https://www.framer.com/motion/)
- [GSAP](https://greensock.com/gsap/)
- [Three.js](https://threejs.org/)
- [Sandpack](https://sandpack.codesandbox.io/)