# Vigor Accounting and Taxation Landing Page

A modern, responsive landing page for Vigor Accounting and Taxation services in Dubai, UAE. Built with React and Tailwind CSS.

## Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Interactive Components**: Contact forms, pricing packages, and call-to-action sections
- **Accessibility**: Semantic HTML and keyboard navigation support
- **Performance**: Optimized for fast loading and smooth interactions

## Sections

1. **Header**: Navigation with contact information
2. **Hero**: Main banner with benefits and contact form
3. **Pricing Packages**: Six-tier pricing comparison table
4. **About Us**: Company statistics and achievements
5. **Services**: Service description with interactive tags
6. **Government Agencies**: Partner agency logos
7. **Contact Form**: Quote request form
8. **Call to Action**: Final conversion section
9. **Footer**: Complete company information and links
10. **Floating Contact**: WhatsApp-style contact button

## Technology Stack

- **React 18**: Modern React with hooks
- **Tailwind CSS**: Utility-first CSS framework
- **PostCSS**: CSS processing
- **Create React App**: Development environment

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd vigor-accounting-landing
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Customization

### Colors

The color scheme is defined in `tailwind.config.js`. You can modify the custom colors:

```javascript
colors: {
  'vigor-blue': '#1e3a8a',
  'vigor-dark-blue': '#1e40af',
  'vigor-purple': '#7c3aed',
  // ... other colors
}
```

### Images

Replace placeholder images with actual content:

1. **Hero Section**: Replace the professional woman image
2. **Contact Form**: Replace the second professional woman image
3. **Call to Action**: Replace the professional man image
4. **Government Agencies**: Replace agency logos
5. **Footer**: Replace the map placeholder

### Content

Update text content in the respective component files:
- `src/components/Hero.js` - Main headline and benefits
- `src/components/PricingPackages.js` - Package details and pricing
- `src/components/AboutUs.js` - Statistics and achievements
- `src/components/Services.js` - Service descriptions
- `src/components/Footer.js` - Contact information

## File Structure

```
src/
├── components/
│   ├── Header.js
│   ├── Hero.js
│   ├── PricingPackages.js
│   ├── AboutUs.js
│   ├── Services.js
│   ├── GovernmentAgencies.js
│   ├── ContactForm.js
│   ├── CallToAction.js
│   ├── Footer.js
│   └── FloatingContact.js
├── App.js
├── index.js
└── index.css
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

The landing page is optimized for:
- Fast loading times
- Smooth animations
- Mobile responsiveness
- SEO best practices

## License

This project is developed for Vigor Accounting and Taxation LLC.

## Support

For technical support or customization requests, please contact the development team. 