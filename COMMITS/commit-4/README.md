# Commit 4: Language Selector Component with Flags

## Overview
Create language selector component with country flag emojis and language switching functionality. Allows users to easily switch between supported languages.

## What's Implemented in This Commit

### ✅ Language Selector Component
- `LanguageSelector` component with flag buttons
- Country flags display (🇧🇷 PT, 🇺🇸 EN)
- Language labels for desktop (hidden on mobile)
- Visual indicator of active language
- Click to switch languages

### ✅ Styling and UX
- Rounded container with muted background
- Active language highlighted with primary color
- Hover effects for better interactivity
- Responsive design:
  - Shows flags + labels on desktop
  - Shows only flags on mobile (sm breakpoint)
- Smooth transitions
- Proper spacing and padding

### ✅ Integration
- Uses `useLanguage()` hook from language context
- Accesses `language` and `setLanguage` from context
- Type-safe language selection
- Component is client-side only (`"use client"`)

## Key Files Created/Modified

**New Files:**
- `src/components/language-selector.tsx` - Language picker component

## Component Structure

```typescript
interface Language {
  code: "pt-BR" | "en-US";
  flag: string;           // "🇧🇷" or "🇺🇸"
  label: string;          // "PT" or "EN"
}
```

## Features

- ✅ Visual language selection
- ✅ Flag emoji display
- ✅ Responsive design
- ✅ Accessibility with titles
- ✅ Integration with language context
- ✅ localStorage persistence (via context)
- ✅ Immediate UI update on selection

## What's NOT Implemented Yet

- ❌ TopBar/Header integration
- ❌ Theme toggle in header
- ❌ Morse code translator
- ❌ All UI strings using t()
- ❌ Bidirectional translation
- ❌ Direction toggle

## Testing

1. Run `npm run dev`
2. Create a basic page component that uses LanguageProvider
3. Add LanguageSelector to the page
4. Click buttons to switch languages
5. Check localStorage - should see `{ "language": "en-US" }`
6. Refresh page - language should persist

## Component Usage

```typescript
import { LanguageSelector } from "@/components/language-selector";

export function MyComponent() {
  return (
    <div>
      <LanguageSelector />
    </div>
  );
}
```

## Styling Classes

- Container: `flex items-center gap-1 rounded-lg bg-muted/30 p-1`
- Button: `flex items-center gap-1 text-sm transition-all`
- Flag: `text-lg`
- Label: `hidden sm:inline`

## Next Commit

The next commit will integrate LanguageSelector and ThemeToggle into a TopBar header component and move controls to the top-right.
