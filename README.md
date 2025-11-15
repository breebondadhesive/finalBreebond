# BREEBOND - Premium Tile Adhesive Solutions

A modern, fully responsive website for BREEBOND, showcasing premium tile adhesive products with stunning video backgrounds and smooth animations.

## 🌟 Features

### 🎬 Video Integration
- **Homepage Video Carousel**: 3 auto-playing videos with smooth swipe transitions
- **Company Page Background**: Professional video background (video4.mp4)
- **About Section Video**: Engaging video background (video5.mp4)
- **Smart Video Controls**: Manual navigation with progress indicators
- **Optimized Playback**: Preloading and fallback mechanisms

### 📱 Fully Responsive Design
- **Mobile First**: Optimized for 320px+ screens
- **Tablet Ready**: Perfect layout for 640px+ devices
- **Desktop Enhanced**: Full features for 1024px+ screens
- **Touch Friendly**: Larger buttons and spacing on mobile devices

### 🎨 Modern UI/UX
- **Background Images**: Custom backgrounds for each section
- **Smooth Animations**: Framer Motion powered interactions
- **Clean Typography**: Professional font hierarchy
- **Consistent Spacing**: Systematic padding and margins

### 📧 Contact Integration
- **Email**: breebondllp@gmail.com with functional contact form
- **Instagram**: @breebond_llp social media integration
- **Google Maps**: Embedded map with direct navigation link
- **Contact Form**: Pre-filled email generation

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/princekakadiya12/breebond.git

# Navigate to project directory
cd breebond

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` to see the website.

## 🌐 Deployment

### Quick Deploy to Firebase
```bash
# Build the project
npm run build

# Deploy to Firebase Hosting
firebase deploy --only hosting
```

**📖 For complete deployment instructions, see [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)**

The deployment guide includes:
- Detailed setup instructions
- Firebase configuration
- Troubleshooting tips
- Production optimization
- Environment setup

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx              # Homepage with video carousel
│   ├── products/
│   │   └── page.tsx          # Products listing (responsive)
│   ├── company/
│   │   └── page.tsx          # About company page
│   └── contact/
│       └── page.tsx          # Contact page with form
├── components/
│   ├── VideoCarousel.tsx     # Video background carousel
│   ├── KerakollHeader.tsx    # Responsive navigation
│   ├── ProductsMenu.tsx      # Full-screen products menu
│   └── SimpleFooter.tsx      # Footer with social links
└── data/
    └── products.ts           # Product information

public/images/
├── video1.mp4               # Homepage carousel video 1
├── video2.mp4               # Homepage carousel video 2  
├── video3.mp4               # Homepage carousel video 3
├── video4.mp4               # Company page background
├── video5.mp4               # About section background
├── allproduct.png           # Products page background
├── contactus.png            # Contact page background
└── footer.png               # Footer background texture
```

## 🎯 Pages Overview

### 🏠 Homepage (`/`)
- Hero section with 3-video carousel
- Featured products showcase
- About BREEBOND section with video5.mp4
- Why Choose BREEBOND features
- Contact form section

### 🛍️ Products (`/products`)
- Complete product range display
- Background image: allproduct.png
- Responsive product cards
- Individual product links

### 🏢 Company (`/company`)
- Company story and mission
- Background video: video4.mp4
- Team and values showcase
- Mission & vision cards

### 📧 Contact (`/contact`)
- Contact information cards
- Background image: contactus.png
- Functional contact form
- Google Maps integration
- Social media links

## 🎨 Design System

### Colors
- **Primary**: Black (#000000)
- **Secondary**: White (#FFFFFF)
- **Accent**: Blue-950 to Gray-900 gradients
- **Text**: Gray scale variations

### Typography
- **Headings**: Light font weights (font-light)
- **Body**: Regular weights with good line-height
- **Responsive**: Scales from mobile to desktop

### Breakpoints
```css
sm: 640px   /* Small tablets */
md: 768px   /* Tablets */
lg: 1024px  /* Desktops */
xl: 1280px  /* Large desktops */
```

## 🔧 Development

### Available Scripts
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

### Key Technologies
- **Next.js 15.5.6**: React framework with App Router
- **React 19**: Latest React with server components
- **TypeScript**: Type-safe development
- **Tailwind CSS 3.x**: Utility-first styling
- **Framer Motion 11.x**: Smooth animations
- **Lucide React**: Modern icon library

## 📱 Responsive Features

### Mobile Optimizations
- Smaller text sizes and spacing
- Touch-friendly button sizes
- Single column layouts
- Condensed navigation
- Optimized video controls

### Tablet Enhancements
- Two-column layouts where appropriate
- Medium-sized elements
- Balanced spacing
- Enhanced navigation

### Desktop Features
- Multi-column layouts
- Large typography
- Full navigation menu
- Enhanced hover effects
- Optimal video playback

## 🎬 Video System

### Homepage Carousel
- **3 Videos**: Automatic 8-second cycles
- **Manual Controls**: Left/right arrows, dot indicators
- **Progress Bar**: Visual countdown timer
- **Smooth Transitions**: Spring-based animations
- **Infinite Loop**: Seamless video cycling

### Background Videos
- **Auto-play**: Muted for better UX
- **Loop**: Continuous playback
- **Optimized**: Compressed for fast loading
- **Fallback**: Image backup if videos fail

## 📞 Contact Information

- **Email**: breebondllp@gmail.com
- **Instagram**: @breebond_llp
- **Website**: www.breebond.in
- **Location**: OP No. 36, TPS-52, Block No 29, Surat, Gujarat - 395004

## 🏆 Certifications

- **EN12004**: European standard compliance
- **IS15477-2019**: Indian standard compliance

## 📄 License

This project is proprietary and confidential.

---

**Built with ❤️ for BREEBOND - Premium Tile Adhesive Solutions**
