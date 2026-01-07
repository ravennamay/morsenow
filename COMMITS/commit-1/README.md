# Commit 1: Initial Project Setup and Boilerplate

## Overview
Foundation of **SignalCode** - a modern morse code translator. Sets up Next.js with TypeScript, basic layout structure, styling infrastructure, and Tailwind CSS configuration.

### What is SignalCode?
SignalCode is an instant morse code translator with real-time conversion, audio playback, and support for bidirectional translation (Text ↔ Morse). It features a modern minimalist design with dark/light themes, multi-language support (English & Portuguese), and full accessibility compliance.

**Morse Code Support:**
- ✅ Letters (A-Z), Numbers (0-9), Common punctuation
- ✅ Audio playback (600Hz sine wave)
- ✅ Bidirectional conversion
- ❌ Accented characters (á, é, ç, ñ, etc.) - See [MORSE_RULES.md](../../MORSE_RULES.md)

## What's Implemented

### ✅ Project Structure
- Next.js 15.1.0 with React 19
- TypeScript configuration
- Basic app layout (`src/app/layout.tsx`)
- Home page (`src/app/page.tsx`)

### ✅ Styling Infrastructure
- Tailwind CSS 3.4 configured
- CSS variables for colors and spacing
- Global styles (`globals.css`)
- Theme variables foundation (`theme-variables.css`)
- PostCSS configuration

### ✅ UI Components Base
- Card primitive component (src/components/ui/card.tsx)
- Button primitive component (src/components/ui/button.tsx)
- Basic layout structure

### ✅ Project Configuration
- `tsconfig.json` with path aliases (@/*)
- `next.config.ts` with security headers
- `package.json` with dependencies
- `tailwind.config.ts`
- `prettier.config.mjs`
- `components.json` for shadcn/ui

## Dependencies at This Stage

```json
{
  "next": "^15.1.0",
  "react": "^19.0.0",
  "react-dom": "^19.0.0",
  "tailwindcss": "^3.4.15",
  "tailwindcss-animate": "^1.0.7",
  "class-variance-authority": "^0.7.0",
  "clsx": "^2.1.1",
  "tailwind-merge": "^2.5.4"
}
```

## Key Files

- `src/app/layout.tsx` - Root layout
- `src/app/page.tsx` - Home page
- `src/styles/globals.css` - Global styles
- `src/styles/theme-variables.css` - CSS variables
- `tailwind.config.ts` - Tailwind configuration
- `next.config.ts` - Next.js configuration
- `tsconfig.json` - TypeScript configuration
- `package.json` - Project dependencies

## What's NOT Implemented Yet

- ❌ Theme toggle functionality
- ❌ Internationalization (i18n)
- ❌ Language selector
- ❌ Morse code translation
- ❌ Top navigation header
- ❌ Bidirectional translation
- ❌ Translation logic

## Morse Code Information

For detailed information about morse code rules, supported characters, and limitations (especially regarding accented characters), see [MORSE_RULES.md](../../MORSE_RULES.md) in the root directory.

**Quick Reference:**
- **Supported:** A-Z, 0-9, `.`, `,`, `?`, `'`, `!`, `/`, `(`, `)`, `&`, `:`, `;`, `=`, `+`, `-`, `_`, `"`, `$`, `@`
- **Not Supported:** Accents (á, é, ç, ñ, etc.), emoji, special unicode characters
- **Spaces:** Represented as `/` in morse code

## Getting Started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` to see the basic page structure.

## Next Commit

The next commit will add theme system implementation with next-themes and a theme toggle button.
