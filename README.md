# 🚀 Mohan Paudel - Portfolio Website

<div align="center">

![Portfolio Preview](./public/mohan.png)

**A modern, animated portfolio showcasing projects, skills, and experience**

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge)](https://paudelmohan.com.np)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

</div>

---

## ✨ Features

### 🎨 Design & UX
- **Responsive Design** - Seamlessly adapts to all screen sizes (mobile, tablet, desktop)
- **Dark/Light Mode** - Smooth theme switching with persistent preferences
- **Animated UI** - Fluid animations powered by Framer Motion
- **Particle Effects** - Interactive background animations
- **Smooth Scrolling** - Enhanced navigation experience with scroll animations

### 🛠️ Technical Features
- **SEO Optimized** - Complete meta tags, Open Graph, and Twitter cards
- **Performance Optimized** - Fast loading times with Next.js optimizations
- **Type-Safe** - Built with TypeScript for reliability
- **Accessible** - WCAG compliant with keyboard navigation support
- **Modern Stack** - Latest web technologies and best practices

### 📱 Sections
- **Hero** - Eye-catching introduction with animated elements
- **About** - Personal introduction and skill highlights
- **Projects** - Showcase of featured work with detailed descriptions
- **CV/Resume** - Education, experience, and technical skills
- **Contact** - Multiple ways to get in touch

---

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | Next.js 14, React 18 |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS, CSS Modules |
| **Animation** | Framer Motion |
| **Icons** | Lucide Icons |
| **UI Components** | Shadcn UI |
| **Deployment** | Vercel |

---

## 📁 Project Structure

```
portfolio-dynamic/
├── app/                          # Next.js app directory
│   ├── layout.tsx               # Root layout with metadata
│   ├── page.tsx                 # Home page component
│   └── globals.css              # Global styles
├── components/                   # React components
│   ├── about.tsx                # About section
│   ├── cv.tsx                   # CV/Resume section
│   ├── footer.tsx               # Footer component
│   ├── hero.tsx                 # Hero section with animations
│   ├── navbar.tsx               # Navigation bar
│   ├── projects.tsx             # Projects grid section
│   ├── projects/                # Individual project components
│   │   ├── project1.tsx
│   │   ├── project2.tsx
│   │   └── ...
│   └── ui/                      # Reusable UI components
│       ├── button.tsx
│       ├── card.tsx
│       └── ...
├── public/                       # Static assets
│   ├── mohan.png
│   └── screenshots/
└── tailwind.config.ts           # Tailwind configuration
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:
- **Node.js** (v18.0 or higher)
- **npm**, **yarn**, or **pnpm**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/paudelmohan27/portfolio-dynamic.git
   cd portfolio-dynamic
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see your portfolio.

### Build for Production

```bash
npm run build
npm run start
```

---

## 🎨 Customization Guide

### 1. Personal Information

**Hero Section** (`components/hero.tsx`)
```typescript
// Update your name, title, and tagline
const name = "Your Name";
const title = "Your Title";
const description = "Your description";
```

**About Section** (`components/about.tsx`)
```typescript
// Update your bio and skills
const bio = "Your bio text...";
const skills = ["Skill 1", "Skill 2", ...];
```

**Contact Information** (`components/footer.tsx`)
```typescript
// Update social links and contact details
const email = "your.email@example.com";
const github = "yourusername";
const linkedin = "yourprofile";
```

### 2. Projects

Add or modify projects in `components/projects.tsx`:

```typescript
const projects = [
  {
    id: 1,
    title: "Project Name",
    description: "Project description",
    technologies: ["React", "Next.js", "TypeScript"],
    image: "/project-image.png",
    github: "https://github.com/yourusername/project",
    live: "https://project-demo.com"
  },
  // Add more projects...
];
```

### 3. Theme & Styling

**Colors** (`tailwind.config.ts`)
```typescript
theme: {
  extend: {
    colors: {
      primary: "#your-color",
      secondary: "#your-color",
      // Add custom colors
    }
  }
}
```

**Fonts** (`app/layout.tsx`)
```typescript
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
```

### 4. SEO & Metadata

Update metadata in `app/layout.tsx`:
```typescript
export const metadata = {
  title: "Your Name - Portfolio",
  description: "Your description",
  keywords: ["keyword1", "keyword2"],
  authors: [{ name: "Your Name" }],
  // Add more metadata...
};
```

---

## 📸 Screenshots

<div align="center">

### 🏠 Home Page
![Home Page](./public/screenshots/home.png)

### 💼 Projects Section
![Projects](./public/screenshots/projects.png)

### 📄 CV Section
![CV](./public/screenshots/cv.png)

</div>

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)

The easiest way to deploy your portfolio:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fpaudelmohan27%2Fportfolio-dynamic)

### Manual Deployment

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Configure build settings (auto-detected for Next.js)
5. Deploy!

### Other Platforms

This portfolio can also be deployed to:
- **Netlify**
- **GitHub Pages** (with static export)
- **AWS Amplify**
- **Cloudflare Pages**

---

## 📊 Performance

- ⚡ **Lighthouse Score**: 95+
- 🚀 **First Contentful Paint**: < 1.5s
- 📱 **Mobile Optimized**: Yes
- ♿ **Accessibility**: WCAG 2.1 AA compliant

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 📬 Contact

**Mohan Paudel**

- 🌐 Website: [paudelmohan.com.np](https://paudelmohan.com.np)
- 📧 Email: [paudelmohan761@gmail.com](mailto:paudelmohan761@gmail.com)
- 💼 GitHub: [@paudelmohan27](https://github.com/paudelmohan27)
- 🔗 LinkedIn: [Mohan Paudel](https://linkedin.com/in/paudelmohan27)

---

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [Shadcn UI](https://ui.shadcn.com/)
- [Lucide Icons](https://lucide.dev/)

---

<div align="center">

**⭐ If you like this project, please give it a star! ⭐**

Made with ❤️ by [Mohan Paudel](https://github.com/paudelmohan27)

</div>
