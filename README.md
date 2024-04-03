# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Running in dev environment

1.  `cd YOUR_APPLICATION`
2.  `npm install`
3.  `npm run dev`

## Folder Structure

```
.
├── package.json
├── postcss.config.js
├── vite.config.js
├── index.html
├── public
│   ├── assets
│   │   └── images --------- All Project Images
│   │   └── icons --------- All Project Icons
│   ├── manifest.json
├── README.md
├── src
│   ├── App.jsx
│   ├── assets
│   │   └── fonts ---------- Project fonts
│   ├── Components --------- UI and Detected Common Components
│   ├── hooks -------------- Helpful Hooks
│   ├── main.jsx
│   ├── _root -------------- All pages and RootLayout
│   ├── hooks ---------- useDebounce.js
│   ├── globals.css
│   └── lib
│       └── utils.js ------- Helpful utils
└── tailwind.config.js ----- Entire theme config, colors, fonts etc.
```