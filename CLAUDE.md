# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with HMR
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Architecture

This is a React + Vite application with Tailwind CSS for styling. The project uses:

- **Build Tool**: Vite with React plugin for fast development and HMR
- **Styling**: Tailwind CSS v4 with PostCSS
- **Linting**: ESLint with React Hooks and React Refresh plugins

### Key Configuration

- **Vite Config** (`vite.config.js`): Standard React plugin setup
- **ESLint Config** (`eslint.config.js`): Configured for React with hooks rules and custom unused vars pattern (`^[A-Z_]`)
- **Tailwind Config** (`tailwind.config.js`): Configured to scan HTML and JS/JSX files in src/

### Project Structure

- `src/App.jsx` - Main application component with Tailwind-styled counter demo
- `src/main.jsx` - React app entry point with StrictMode
- `src/index.css` - Global CSS with Tailwind directives
- `public/` - Static assets including Vite logo
- `src/assets/` - Component assets including React logo

The application is currently a basic Vite + React template with Tailwind CSS integration, featuring a styled counter component as a demo.