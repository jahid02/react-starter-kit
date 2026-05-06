# React Enterprise Starter Kit

A modern, scalable, and feature-rich React starter kit built with Vite and TypeScript. This repository is configured with everything you need to start building high-performance, maintainable React applications immediately.

## 🚀 Features

- **Framework:** [React 19](https://react.dev/) + [Vite](https://vitejs.dev/) for blazing-fast development and optimized production builds.
- **Language:** [TypeScript](https://www.typescriptlang.org/) for static type checking and better developer experience.
- **State Management:** [Redux Toolkit](https://redux-toolkit.js.org/) + RTK Query for state and data fetching.
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) configured as a Vite plugin.
- **Testing:** [Vitest](https://vitest.dev/) + React Testing Library for fast and reliable unit/component testing.
- **Code Quality:** Pre-configured ESLint for strict linting rules.
- **Absolute Imports:** Pre-configured path aliases (`@/`) to prevent messy relative paths.
- **Package Manager:** Uses `pnpm` for fast, disk-efficient dependency management.

---

## 📦 Getting Started

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18+ recommended)
- [pnpm](https://pnpm.io/) (v8+ recommended)

### Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd react-starter-kit-second
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Start the development server:**
   ```bash
   pnpm run dev
   ```
   Your app will now be running on `http://localhost:5173`.

---

## 🛠️ Available Scripts

In the project directory, you can run the following commands:

- `pnpm run dev`: Starts the Vite development server.
- `pnpm run build`: Compiles TypeScript and builds the app for production to the `dist` folder.
- `pnpm run preview`: Previews the production build locally.
- `pnpm run lint`: Runs ESLint to check for code quality and style issues.
- `pnpm run test`: Runs the Vitest test suite.
- `pnpm run test:ui`: Opens the Vitest UI in the browser for an interactive testing experience.
- `pnpm run test:coverage`: Runs tests and generates a test coverage report.

---

## 📂 Project Structure

This project enforces a clean, feature-based architecture to keep code scalable and easy to maintain.

```text
src/
├── app/               # Core application configuration (e.g., Redux store setup)
├── assets/            # Static assets like images, fonts, and global icons
├── components/        # Reusable, feature-agnostic UI components
├── features/          # Feature-based domain logic (slices, API logic, components)
│   ├── api/           # RTK Query base configuration
│   ├── auth/          # Authentication feature slice and API
│   └── categories/    # Categories feature slice and API
├── tests/             # Global test configurations and setups
├── index.css          # Global CSS (includes Tailwind directives)
├── main.tsx           # React application entry point
└── vite-env.d.ts      # Vite type definitions
```

---

## 🧩 Path Aliases

To keep imports clean and avoid "dot-dot-hell" (`../../../`), this template is configured with an `@` path alias pointing to the `src` directory.

**Instead of:**
```typescript
import { apiSlice } from '../../features/api/apiSlice';
```

**Use:**
```typescript
import { apiSlice } from '@/features/api/apiSlice';
```

This alias works across TypeScript (`tsconfig.json`), Vite (`vite.config.ts`), and Testing (`vitest.config.ts`).

---

## 🧪 Testing

This project uses **Vitest** (a Vite-native test runner) paired with **React Testing Library**.

- Write your tests in `.test.tsx` or `.test.ts` files alongside your components/features or within the `src/tests` folder.
- The testing environment is configured to run tests using jsdom.

To run tests in the terminal, you can use:
```bash
pnpm run test
```

## 📝 Environment Variables

If your project requires environment variables, you can create a `.env` file at the root of the repository.

```env
VITE_API_URL=https://api.yourdomain.com
```
*Note: Any environment variable that you want exposed to the client must be prefixed with `VITE_`.*
