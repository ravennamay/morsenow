# Commit 4: Language Selector Component with Flags

## Files Structure at this Commit

```
src/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── theme-provider.tsx  # Theme provider
│   ├── theme-toggle.tsx    # Theme toggle
│   ├── language-selector.tsx # NEW: Language picker with flags
│   ├── ui/
│   │   ├── button.tsx
│   │   └── card.tsx
│   ├── layout/
│   │   └── header.tsx
│   └── translator/
│       ├── translator-container.tsx
│       └── translator-panel.tsx
├── config/
│   ├── i18n.ts
│   ├── site.ts
│   └── constants.ts
├── context/
│   └── language-context.tsx
├── hooks/
│   └── use-toast.tsx
├── lib/
│   ├── morse/
│   ├── speech.ts
│   └── utils.ts
├── styles/
│   ├── globals.css
│   └── theme-variables.css
└── types/
    └── index.ts
```

## New Component

### Language Selector (src/components/language-selector.tsx)
- Displays buttons for each supported language
- Uses country flag emojis (🇧🇷 PT, 🇺🇸 EN)
- Highlights active language with primary color
- Hover effects on inactive languages
- Responsive design:
  - Desktop: Shows flags + language labels
  - Mobile: Shows only flags (via hidden sm:inline)
- Click to change language via setLanguage()
- Uses useLanguage() hook from context
- Client-side component ("use client" directive)

## Environment at this Stage

- ✅ Next.js 15.1.0 with TypeScript
- ✅ Tailwind CSS configured
- ✅ Theme toggle functionality
- ✅ Translation infrastructure
- ✅ Language context with useLanguage hook
- ✅ Language selector component with flags
- ❌ TopBar/header integration not yet done
- ❌ Hardcoded strings not yet replaced
- ❌ LanguageProvider not in root layout

## Component Interface

```typescript
// Supported languages
Language = "pt-BR" | "en-US"

// Language definition
interface LanguageOption {
  code: Language;
  flag: string;    // Emoji flag
  label: string;   // "PT" or "EN"
}
```

## Styling Classes

- Container: `flex items-center gap-1 rounded-lg bg-muted/30 p-1`
- Active button: `bg-primary/20`
- Inactive button: `hover:bg-accent/20`
- Flag: `text-lg` (for emoji sizing)
- Label: `hidden sm:inline` (responsive text)

## Features

- ✅ Visual language selection
- ✅ Flag emojis for quick recognition
- ✅ Active language highlight
- ✅ Responsive design (mobile/desktop)
- ✅ localStorage persistence via context
- ✅ Smooth transitions
- ✅ Accessibility titles

## Testing Instructions

1. Install dependencies: `npm install`
2. Run dev server: `npm run dev`
3. Create a test page with Providers wrapper
4. Add LanguageSelector component
5. Click PT/EN buttons to switch
6. Check localStorage: `{ "language": "en-US" }`
7. Refresh page - language should persist
8. Verify responsive design on mobile

## Component Placement (for next commit)

This component will be integrated into TopBar in commit-5:

```typescript
<TopBar>
  <LanguageSelector />  {/* Left with other controls */}
  <ThemeToggle />
</TopBar>
```

## What to Add Next

The next commit (commit-5) will add:
- TopBar component for header
- Sticky positioning at top of page
- Integration of LanguageSelector and ThemeToggle
- Move controls from bottom-right to top-right
