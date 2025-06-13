# @atomazing-org/super-app-host

The central **Host Application** of the Atomazing Super App architecture. This app serves as a container and runtime for dynamic microfrontends, like `timesheet`, loaded at runtime.

## ✨ Features

- Loads microfrontends dynamically using `DynamicModule`
- Dev and Dev-Release build modes
- Vite-based configuration via `@atomazing-org/vite-config`
- Supports React 18 and Telegram WebApp SDK
- Built-in ESLint, Prettier, and TypeScript integration

## 📦 Installation

```bash
npm install
```

## 🚀 Usage

### Start the development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Build for dev-release environment

```bash
npm run build:dev-release
```

### Preview the built app

```bash
npm run preview
```

## 📁 Project Structure

```
super-app-host/
├── src/
│   ├── index.tsx
│   └── components/
│       └── DynamicModule.tsx
├── public/
├── vite.config.ts
└── package.json
```

## 🧩 Dynamic Module Loading

Modules (microfrontends) are loaded using:

```ts
<DynamicModule path={MODULE_ENTRYPOINT} />
```

Where `MODULE_ENTRYPOINT` is resolved from the environment mode or defaults to a fallback like `/timesheet.js`.

## 🧪 Lint & Format

```bash
npm run lint         # Run all linters
npm run format       # Format code with ESLint + Prettier
```

## 🔧 Scripts

| Script              | Description                              |
|---------------------|------------------------------------------|
| `dev`               | Start local development server (Vite)    |
| `build`             | Production build                         |
| `build:dev-release` | Build with `dev-release` mode            |
| `preview`           | Serve production build locally           |
| `preview:watch`     | Auto-preview with rebuilds               |
| `clean`             | Delete `dist/` and `node_modules/`       |
| `debug:*`           | Debug config for TypeScript, ESLint, etc |

## 📚 Related Packages

- [`@atomazing-org/vite-config`](https://github.com/atomazing/vite-config)
- [`@atomazing-org/telegram-web-app`](https://github.com/atomazing/telegram-web-app)
- [`@atomazing-org/tsconfig`](https://github.com/atomazing/tsconfig)

## 📄 License

MIT
