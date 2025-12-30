# 🚀 Ruchit Das - AI Engineer Portfolio

A high-performance, interactive portfolio website built with **React**, **Framer Motion**, and **Tailwind CSS**. Designed to showcase projects, skills, and certifications with a premium, macOS-inspired aesthetic.

![Portfolio Preview](public/preview-image.png) *<!-- Add a screenshot later if possible -->*

## ✨ Features

- **🎨 Premium UI/UX:** Glassmorphism, dark mode, and silky-smooth transitions.
- **🍎 macOS-inspired Interactions:** Interactive folders with spring physics and staggered animations.
- **⚡ High Performance:** Built with Vite for instant loading and optimized assets.
- **📱 Fully Responsive:** Flawless experience across all devices (Desktop, Tablet, Mobile).
- **🔧 Dynamic Content:** JSON-driven components for easy updates of projects and certificates.

## 🛠️ Tech Stack

- **Framework:** [React 18](https://reactjs.org/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** 
  - [Framer Motion](https://www.framer.com/motion/) (Layout transitions, spring physics)
  - [GSAP](https://greensock.com/gsap/) (Parallax effects, advanced timelines)
- **Icons:** [Lucide React](https://lucide.dev/)

## 📂 Project Structure

```bash
src/
├── components/        # Reusable UI components
│   ├── InteractiveFolder.jsx  # The core folder mechanism
│   ├── Certificates.jsx       # Certificates section
│   ├── Achievements.jsx       # Achievements section
│   ├── Projects.jsx           # Project showcase
│   └── ...
├── App.jsx            # Main layout and routing
└── main.jsx           # Entry point
public/
├── certificates/      # PDF and Image assets for certs
└── achievements/      # PDF and Image assets for awards
```

## 🚀 Getting Started

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/portfolio-website.git
    cd portfolio-website
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run development server:**
    ```bash
    npm run dev
    ```

4.  **Build for production:**
    ```bash
    npm run build
    ```

## 🌟 Highlights

- **Interactive Folders:** Custom built component using Framer Motion's `layout`, `AnimatePresence`, and `layout="position"` to achieve a distortion-free, physics-based expansion effect similar to macOS.
- **Asset Management:** Includes a custom Python script (`migrate_assets.py`) to automatically catalog and import PDF/Image assets from local directories.

## 📄 License

This project is licensed under the MIT License.

---
*Built with ❤️ by Ruchit Das*
