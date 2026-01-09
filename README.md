# Morse Code Translator

Transform text to morse code instantly with a modern, minimalist interface.

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Next.js](https://img.shields.io/badge/Next.js-15.1-black)
![React](https://img.shields.io/badge/React-19-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue)

## ✨ Features

- **Instant Translation** - Convert text ↔ morse code in real-time
- **Audio Playback** - Hear morse code tones or text-to-speech
- **Easy Copy** - Copy to clipboard with one click
- **Dark & Light Themes** - Beautiful theme switching
- **Fully Responsive** - Works on desktop, tablet, and mobile
- **Accessible** - Built with WCAG compliance and semantic HTML
- **Multi-language** - Portuguese (PT-BR) and English (EN-US) support
- **Bidirectional** - Text→Morse and Morse→Text conversion

## 🚀 Tech Stack

- **Next.js 15** - React framework
- **React 19** - UI library
- **TypeScript** - Type-safe code
- **Tailwind CSS** - Styling
- **Radix UI** - Accessible components
- **Lucide React** - Icons
- **next-themes** - Theme management

## 📦 Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Open http://localhost:3000
```

## 🎯 How to Use

1. **Type or paste text** in the input panel
2. **See morse code appear** in the output panel (or vice versa with direction toggle)
3. **Copy** or **Play audio** with buttons
4. **Switch language** with flag selector (top-right)
5. **Toggle theme** with sun/moon icon (top-right)

## 📋 Supported Characters

**Letters:** A-Z (case-insensitive)  
**Numbers:** 0-9  
**Punctuation:** `. , ? ' ! / ( ) & : ; = + - _ " $ @`  
**Space:** Represented as `/` in morse code

⚠️ **Note:** Accented characters (á, é, í, ó, ú, ç, etc.) are not supported in morse code. They will be skipped during conversion.

For detailed morse code rules and limitations, see [MORSE_RULES.md](./MORSE_RULES.md).

## 📁 Project Structure

```
src/
├── app/                 # Next.js pages and layout
├── components/          # React components
├── hooks/              # Custom hooks (translator, toast)
├── lib/morse/          # Morse conversion utilities
├── config/             # Configuration (i18n, constants)
├── context/            # Language context
├── types/              # TypeScript definitions
└── styles/             # Global styles and CSS variables
```

## 🎨 Design

Modern minimalist UI with:
- **Primary Color:** Cyan (#00D9FF)
- **Secondary Color:** Amber/Golden
- **Typography:** Space Grotesk font
- **Rounded corners:** 0.75rem
- **Smooth transitions:** 300ms

## 📱 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Modern mobile browsers

## ♿ Accessibility

- ✓ WCAG 2.1 AA compliant
- ✓ Semantic HTML
- ✓ Keyboard navigation
- ✓ Screen reader friendly
- ✓ Focus indicators
- ✓ High contrast ratios

## 📄 License

MIT License - see LICENSE file for details

## 🔗 Links

- **Website:** https://signal-code.app
- **GitHub:** https://github.com/yourusername/signal-code

---

**Happy coding!** 🚀
