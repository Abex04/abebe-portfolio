# Abebe Mihiretu Demessa — Professional Portfolio Website

Production-ready personal portfolio website for **Abebe Mihiretu Demessa**, Software Engineering graduate from Addis Ababa University, Addis Ababa Institute of Technology (AAiT, 2025).

Built with **React**, **TypeScript**, **Tailwind CSS**, and **Vite**.

---

## 🚀 Live Demo & Repository
- **GitHub**: [https://github.com/Abex04](https://github.com/Abex04)
- **Deployment Platform**: Prepared for [Vercel](https://vercel.com)

---

## 🛠️ Tech Stack & Architecture
- **Framework**: React 19 + Vite + TypeScript (Strict Type Safety)
- **Styling**: Tailwind CSS (Executive Navy `#0B132B`, `#14213D` + Restrained Electric Blue `#2563EB`)
- **Icons**: Lucide Icons + SVG
- **SEO & Structured Data**: Open Graph meta tags, Twitter Cards, Schema.org `Person` JSON-LD, `robots.txt`, and `sitemap.xml`
- **Hosting Configuration**: `vercel.json` with SPA routing and security headers

---

## 📂 Project Structure
```text
abebe-mihiretu-portfolio/
├── public/
│   ├── Abebe_Mihiretu_CV.pdf          # Downloadable CV document from source
│   ├── favicon.svg                    # Custom executive monogram favicon
│   ├── robots.txt                     # Search engine crawler instructions
│   ├── sitemap.xml                    # SEO sitemap
│   └── images/
│       ├── profile.jpg                # Drop your real portrait photo here!
│       ├── profile-avatar.svg         # Default executive fallback monogram
│       └── projects/
│           ├── property-hub.svg       # Real estate project visual preview
│           ├── tms.svg                # Training Management System preview
│           └── healthbridge.svg       # Capstone HealthBridge preview
├── src/
│   ├── components/
│   │   ├── Navbar.tsx                 # Navigation with active tracking & CV download
│   │   ├── Hero.tsx                   # Executive hero with CTAs & status badge
│   │   ├── About.tsx                  # AAiT education & practical experience biography
│   │   ├── Skills.tsx                 # Authentic categorized skills with filtering
│   │   ├── Projects.tsx               # Cards for Property Hub, TMS, HealthBridge
│   │   ├── ProjectModal.tsx           # In-depth architectural deep-dive dialog
│   │   ├── Experience.tsx             # Swiss Diagnostics & Freelance timeline
│   │   ├── Education.tsx              # AAiT degree curriculum, Qiyas & ODC training credentials
│   │   ├── ProfessionalQualities.tsx  # Bilingual communication & professional references
│   │   ├── Contact.tsx                # Verified email, phone, location & mailto generator
│   │   ├── Footer.tsx                 # Professional footer & navigation anchors
│   │   ├── Icons.tsx                  # Dedicated SVGs (GitHub, etc.)
│   │   └── ImageWithFallback.tsx      # Handles custom images with graceful fallback
│   ├── data/
│   │   └── portfolioData.ts           # Central source of truth grounded in CV
│   ├── types/
│   │   └── index.ts                   # Strongly-typed data models
│   ├── App.tsx                        # Master layout assembler
│   ├── index.css                      # Tailwind base and custom smooth scrolling
│   └── main.tsx                       # React root entry
├── vercel.json                        # Vercel deployment & security headers configuration
├── tailwind.config.js                 # Executive navy theme customization
└── package.json
```

---

## 📸 How to Add Your Own Photos & Screenshots

The website is already programmed with high-fidelity visual representations and will automatically load your custom pictures as soon as you place them into the `public/images/` folder:

### 1. Profile Headshot / Photo
- Place your photo inside `public/images/` and name it `profile.jpg` (or `profile.png`).
- If you use `.png`, simply update line 18 in `src/data/portfolioData.ts`:
  ```ts
  profileImage: "/images/profile.png",
  ```
- If no picture is provided, the site gracefully renders an executive `AMD` monogram badge with your AAiT verification tag.

### 2. Project Screenshots
- Drop your project screenshots into `public/images/projects/`:
  - `property-hub.png` (for Abebes Property Hub)
  - `tms.png` (for Training Management System)
  - `healthbridge.png` (for HealthBridge)
- Update the image file extensions in `src/data/portfolioData.ts` if switching from `.svg` to `.png` or `.jpg`.

---

## 💻 Running the Project Locally

1. **Install dependencies** (if not already installed):
   ```bash
   npm install
   ```

2. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Preview the production build locally**:
   ```bash
   npm run preview
   ```

---

## 🌐 Deploying to Vercel

### Option 1: Via GitHub & Vercel Dashboard (Recommended)
1. Push this repository to your GitHub account (`github.com/Abex04`):
   ```bash
   git remote add origin https://github.com/Abex04/abebe-mihiretu-portfolio.git
   git branch -M main
   git push -u origin main
   ```
2. Log into [Vercel](https://vercel.com) using your GitHub account.
3. Click **"Add New..."** → **"Project"**.
4. Import your `abebe-mihiretu-portfolio` repository.
5. Vercel automatically detects **Vite**:
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Click **"Deploy"**. Your website will be live in ~30 seconds with a free `.vercel.app` domain and automatic HTTPS SSL certificate.

### Option 2: Using the Vercel CLI
```bash
npx vercel
```
Follow the interactive prompts to link and deploy immediately.

---

## 🔗 Connecting a Custom Domain (e.g. `abebemihiretu.com`)
1. In your Vercel project dashboard, navigate to **Settings** → **Domains**.
2. Enter your custom domain name (e.g., `abebemihiretu.com` or `abebemihiretu.et`).
3. Vercel will display the DNS records needed:
   - **A Record**: `@` pointing to `76.76.21.21`
   - **CNAME Record**: `www` pointing to `cname.vercel-dns.com`
4. Log into your domain registrar (such as Namecheap, GoDaddy, or ethio telecom) and add these DNS records.
5. Vercel will verify the records and generate an automatic SSL certificate.

---

## 📄 CV Download Verification
The "Download CV" buttons in the navigation bar, hero section, contact area, and footer directly serve the source PDF located at `public/Abebe_Mihiretu_CV.pdf`, preserving all original academic credentials, contact details, and project histories.
