# Shahil Mangroliya - Portfolio

Portfolio website showcasing my experience as Head of Engineering, built with React, TypeScript, and Vite.

## 🚀 Technologies

This project is built with:

- **Vite** - Fast build tool and dev server
- **TypeScript** - Type-safe JavaScript
- **React** - UI library
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - UI component library

## 📦 Installation

```sh
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Deployment

This project is configured for GitHub Pages deployment at: https://shahilmangroliya.github.io/

### GitHub Pages Setup

1. Build the project:
   ```sh
   npm run build
   ```

2. The build output will be in the `dist` directory.

3. Configure GitHub Pages:
   - Go to your repository settings
   - Navigate to Pages section
   - Set source to deploy from `gh-pages` branch or `main` branch `/dist` folder
   - Or use GitHub Actions for automatic deployment

### Manual Deployment

```sh
# Build the project
npm run build

# Deploy to gh-pages branch (if using gh-pages package)
npx gh-pages -d dist
```

## 📝 Project Structure

```
src/
├── components/        # React components
│   ├── ui/          # UI components (button, card, toast, etc.)
│   ├── Contact.tsx
│   ├── Education.tsx
│   ├── Experience.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navigation.tsx
│   └── Skills.tsx
├── pages/           # Page components
├── hooks/           # Custom React hooks
├── lib/             # Utility functions
└── App.tsx          # Main app component
```

## 🛠️ Development

The development server runs on `http://localhost:8080` by default.

## 📄 License

© 2024 Shahil Mangroliya. All rights reserved.
