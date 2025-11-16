# Arpan Patel - Portfolio

A modern, animated portfolio website built with React, GSAP, and smooth scroll.

## Features

- **Smooth Scrolling**: Powered by Lenis for buttery smooth scroll experience
- **GSAP Animations**: Scroll-triggered animations throughout the site
- **Responsive Design**: Fully responsive across all devices
- **Modern Stack**: Built with React + Vite for optimal performance
- **Clean Architecture**: Well-organized component structure for easy maintenance

## Tech Stack

- **React** - UI library
- **Vite** - Build tool and dev server
- **GSAP** - Animation library with ScrollTrigger
- **Lenis** - Smooth scroll library
- **CSS3** - Modern styling with custom properties

## Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Hero.jsx / Hero.css
│   │   ├── SelectWorks.jsx / SelectWorks.css
│   │   ├── About.jsx / About.css
│   │   ├── Present.jsx / Present.css
│   │   ├── Projects.jsx / Projects.css
│   │   └── Contact.jsx / Contact.css
│   ├── styles/
│   │   └── index.css
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Sections

1. **Hero** - Introduction with experience timeline
2. **Select Works** - Portfolio project showcase
3. **About** - Personal story and past experiences
4. **Present** - Current roles and activities
5. **Projects** - Indie project highlights (SAFIS, C&D Theory)
6. **Contact** - Get in touch links

## Customization

### Colors

Edit CSS variables in `src/styles/index.css`:

```css
:root {
  --black: #000000;
  --white: #FFFFFF;
  --gray: #666666;
  --light-gray: #999999;
  --border-gray: #333333;
}
```

### Content

Update content in respective component files:
- Personal info: `src/components/Hero.jsx`
- Projects: `src/components/Projects.jsx`
- Experience: `src/components/About.jsx`
- Contact links: `src/components/Contact.jsx`

### Animation Settings

Modify GSAP timelines in component `useEffect` hooks for different animation timings and effects.

## Performance

- Optimized component rendering
- Lazy-loaded animations with ScrollTrigger
- Minimal dependencies
- Production build with code splitting

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

ISC

---

Built with passion by Arpan Patel
