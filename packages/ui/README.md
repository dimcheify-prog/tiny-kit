# Tiny Kit

A modern UI component library for React

[![npm version](https://badge.fury.io/js/@dimcheify%2Ftiny-kit.svg)](https://www.npmjs.com/package/@dimcheify/tiny-kit)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Installation
```bash
npm install @dimcheify/tiny-kit
# or
pnpm add @dimcheify/tiny-kit
# or
yarn add @dimcheify/tiny-kit
```

## Usage

Import core css file in the root of your project.

```javascript
import '@dimcheify/tiny-kit/index.css';
```

Then just import UI components.

```javascript
import { Title, Button } from '@dimcheify/tiny-kit';

function App() {
  return (
    <div>
      <Title>Welcome to Tiny Kit</Title>
      <Button>Get Started</Button>
    </div>
  );
}
```

---

You can now easily redefine component render in HTML DOM and use its attributes

```javascript
<Button component="a" href="https://domain.com">
  Get Started
</Button>
```
---

## ✨ Features

- 🎨 Modern and clean design
- 🚀 Lightweight and fast
- 📦 Tree-shakeable
- 💪 TypeScript support
- ⚡️ Zero dependencies (peer deps only)

---

## 📄 License

MIT © [Dmitrij Perelygin](https://github.com/dimcheify-prog)

