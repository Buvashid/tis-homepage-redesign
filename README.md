# Tulas International School — Homepage Redesign

## Overview

This project is a modern, responsive redesign of the Tulas International School homepage, created as a frontend assessment.

## Features

- Responsive design for mobile, tablet, and desktop
- Editorial, school-focused visual design
- Scroll-triggered reveal animations
- Desktop fine-pointer custom cursor
- Scroll progress indicator
- Smooth anchor navigation
- Accessible interactive elements
- Reduced-motion support

## Tech Stack

- React
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React

## Project Structure

```text
src/
├── components/
│   ├── sections/    # Homepage sections and footer
│   ├── ui/          # Reusable interface components
│   └── animation/   # Global cursor and scroll animations
├── data/            # Shared section content
├── hooks/           # Reserved for project hooks
├── App.jsx          # Page composition
├── index.css        # Global styles and design tokens
└── main.jsx         # Application entry point
```

## Sections

- Navbar
- Hero
- About
- Experience
- Stats
- Academics
- Sports
- Campus Life
- Admissions
- Footer

## Standout Features

1. **Scroll-triggered reveals** use Framer Motion viewport animations for section content.
2. **Custom cursor** appears only on desktop fine-pointer devices and follows the pointer using performant motion values and springs. It expands subtly over interactive elements.
3. **Scroll progress** uses Framer Motion scroll progress and a spring-driven transform-based indicator.

## Responsive Testing

The design was tested at:

- 375px
- 768px
- 1280px

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

## Code Quality

The project uses a component-based architecture, semantic HTML, responsive/mobile-first considerations, reduced-motion support, and no unnecessary dependencies.
