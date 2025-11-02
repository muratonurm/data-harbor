# B2B Data Extraction Platform Landing Page

A modern, minimalist landing page for a data collection company built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Hero Section**: Full-width hero with animated gradient background, glowing effects, and "Powered by Scrape.do" badge
- **Services Section**: 3x2 grid showcasing expertise across 6 industries (E-commerce, News, Social Media, B2B, Gaming, Finance)
- **Technology Section**: 5x2 grid highlighting 10 key technical capabilities with icons and benefits
- **Summary Section**: Eye-catching CTA section with gradient background
- **Smooth Animations**: Framer Motion animations including fade-in effects, hover states, and stagger animations
- **Responsive Design**: Mobile-first design that works beautifully on all screen sizes
- **Premium UI**: Clean, modern design with subtle gradients, shadows, and premium typography

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 (with @tailwindcss/postcss)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

## Getting Started

### Installation

Navigate to the project directory:

```bash
cd landing-page
```

Dependencies are already installed, but if needed:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

Build for production:

```bash
npm run build
```

### Production

Start the production server:

```bash
npm start
```

## Project Structure

```
landing-page/
├── app/
│   ├── layout.tsx        # Root layout with Inter font and metadata
│   ├── page.tsx          # Home page (imports LandingPage component)
│   └── globals.css       # Global styles with Tailwind v4 import
├── components/
│   └── LandingPage.tsx   # Main landing page component
├── lib/
│   └── utils.ts          # Utility functions (cn for className merging)
├── tailwind.config.js    # Tailwind configuration
├── postcss.config.js     # PostCSS configuration
├── tsconfig.json         # TypeScript configuration
└── next.config.js        # Next.js configuration
```

## Component Overview

### LandingPage Component

The main component (`components/LandingPage.tsx`) exports a default React component named `LandingPage` and includes:

1. **Hero Section**
   - Gradient background (gray-900 to gray-800)
   - Animated heading with gradient text effect
   - Glowing effect behind heading
   - Two CTA buttons (primary and secondary)
   - "Powered by Scrape.do" badge

2. **Services Section**
   - 6 service cards in responsive grid (1 col mobile, 2 col tablet, 3 col desktop)
   - Each card includes icon, title, description, and platform examples
   - Hover effects with subtle lift and ring color change

3. **Technology & Reliability Section**
   - 10 feature cards in 5-column grid (responsive)
   - Each card shows icon, title, description, and benefit
   - Gradient backgrounds and hover scale effects

4. **Summary Section**
   - Gradient background CTA section
   - Clear value proposition
   - Memorable tagline

5. **Footer**
   - Simple copyright footer

## Customization

### Colors

The primary color palette is defined in [tailwind.config.js](tailwind.config.js:11-23). Modify the `primary` color values to match your brand:

```js
colors: {
  primary: {
    50: '#eff6ff',
    // ... other shades
  },
}
```

### Content

All content is defined within the `LandingPage` component. To modify:

1. **Hero text**: Update the heading and paragraphs in the Hero section
2. **Services**: Modify the `services` array
3. **Tech features**: Modify the `techFeatures` array

### Animations

Animation variants are defined at the top of [LandingPage.tsx](components/LandingPage.tsx:25-36):

- `fadeIn`: Basic fade-in with upward motion
- `staggerContainer`: Stagger child animations

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Static site generation (SSG) enabled
- Optimized images and fonts
- Minimal JavaScript bundle
- Tree-shaken Lucide icons

## License

ISC

---

Built with Next.js, Tailwind CSS, and Framer Motion
