This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

You can enter the income and the year, it will calculate tax

This repository includes

- Next.js 15+
- Typescript
- MUI
- JEST
- ESLint + Prettier
- Hooks Husky+lint-staged

## Project structure
```
simple-australian-calculator/
├── eslint.config.mjs
├── jest.config.ts
├── next-env.d.ts
├── next.config.ts
├── package-lock.json
├── package.json
├── prettier.config.js
├── README.md
├──.github/workflows/ci.yml # GitHub Actions CI pipeline
├── src
│ ├── app
│ │ ├── components
│ │ │ ├── TaxCalculator.test.tsx # UI unit test
│ │ │ └── TaxCalculator.tsx # Tax Calcuilator main component
│ │ ├── layout.tsx
│ │ └── page.tsx # main page
│ ├── lib
│ │ ├── tax
│ │ │ ├── calculateTax.test.ts # unit test for calculateTax
│ │ │ ├── calculateTax.ts # Core tax calculation logic
│ │ │ └── rate.const.ts # ATO tax brackets
│ │ ├── util.test.ts # unit test for util
│ │ └── util.ts # util functions
│ └── theme.ts
├── tsconfig.json
└── tsconfig.tsbuildinfo
```
## Getting Started

### install

```bash
npm install
```

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Run test

you can run test by

```bash
npm run test
```

### Build for production

```bash
npm run build
```

## Code Quality Hook

pre-commit hook is implemented which runs lint and test before commit.

## Continuous Integration (GitHub Actions)

Every pull request and push to main triggers:

- Type checking (tsc)

- Linting (eslint)

- Unit tests (vitest / jest)

- Build verification (next build)

Merges to main are blocked unless all checks pass.
