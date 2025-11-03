# Beeax OCR - Advanced Text Extraction Platform

A stunning React-based OCR (Optical Character Recognition) web application with a honey-inspired design theme, featuring real-time text extraction capabilities, 3D animations, and modern UI/UX.

## 🌟 Features

### Core Functionality
- **Real OCR Processing**: Powered by Tesseract.js for actual text extraction
- **Multi-Format Support**: JPEG, PNG, PDF, TIFF, BMP files
- **100+ Languages**: Comprehensive language support including handwriting recognition
- **Batch Processing**: Handle multiple files simultaneously
- **Live Preview**: Real-time OCR results with confidence scores

### Design & UX
- **3D Background Effects**: Interactive hexagonal particle system using Three.js
- **Glass Morphism**: Modern translucent design elements
- **Honey-Inspired Theme**: Warm color palette with #FFD572 (Honey Yellow) as primary
- **Smooth Animations**: Framer Motion powered transitions and scroll effects
- **Responsive Design**: Mobile-first approach with Tailwind CSS

### Technical Stack
- **React 18**: Latest React with hooks and concurrent features
- **Three.js**: 3D graphics and particle systems
- **Tesseract.js**: Client-side OCR processing
- **Framer Motion**: Advanced animations and transitions
- **React Router**: Single-page application routing
- **Tailwind CSS**: Utility-first styling framework

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn package manager

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd beeax-ocr

# Install dependencies
npm install

# Start development server
npm start
```

### Build for Production
```bash
npm run build
```

## 📁 Project Structure

```
beeax-ocr/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable React components
│   │   ├── Header.js       # Navigation header
│   │   ├── Hero.js         # Landing hero section
│   │   ├── OCRUploader.js  # Main OCR functionality
│   │   ├── Background3D.js # 3D background effects
│   │   └── Footer.js       # Site footer
│   ├── pages/              # Page components
│   │   ├── Home.js         # Main landing page
│   │   ├── Features.js     # Features showcase
│   │   ├── Pricing.js      # Pricing plans
│   │   └── About.js        # Company information
│   ├── styles/
│   │   └── globals.css     # Global styles and animations
│   ├── assets/             # Images and media
│   └── App.js              # Main application component
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind CSS configuration
└── README.md               # This file
```

## 🎨 Design System

### Color Palette
- **Honey Yellow**: #FFD572 - Primary accent, buttons, highlights
- **Earthy Brown**: #7B5428 - Text, headers, borders
- **Warm Beige**: #F6E1B8 - Background, cards, soft surfaces
- **Deep Brown**: #503915 - Secondary text, icons, deep accents
- **Soft White**: #FFFFFF - Contrasting text, fills, highlights

### Typography
- **Display**: Playfair Display (serif) - Headings and hero text
- **Body**: Inter (sans-serif) - Body text and UI elements
- **Code**: JetBrains Mono (monospace) - OCR results and technical content

## 🛠️ Key Components

### OCRUploader
Main OCR functionality component featuring:
- Drag & drop file upload interface
- Real-time processing with progress tracking
- Language selection (100+ languages)
- Results display with confidence scores
- Batch processing capabilities

### Background3D
Three.js powered 3D background with:
- Floating hexagonal particles
- Dynamic lighting effects
- Smooth camera animations
- Responsive design integration

### Hero Section
Eye-catching landing section with:
- Animated hero image
- Gradient text effects
- Feature highlights
- Call-to-action buttons

## 🎯 Pages

### Home
- Hero section with 3D bee animation
- Live OCR upload interface
- Feature showcase with honeycomb grid
- Statistics and testimonials

### Features
- Detailed capability breakdown
- Advanced technology showcase
- Performance metrics
- Workflow demonstration

### Pricing
- Tiered pricing plans
- Feature comparison table
- FAQ section
- Enterprise solutions

### About
- Company story and mission
- Team member profiles
- Timeline and milestones
- Company values

## 🎭 Animations

### Scroll Animations
- Reveal animations on scroll
- Parallax effects
- Staggered content appearance
- Progress indicators

### Interactive Animations
- 3D hover effects on cards
- Button micro-interactions
- Loading states and transitions
- Particle system movements

### Micro-Interactions
- Form field focus states
- Button hover and active states
- File upload progress
- Success/error feedback

## 🔧 Customization

### Theme Colors
Update the CSS custom properties in `src/styles/globals.css`:
```css
:root {
  --honey-yellow: #FFD572;
  --earthy-brown: #7B5428;
  --warm-beige: #F6E1B8;
  --deep-brown: #503915;
  --soft-white: #FFFFFF;
}
```

### Animation Settings
Modify animation parameters in component files:
- Duration and easing
- Stagger delays
- Spring physics
- Transition types

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

Key responsive features:
- Collapsible navigation
- Adaptive grid layouts
- Touch-friendly interactions
- Optimized typography scaling

## 🔒 Security & Privacy

- Client-side OCR processing (no server upload required)
- Secure file handling
- Privacy-focused design
- GDPR compliant data handling

## 🚀 Deployment

The application can be deployed to any static hosting service:
- Netlify
- Vercel
- GitHub Pages
- AWS S3 + CloudFront

### Environment Variables
Create a `.env` file for any API keys or configuration:
```
REACT_APP_API_KEY=your_api_key_here
REACT_APP_ENVIRONMENT=production
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support, email support@beeax.com or join our community Discord server.

---

**Beeax OCR** - Transforming documents into actionable intelligence with the precision of bees and the power of AI. 🐝✨