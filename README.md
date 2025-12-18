# ArkForge Custom

A production-ready marketing website for ArkForge Custom - a B2B brand specializing in precision branded products including custom fidget toys, phone docks, coasters, and more.

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=flat-square&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-FF0055?style=flat-square&logo=framer)

## 🚀 Live Demo

Visit the live site: [https://ark650.github.io/ArkForge](https://ark650.github.io/ArkForge)

## ✨ Features

- **Dark Industrial Theme** - Carbon-fiber inspired design with carefully chosen colors
- **Fully Responsive** - Mobile-first design that looks great on all devices
- **Accessible** - Semantic HTML, proper focus states, and good color contrast
- **Smooth Animations** - Subtle Framer Motion animations for enhanced UX
- **SEO Optimized** - Proper meta tags and semantic structure
- **Contact Form** - Client-side validation with success state handling

## 📄 Pages

| Page | Description |
|------|-------------|
| **Home** | Hero section, features, product preview, about teaser |
| **Products** | Product grid with pricing, "How It Works" process |
| **About** | Company info, mission, capabilities grid |
| **Gallery** | Image grid showcasing work samples |
| **Contact** | Quote request form with validation |

## 🎨 Design System

### Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Background | `#1a1a1a` | Main background |
| Surface | `#2d2d2d` | Cards, sections |
| Accent | `#ff6b35` | CTAs, highlights |
| Text Primary | `#e0e0e0` | Main text |
| Text Secondary | `#a0a0a0` | Muted text |
| Border | `#404040` | Dividers, borders |

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Deployment:** GitHub Pages (Static Export)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ARK650/ArkForge.git
   cd ArkForge
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 🏗️ Build & Deploy

### Build for Production
```bash
npm run build
```

### Static Export (for GitHub Pages)
```bash
npm run build
```
The static files will be generated in the `out` directory.

### Deploy to GitHub Pages
The project includes a GitHub Actions workflow that automatically deploys to GitHub Pages when you push to the `main` branch.

Manual deployment:
```bash
npm run build
# The 'out' folder contains your static site
```

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with Header & Footer
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles & Tailwind
│   ├── about/
│   │   └── page.tsx        # About page
│   ├── contact/
│   │   ├── layout.tsx      # Contact metadata
│   │   └── page.tsx        # Contact form page
│   ├── gallery/
│   │   └── page.tsx        # Gallery page
│   └── products/
│       └── page.tsx        # Products page
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # Navigation header
│   │   ├── Footer.tsx      # Site footer
│   │   └── index.ts
│   └── ui/
│       ├── Button.tsx      # Button component
│       ├── Card.tsx        # Card component
│       ├── Container.tsx   # Layout container
│       ├── Input.tsx       # Form inputs
│       ├── SectionWrapper.tsx  # Animated section
│       └── index.ts
├── tailwind.config.ts      # Tailwind configuration
├── next.config.js          # Next.js configuration
└── package.json
```

## 🔧 Configuration

### Environment Variables

No environment variables are required for basic functionality.

### Customization

- **Colors:** Edit `tailwind.config.ts` to change the color scheme
- **Content:** Update the data arrays in each page file
- **Images:** Replace Unsplash URLs with your own product images
- **Contact Info:** Update email and location in `Footer.tsx` and `contact/page.tsx`

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is private and proprietary to ArkForge Custom.

## 👤 Author

**ARK650**
- GitHub: [@ARK650](https://github.com/ARK650)
- Email: cark98@gmail.com

---

Built with ❤️ using Next.js and Tailwind CSS
