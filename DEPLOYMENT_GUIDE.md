# BreeBond LLP - Deployment & Setup Guide

Complete guide for deploying and running the BreeBond website project.

---

## 📋 Table of Contents

1. [Prerequisites](#prerequisites)
2. [Local Development Setup](#local-development-setup)
3. [Environment Configuration](#environment-configuration)
4. [Running the Project](#running-the-project)
5. [Building for Production](#building-for-production)
6. [Firebase Deployment](#firebase-deployment)
7. [Troubleshooting](#troubleshooting)
8. [Project Structure](#project-structure)

---

## 🔧 Prerequisites

Before you begin, ensure you have the following installed:

### Required Software

- **Node.js**: Version 18.x or higher
  - Download from: https://nodejs.org/
  - Verify installation: `node --version`

- **npm**: Version 9.x or higher (comes with Node.js)
  - Verify installation: `npm --version`

- **Git**: Latest version
  - Download from: https://git-scm.com/
  - Verify installation: `git --version`

### Optional (for deployment)

- **Firebase CLI**: For Firebase Hosting deployment
  ```bash
  npm install -g firebase-tools
  ```

---

## 🚀 Local Development Setup

### Step 1: Clone the Repository

```bash
# Clone the repository
git clone https://github.com/princekakadiya12/completebreebond.git

# Navigate to project directory
cd completebreebond
```

### Step 2: Install Dependencies

```bash
# Install all required packages
npm install

# This will install:
# - Next.js 15.5.6
# - React 19
# - Framer Motion
# - Tailwind CSS
# - Lucide React Icons
# - And all other dependencies
```

**Installation Time:** Approximately 2-5 minutes depending on your internet speed.

### Step 3: Verify Installation

```bash
# Check if all dependencies are installed
npm list --depth=0
```

You should see all packages listed without errors.

---

## ⚙️ Environment Configuration

### Create Environment File (Optional)

While this project doesn't require environment variables for basic functionality, you can create a `.env.local` file for custom configurations:

```bash
# .env.local (optional)
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_COMPANY_EMAIL=breebondllp@gmail.com
```

**Note:** The project works out of the box without environment variables.

---

## 💻 Running the Project

### Development Mode

```bash
# Start the development server
npm run dev
```

The application will be available at:
- **Local:** http://localhost:3000
- **Network:** http://[your-ip]:3000

**Features in Dev Mode:**
- ✅ Hot Module Replacement (HMR)
- ✅ Fast Refresh
- ✅ Error Overlay
- ✅ Source Maps

### Production Mode (Local Test)

```bash
# Build the project
npm run build

# Start production server
npm start
```

Production build will be available at http://localhost:3000

---

## 🏗️ Building for Production

### Step 1: Create Production Build

```bash
npm run build
```

**Build Output:**
```
Route (app)                                 Size     First Load JS
┌ ○ /                                    12.6 kB         161 kB
├ ○ /_not-found                            995 B         102 kB
├ ○ /company                             3.47 kB         146 kB
├ ○ /contact                             3.69 kB         147 kB
├ ○ /products                            3.37 kB         151 kB
├ ● /products/[slug]                     1.77 kB         150 kB
└ ○ /terms                               3.57 kB         146 kB

○  (Static)  Prerendered as static content
●  (SSG)     Prerendered as static HTML
```

### Step 2: Test Production Build Locally

```bash
npm start
```

### Step 3: Verify All Features

Test the following before deployment:
- ✅ All pages load correctly
- ✅ Images display properly
- ✅ Contact form opens email client
- ✅ Product pages work
- ✅ Mobile responsive design
- ✅ Navigation menus function

---

## 🔥 Firebase Deployment

### Prerequisites

1. **Firebase Account**: Create at https://firebase.google.com/
2. **Firebase CLI**: Install globally
   ```bash
   npm install -g firebase-tools
   ```

### Step 1: Login to Firebase

```bash
firebase login
```

This will open a browser window for authentication.

### Step 2: Initialize Firebase (First Time Only)

```bash
firebase init hosting
```

**Configuration:**
- **Project:** Select your Firebase project (lekha-sahayak-a2w77)
- **Public directory:** `.next` or `out` (depends on export config)
- **Single-page app:** No
- **GitHub Actions:** No (unless you want CI/CD)

### Step 3: Configure Firebase Hosting

The project already has `firebase.json` configured:

```json
{
  "hosting": {
    "source": ".",
    "frameworksBackend": {
      "region": "us-east1",
      "maxInstances": 1
    }
  }
}
```

### Step 4: Deploy to Firebase

```bash
# Deploy to Firebase Hosting
firebase deploy --only hosting

# Or use the specific command
npx firebase-tools deploy
```

**Deployment Time:** 3-5 minutes

**Your site will be live at:**
- `https://[your-project-id].web.app`
- `https://[your-project-id].firebaseapp.com`

### Step 5: Verify Deployment

Visit your deployment URL and test:
- ✅ Homepage loads
- ✅ All navigation works
- ✅ Images and videos display
- ✅ Contact form functional
- ✅ Product pages accessible

---

## 🐛 Troubleshooting

### Common Issues & Solutions

#### Issue 1: Port Already in Use

**Error:** `Port 3000 is already in use`

**Solution:**
```bash
# Kill the process using port 3000
# Windows:
netstat -ano | findstr :3000
taskkill /PID [PID_NUMBER] /F

# Mac/Linux:
lsof -ti:3000 | xargs kill -9
```

#### Issue 2: Module Not Found

**Error:** `Cannot find module 'xyz'`

**Solution:**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

#### Issue 3: Build Fails

**Error:** Build errors during `npm run build`

**Solution:**
```bash
# Clear Next.js cache
rm -rf .next

# Rebuild
npm run build
```

#### Issue 4: Images Not Loading

**Problem:** Images show broken links

**Solution:**
1. Verify images exist in `/public/images/` directory
2. Check image paths in code (should start with `/images/`)
3. Ensure proper image formats (PNG, JPG, SVG, WebP)

#### Issue 5: Firebase Deployment Fails

**Error:** Deployment fails or times out

**Solution:**
```bash
# Ensure you're logged in
firebase logout
firebase login

# Try deploying again
firebase deploy --only hosting --debug
```

#### Issue 6: Styling Issues

**Problem:** Tailwind CSS not working

**Solution:**
```bash
# Rebuild with clean cache
npm run build
```

---

## 📁 Project Structure

```
breebond/
├── public/
│   └── images/
│       ├── logos/           # BREEBOND LOGO.svg
│       ├── gallery/         # Product images (C2TE.png, etc.)
│       ├── kim.jpg          # Fallback image
│       └── video1-5.mp4     # Hero videos
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout
│   │   ├── page.tsx         # Home page
│   │   ├── globals.css      # Global styles
│   │   ├── company/         # Company page
│   │   ├── contact/         # Contact page
│   │   ├── products/        # Products page
│   │   │   └── [slug]/      # Dynamic product pages
│   │   └── terms/           # Terms page
│   ├── components/
│   │   ├── KerakollHeader.tsx      # Main header
│   │   ├── VideoCarousel.tsx       # Hero video carousel
│   │   ├── ProductDetail.tsx       # Product detail view
│   │   ├── ProductsMenu.tsx        # Products menu
│   │   ├── MobileDrawer.tsx        # Mobile navigation
│   │   ├── LoadingScreen.tsx       # Loading animation
│   │   └── SimpleFooter.tsx        # Footer
│   └── data/
│       └── products.ts      # Product data
├── next.config.ts           # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS config
├── package.json             # Dependencies
└── firebase.json            # Firebase config
```

---

## 📦 Key Dependencies

### Core Framework
- **Next.js**: 15.5.6 (React framework)
- **React**: 19.x (UI library)
- **TypeScript**: Latest (Type safety)

### Styling
- **Tailwind CSS**: 3.x (Utility-first CSS)
- **Framer Motion**: 11.x (Animations)

### Icons & UI
- **Lucide React**: Latest (Icon library)

### Development Tools
- **ESLint**: Code linting
- **PostCSS**: CSS processing

---

## 🔒 Security Notes

1. **No Sensitive Data**: Project doesn't store sensitive information
2. **Email Contact**: Uses `mailto:` links (client-side only)
3. **Static Assets**: All assets are publicly accessible
4. **No Backend**: Pure frontend application

---

## 📱 Browser Support

- ✅ Chrome (90+)
- ✅ Firefox (88+)
- ✅ Safari (14+)
- ✅ Edge (90+)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## 🎨 Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Video background carousel
- ✅ Smooth animations with Framer Motion
- ✅ Dynamic product pages
- ✅ Contact form with email integration
- ✅ SEO optimized
- ✅ Fast page loads
- ✅ Mobile navigation drawer

---

## 📞 Support & Contact

**Company:** BREEBOND LLP  
**Email:** breebondllp@gmail.com  
**GitHub:** https://github.com/princekakadiya12/completebreebond

---

## 📝 Quick Command Reference

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Deploy to Firebase
firebase deploy --only hosting

# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

---

## ✅ Deployment Checklist

Before deploying to production, ensure:

- [ ] All dependencies installed (`npm install`)
- [ ] Build succeeds without errors (`npm run build`)
- [ ] All pages load correctly in production mode
- [ ] Images and videos display properly
- [ ] Contact form works (opens email client)
- [ ] Mobile responsive on all devices
- [ ] SEO metadata configured
- [ ] Firebase project configured
- [ ] Domain configured (if custom domain)

---

## 🎯 Performance Optimization

The project includes:
- ✅ Image optimization (WebP, AVIF)
- ✅ Static page generation (SSG)
- ✅ Code splitting
- ✅ Lazy loading
- ✅ Minified CSS/JS
- ✅ CDN delivery via Firebase

---

## 🚀 Going Live

### After Deployment:

1. **Test Live Site**
   - Visit your deployed URL
   - Test all functionality
   - Check mobile responsiveness

2. **Update DNS** (if custom domain)
   - Add DNS records in domain registrar
   - Wait for DNS propagation (24-48 hours)

3. **Monitor**
   - Check Firebase console for analytics
   - Monitor performance
   - Track user interactions

---

## 📈 Future Enhancements

Potential improvements:
- Add backend API for contact form
- Implement analytics tracking
- Add blog section
- Create admin dashboard
- Add more product categories

---

**Last Updated:** November 2025  
**Version:** 1.0.0  
**License:** Private

---

## 🎉 Congratulations!

You're now ready to deploy and run the BreeBond website successfully!

For any issues or questions, refer to the troubleshooting section or contact the development team.
