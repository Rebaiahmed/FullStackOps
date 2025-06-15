# 🚀 Full-Stack Monorepo Practice Project

This monorepo is built with [Nx](https://nx.dev) to explore and practice building scalable **full-stack applications** using modern tools and technologies. It includes:

- 🧱 Angular & Vue for Frontend  
- ⚙️ NestJS for Backend (API)  
- 🧪 Cypress & Playwright for E2E Testing  
- 🧹 ESLint / TSLint for Code Quality  
- 🔬 Jest & Vite for Unit Testing  
- 📘 Storybook for UI Components  
- 🐳 Docker for Containerization  
- ☁️ AWS & Kubernetes for Cloud Infrastructure  
- 📈 Logging & Monitoring Integrations  
- 🎯 Nx Affected for Optimized CI/CD  

---

## 🏗️ Project Structure

This Nx workspace supports multiple frameworks and tools, organized into domain-driven libraries and applications.

- `apps/` - Angular, Vue, and NestJS applications  
- `libs/` - Shared and feature-specific libraries  
- `.github/`, `tools/` - CI/CD scripts and custom tooling  

---

## 📦 Quick Start

Install dependencies:

```bash
npm install
```

Serve the Angular app:

```bash
npx nx serve full-stack-ops-monorepo
```

Build the project:

```bash
npx nx build full-stack-ops-monorepo
```

Run affected apps/libs after a commit:

```bash
npx nx affected:build
```

---

## 🧪 Testing

Run unit tests with **Jest**:

```bash
npx nx test my-lib-or-app
```

Use **Vite** for fast dev & test cycles where applicable.

Run end-to-end tests with **Cypress** or **Playwright**:

```bash
npx nx e2e my-app-e2e
```

---

## 📚 Storybook

To run Storybook for components:

```bash
npx nx storybook ui-library-name
```

---

## 🧹 Code Quality

Lint your code using ESLint (TSLint support where applicable):

```bash
npx nx lint my-lib-or-app
```

---

## 🐳 Docker Support

Build Docker images:

```bash
docker build -t my-app ./apps/my-app
```

Run container:

```bash
docker run -p 3000:3000 my-app
```

---

## ☁️ AWS + Kubernetes

Deployments and infrastructure setups include:

- Infrastructure-as-Code templates  
- Kubernetes YAMLs  
- Helm charts for microservices  
- AWS CLI/CDK or Terraform configurations (optional)  

---

## 🧭 Nx Tips

Explore all available tasks:

```bash
npx nx show project full-stack-ops-monorepo
```

Visualize the dependency graph:

```bash
npx nx graph
```

Generate new apps/libraries:

```bash
npx nx g @nx/angular:app my-angular-app
npx nx g @nx/vue:app my-vue-app
npx nx g @nx/nest:app my-api
npx nx g @nx/angular:lib shared-ui
```

---

## 🔧 Developer Tools

- [Nx Console (VSCode/IntelliJ)](https://nx.dev/getting-started/editor-setup) for GUI-based Nx commands  
- [Nx Plugin Registry](https://nx.dev/plugin-registry)  

---

## 📈 Logging & Monitoring

Integrations and practice for:

- Logging (e.g., Winston, Pino)  
- Metrics and tracing (e.g., Prometheus, Grafana)  
- Error tracking (e.g., Sentry)  

---

## 📌 Goals of this Monorepo

- Practice **monorepo management**  
- Explore **CI/CD pipelines** with affected builds  
- Test **multi-framework** development  
- Develop & document **end-to-end lifecycle** of full-stack apps  
- Integrate **modern DevOps practices**  

---

## 🤝 Community & Resources

- [Nx Documentation](https://nx.dev)  
- [Storybook Docs](https://storybook.js.org/docs/react/get-started/introduction)  
- [NestJS Docs](https://docs.nestjs.com/)  
- [AWS Docs](https://docs.aws.amazon.com/)  
- [Kubernetes Docs](https://kubernetes.io/docs/)  

---

This is a **learning-focused monorepo**, ideal for mastering real-world full-stack architecture and DevOps practices in a modern developer environment.
