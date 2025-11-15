# BREEBOND Website - Git Setup Guide

## 🚀 Push to GitHub Repository

Follow these steps to push your BREEBOND website to GitHub:

### 1. Initialize Git Repository
```bash
cd "c:/Users/INDIA/OneDrive/Desktop/druvswebsite/finalbreebond"
git init
```

### 2. Add Remote Repository
```bash
git remote add origin https://github.com/princekakadiya12/breebond.git
```

### 3. Create .gitignore File
Create a `.gitignore` file with the following content:

```
# Dependencies
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Next.js
.next/
out/

# Production build
build/
dist/

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# IDE files
.vscode/
.idea/
*.swp
*.swo

# OS generated files
.DS_Store
.DS_Store?
._*
.Spotlight-V100
.Trashes
ehthumbs.db
Thumbs.db

# Logs
logs
*.log

# Runtime data
pids
*.pid
*.seed
*.pid.lock

# Coverage directory used by tools like istanbul
coverage/

# Dependency directories
jspm_packages/

# Optional npm cache directory
.npm

# Optional eslint cache
.eslintcache

# Microbundle cache
.rpt2_cache/
.rts2_cache_cjs/
.rts2_cache_es/
.rts2_cache_umd/

# Optional REPL history
.node_repl_history

# Output of 'npm pack'
*.tgz

# Yarn Integrity file
.yarn-integrity

# parcel-bundler cache (https://parceljs.org/)
.cache
.parcel-cache

# next.js build output
.next

# nuxt.js build output
.nuxt

# vuepress build output
.vuepress/dist

# Serverless directories
.serverless

# FuseBox cache
.fusebox/

# DynamoDB Local files
.dynamodb/

# TernJS port file
.tern-port
```

### 4. Stage All Files
```bash
git add .
```

### 5. Create Initial Commit
```bash
git commit -m "Initial commit: BREEBOND responsive website with video backgrounds

Features:
- Fully responsive design for mobile, tablet, and desktop
- Video carousel on homepage with 3 videos (video1.mp4, video2.mp4, video3.mp4)
- Video background on company page (video4.mp4)
- Video background on homepage about section (video5.mp4)
- Background images: allproduct.png, contactus.png, footer.png
- Responsive products menu and listing
- Contact form with email functionality
- Instagram and email integration
- Google Maps integration
- Modern animations with Framer Motion
- Optimized for performance and SEO"
```

### 6. Push to GitHub
```bash
git branch -M main
git push -u origin main
```

## 📁 Project Structure

```
finalbreebond/
├── public/
│   └── images/
│       ├── video1.mp4          # Homepage carousel video 1
│       ├── video2.mp4          # Homepage carousel video 2
│       ├── video3.mp4          # Homepage carousel video 3
│       ├── video4.mp4          # Company page background
│       ├── video5.mp4          # Homepage about section
│       ├── allproduct.png      # Products page background
│       ├── contactus.png       # Contact page background
│       ├── footer.png          # Footer background
│       └── kim.jpg             # Fallback image
├── src/
│   ├── app/
│   │   ├── page.tsx            # Homepage (responsive)
│   │   ├── products/
│   │   │   └── page.tsx        # Products listing (responsive)
│   │   ├── company/
│   │   │   └── page.tsx        # Company page (responsive)
│   │   └── contact/
│   │       └── page.tsx        # Contact page (responsive)
│   └── components/
│       ├── VideoCarousel.tsx   # Video carousel (responsive)
│       ├── KerakollHeader.tsx  # Header (responsive)
│       ├── ProductsMenu.tsx    # Products menu (responsive)
│       └── SimpleFooter.tsx    # Footer (responsive)
└── README.md
```

## 🎯 Features Implemented

### ✅ Video Integration
- **Homepage Carousel**: 3 videos with smooth transitions
- **Company Page**: video4.mp4 background
- **About Section**: video5.mp4 background
- Auto-play, loop, muted for better UX

### ✅ Responsive Design
- **Mobile First**: Optimized for 320px+ screens
- **Tablet**: 640px+ with adjusted layouts
- **Desktop**: 1024px+ with full features
- **Touch Friendly**: Larger buttons and spacing on mobile

### ✅ Background Images
- **Products Page**: allproduct.png
- **Contact Page**: contactus.png  
- **Footer**: footer.png with subtle overlay

### ✅ Contact Integration
- **Email**: breebondllp@gmail.com
- **Instagram**: @breebond_llp
- **Google Maps**: Embedded with direct link
- **Functional Contact Form**: Creates email with pre-filled content

### ✅ Performance Optimizations
- **Video Preloading**: Smart loading for smooth playback
- **Image Optimization**: Next.js Image component
- **Responsive Images**: Different sizes for different screens
- **Lazy Loading**: Images load as needed

## 🔧 Development Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 639px
- **Tablet**: 640px - 1023px  
- **Desktop**: 1024px - 1439px
- **Large Desktop**: 1440px+

## 🎨 Design System

- **Colors**: Black, White, Gray scale
- **Typography**: Light font weights, large headings
- **Animations**: Framer Motion for smooth interactions
- **Layout**: CSS Grid and Flexbox
- **Spacing**: Consistent padding and margins

---

**Ready to push to GitHub! 🚀**
