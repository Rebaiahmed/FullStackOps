# 🚀 Full-Stack Monorepo Practice Project

This monorepo is built with [Nx](https://nx.dev) to explore and practice building scalable **full-stack applications** using modern tools and technologies.

🎯 **Goal**: Practice the full life cycle of software development and continue learning through iterative, real-world projects.

---

## 📝 Project Description

This is a self-directed, hands-on project aimed at simulating a real-world, full-stack product development lifecycle. It incorporates modern frontend frameworks (Angular and Vue), backend APIs (NestJS), and shared tooling in a monorepo structure. The purpose is to continuously iterate, refactor, test, and ship improvements while documenting decisions and architecture throughout the journey.

---

## 🛣️ Project Roadmap

### 🗂️ Project Plan

You can also [view the project board on Trello](https://trello.com) for real-time task tracking.

| 🧩 Feature/Area   | 📋 Description                 | 🚦 Status        | 👤 Owner | 📅 Due Date |
|-------------------|---------------------------------|------------------|----------|-------------|
|                   |                                 | To Do / Doing / Done |          |             |

---

## 🧠 Project Architecture

*To be documented: structure, patterns, and design decisions.*

---

## 🛠️ Project Tech Stack

*To be listed: all tools, frameworks, and libraries used in this monorepo.*

---

## 🏗️ Project Structure

This Nx workspace supports multiple frameworks and tools, organized into domain-driven libraries and applications.

- `apps/` - Angular, Vue, and NestJS applications
- `libs/` - Shared and feature-specific libraries
- `.github/`, `tools/` - CI/CD scripts and custom tooling

---

## ⚡ Quick Start

Install dependencies:

```bash
npm install
```

Serve the Angular app:

```bash
npm run start:full-stack
```

Serve the NestJS backend:

```bash
npm run start:nest
```

Serve the Vue.js app:

```bash
npm run start:vue
```

Start all apps:

```bash
npm run start:all
```

Build the full stack app:

```bash
npm run build:full-stack
```

Run affected apps/libs after a commit:

```bash
nx affected:build
```

---

## 🧪 Testing

Run all unit tests:

```bash
npm run test:all
```

Run end-to-end tests:

```bash
npm run e2e:all
```

---

## 📚 Storybook

To start Storybook (for component design system):

```bash
nx run your-lib:storybook
```

Documentation and visual testing support is included.

---

## ✅ Code Quality Measurement

- Use ESLint for linting:

```bash
npm run lint
```

- Run lint only on affected projects:

```bash
npm run lint:affected
```

- Type checking and formatting can be added with TypeScript and Prettier.

---

## ☁️ Deployment to AWS

*To be documented: instructions for deploying frontend and backend to AWS services like S3, EC2, Lambda, or ECS.*

---

## 🎨 Project UI/UX

*To be documented: user flows, design decisions, accessibility considerations, and user experience guidelines.*

---

## 🤝 Community & Resources

- [Nx Documentation](https://nx.dev)
- [Angular Documentation](https://angular.io/docs)
- [Vue.js Documentation](https://vuejs.org/guide/introduction.html)
- [NestJS Docs](https://docs.nestjs.com/)
- [ESLint Documentation](https://eslint.org/docs/latest/)
- [Lighthouse Documentation](https://github.com/GoogleChrome/lighthouse)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Docker Documentation](https://docs.docker.com/)
