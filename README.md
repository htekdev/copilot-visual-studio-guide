# GitHub Copilot for Visual Studio Guide

<div align="center">

**A curated resource hub for GitHub Copilot in Visual Studio**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Built with Astro](https://img.shields.io/badge/Built%20with-Astro-FF5D01?logo=astro)](https://astro.build)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

[🆕 What's New](#-whats-new) · [🎥 Videos](#-video-library) · [📚 Resources](#-resources) · [🚀 Get Started](#-getting-started)

</div>

---

## 📋 Overview

This site is a **curated resource hub** for GitHub Copilot in Visual Studio. Rather than duplicating documentation, we focus on:

- **Curated links** to official Microsoft and GitHub sources
- **Video library** organized by Copilot enablement pillars
- **Changelog tracking** for what's new in Copilot
- **Presentations** for team training and demos

## 🆕 What's New

Track the latest updates for GitHub Copilot in Visual Studio:

- **January 2026**: Colorized completions, partial acceptance
- **November 2025**: VS 2026 GA, GitHub cloud agent preview
- **August 2025**: MCP generally available
- **May 2025**: Coding agent announcement

[View full changelog →](https://htekdev.github.io/copilot-visual-studio-guide/whats-new/)

## 🎥 Video Library

**30+ curated videos** from official sources (Microsoft Visual Studio, Visual Studio Code, GitHub), organized by pillar:

| Pillar | Description | Videos |
|--------|-------------|--------|
| 🚀 Getting Started | Introduction and setup | 5 |
| ⚡ Autocomplete | Code completions | 2 |
| 💬 Chat | Copilot Chat | 6 |
| 🤖 Agent Mode | Autonomous coding | 9 |
| 🔌 MCP | Model Context Protocol | 1 |
| 🔍 Code Review | AI-powered review | 3 |
| ⚙️ Advanced | NES, debugging, custom instructions | 9 |

[Browse video library →](https://htekdev.github.io/copilot-visual-studio-guide/videos/)

## 📚 Resources

Curated links to official documentation and learning materials:

- **Official Documentation** — Microsoft Learn, GitHub Docs
- **Visual Studio Blog** — Copilot announcements and tutorials
- **GitHub Blog** — Deep dives and tutorials
- **Microsoft Learn Training** — Official training modules
- **Community & Support** — Discussion forums and help

[View all resources →](https://htekdev.github.io/copilot-visual-studio-guide/resources/)

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+ 
- npm or pnpm

### Run Locally

```bash
# Clone the repository
git clone https://github.com/htekdev/copilot-visual-studio-guide.git
cd copilot-visual-studio-guide

# Install dependencies
npm install

# Start the development server
npm run dev
```

The site will be available at `http://localhost:4321`.

### Available Commands

| Command | Action |
|---------|--------|
| `npm install` | Install dependencies |
| `npm run dev` | Start local dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview production build locally |

## 🏗️ Architecture

```
src/
├── content/
│   └── videos/        # Video content by pillar
├── pages/
│   ├── index.astro    # Homepage
│   ├── whats-new.astro # Changelog
│   ├── videos.astro   # Video library
│   ├── resources.astro # Resources hub
│   └── presentations.astro
├── components/
│   └── Sidebar.astro  # Navigation
└── layouts/
```

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-addition`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to your branch (`git push origin feature/amazing-addition`)
5. **Open** a Pull Request

### Contribution Ideas

- 🎥 Suggest new videos from official sources
- 📋 Update changelog with new releases
- 🔗 Add new official resource links
- 🐛 Report issues or bugs

## 🔗 Official Sources

- [GitHub Copilot What's New](https://github.com/features/copilot/whats-new)
- [GitHub Changelog (Copilot)](https://github.blog/changelog/label/copilot/)
- [Visual Studio Blog](https://devblogs.microsoft.com/visualstudio/tag/github-copilot/)
- [GitHub Copilot Docs](https://docs.github.com/copilot)
- [Microsoft Learn](https://learn.microsoft.com/visualstudio/ide/visual-studio-github-copilot-get-started)

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

<div align="center">

**Built with ❤️ by [@htekdev](https://github.com/htekdev)**

*If you find this guide helpful, consider giving it a ⭐!*

</div>
