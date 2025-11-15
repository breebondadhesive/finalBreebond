# ⚡ Quick Start Guide

Get the BreeBond website running in 5 minutes!

---

## 🎯 For New Developers

### Step 1: Clone & Install (2 minutes)

```bash
# Clone the repository
git clone https://github.com/princekakadiya12/completebreebond.git

# Go to project folder
cd completebreebond

# Install everything
npm install
```

### Step 2: Run Locally (30 seconds)

```bash
# Start development server
npm run dev
```

Open your browser: **http://localhost:3000**

✅ **Done!** You should see the BreeBond homepage.

---

## 🚀 For Deployment

### Option A: Firebase Hosting (Recommended)

```bash
# 1. Build the project
npm run build

# 2. Install Firebase CLI (first time only)
npm install -g firebase-tools

# 3. Login to Firebase (first time only)
firebase login

# 4. Deploy
firebase deploy --only hosting
```

**Live URL:** Your site will be at `https://[your-project].web.app`

---

## 🔍 Quick Test

After running locally, test these:

1. **Homepage** → Videos should play
2. **Click "Products"** → Should show 4 products
3. **Click a product** → Should show details
4. **Click "Contact Us"** → Form should work
5. **Try mobile view** → Should be responsive

---

## ❗ Common Issues

**Port already in use?**
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID [NUMBER] /F

# Mac/Linux
lsof -ti:3000 | xargs kill -9
```

**Build failing?**
```bash
# Clear and reinstall
rm -rf .next node_modules
npm install
npm run build
```

**Images not loading?**
- Check `/public/images/` folder exists
- Verify image filenames match code

---

## 📁 What You Need

### Required Files in `/public/images/`:

**Logos:**
- `logos/BREEBOND LOGO.svg`

**Products:**
- `gallery/C2TE.png`
- `gallery/C2TES1.png`
- `gallery/C2TE - S1- Plus.png`
- `gallery/C2TE - S2 - Flex.png`

**Videos (Optional):**
- `video1.mp4`, `video2.mp4`, `video3.mp4`
- `video4.mp4`, `video5.mp4`

**Backgrounds:**
- `kim.jpg`
- `allproduct.png`
- `contactus.png`
- `footer.png`

---

## 🎨 Pages Available

| Page | URL | Description |
|------|-----|-------------|
| Home | `/` | Main landing page with videos |
| Products | `/products` | All 4 products list |
| Product Detail | `/products/[slug]` | Individual product pages |
| Company | `/company` | About the company |
| Contact | `/contact` | Contact form & info |
| Terms | `/terms` | Terms of service |

---

## 🔧 Essential Commands

```bash
npm install      # Install dependencies
npm run dev      # Start development (http://localhost:3000)
npm run build    # Build for production
npm start        # Run production build locally
firebase deploy  # Deploy to Firebase
```

---

## 📖 Need More Info?

- **Detailed Setup:** See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)
- **Full Checklist:** See [SETUP_CHECKLIST.md](./SETUP_CHECKLIST.md)
- **Project Details:** See [README.md](./README.md)

---

## ✅ Success!

You're ready when:
- ✅ `npm run dev` opens the site
- ✅ Videos play on homepage
- ✅ Navigation works
- ✅ Product pages load
- ✅ Mobile responsive

**Questions?** Check the detailed guides or contact breebondllp@gmail.com

---

**Time to first run: ~3 minutes**  
**Time to deploy: ~8 minutes total**

Happy coding! 🎉
