# Veris Wallet

Veris Wallet establishes trust as the core Web3 primitive. A persistent, trustworthy, and on-chain identity solution for decentralized applications.

## Project Overview

This is a React + Vite web application built with modern web3 identity architecture. The project includes:

- **Hero Section** - Compelling landing page introduction
- **About Section** - Project details and mission
- **Problem & Solution** - Market opportunity and our approach
- **Team Section** - Meet the founders
- **Waitlist Integration** - User engagement
- **Footer** - Resources, contact, and community links

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
veriswallet/
├── src/
│   ├── components/
│   │   ├── header.jsx          # Navigation header
│   │   ├── shero.jsx           # Hero section
│   │   ├── about.jsx           # About section
│   │   ├── problem.jsx         # Problem section
│   │   ├── solution.jsx        # Solution section
│   │   ├── team.jsx            # Team section
│   │   ├── mechanism.jsx       # Mechanism section
│   │   ├── waitlist.jsx        # Waitlist signup
│   │   └── footer.jsx          # Footer
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # Entry point
│   ├── index.css               # Global styles
│   └── App.css                 # App styles
├── public/
│   ├── logo2.png               # Brand logo
│   ├── logo.png                # Alternative logo
│   ├── bigpandaweb3.jpeg       # Founder image
│   ├── oxbruncho.jpeg          # Co-founder image
│   ├── herobg5.jpg             # Hero background
│   ├── manifest.json           # PWA manifest
│   └── Veris wallet whitepaper V1.0..pdf
├── index.html                  # HTML template
├── package.json                # Dependencies
├── vite.config.js              # Vite configuration
└── eslint.config.js            # ESLint configuration

```

## Features

### 🎨 Design
- Modern, responsive design
- Glass-morphism effects
- Smooth animations and transitions
- Dark theme with accent green (#1BA13E)
- Mobile-first approach

### 📱 Responsive
- Works seamlessly on desktop, tablet, and mobile
- Fixed header with blur effect
- Adaptive grid layouts

### ♿ Accessibility
- Semantic HTML
- Proper alt text for images
- Color contrast compliance
- Keyboard navigation support

### 🚀 Performance
- Vite for fast development and optimized builds
- Code splitting
- Asset optimization
- Lazy loading ready

### 📊 SEO
- Comprehensive meta tags
- Open Graph support
- Twitter Card support
- Structured meta data
- Sitemap ready

### 📲 PWA Ready
- `manifest.json` for app installation
- Service worker support
- App icons
- Theme color specification

## Hosting & Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized `dist/` folder ready for deployment.

### Deployment Options

#### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

#### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

#### GitHub Pages
Configure `vite.config.js`:
```javascript
export default defineConfig({
  base: '/',
  plugins: [react()],
})
```

Then deploy the `dist/` folder.

#### Traditional Hosting
1. Run `npm run build`
2. Upload the `dist/` folder to your web server
3. Ensure your server is configured to serve `index.html` for all routes

### Important Notes for Hosting

✅ **All asset paths use absolute paths** (e.g., `/logo2.png`)
✅ **Background images** use `/` prefix for proper loading
✅ **Meta tags** configured for SEO and social sharing
✅ **PWA manifest** included for app-like experience
✅ **Environment-agnostic** - works on any modern hosting platform

## Development

### Hot Module Replacement (HMR)
Changes to component files are reflected instantly in the browser during development.

### Linting
```bash
npm run lint
```

### Code Style
- React hooks for state management
- Component-based architecture
- CSS for styling (no CSS-in-JS)
- Semantic HTML

## Color Scheme

- **Primary Background**: `#000000` (Black)
- **Accent Color**: `#1BA13E` (Green)
- **Accent Secondary**: `#0FA24A` (Lighter Green)
- **Text Primary**: `#D0F0C0` (Light Green)
- **Text Muted**: `#BFDCC8`
- **Card Background**: `#1f1f1f`

## Typography

- **Font Family**: Spotify Mix, system fonts
- **Font Weight**: Light (200) for body, 600 for headings
- **Responsive Sizing**: Uses `clamp()` for fluid typography

## Contact & Social

- **Email**: veriswallet@gmail.com
- **Twitter**: [@Veriswallet](https://x.com/Veriswallet)
- **Whitepaper**: See `public/Veris wallet whitepaper V1.0..pdf`

## Team

- **bigpandaweb3** - Founder
- **0xbruncho** - Co-founder

## License

© 2025 Veris Wallet. All rights reserved.

## Support

For questions or issues, please reach out:
- Email: veriswallet@gmail.com
- Twitter: @Veriswallet
