# copilot-visual-studio-guide — Copilot Instructions

## Project Overview
Comprehensive documentation site for GitHub Copilot in Visual Studio. Built with Astro 5 + Tailwind CSS 4.

## Tech Stack
- **Framework:** Astro 5 (static site generator)
- **Styling:** Tailwind CSS 4 (via @tailwindcss/vite)
- **Content:** MDX for documentation
- **Deployment:** GitHub Pages

## Brand System
- **Theme:** Dark-only
- **Colors:** Primary bg: #0A0A0F. Accents: #00E5FF (cyan), #7C3AED (purple)
- **Fonts:** Space Grotesk (headings), Inter (body), JetBrains Mono (code)

## Architecture
- Documentation lives in `src/content/docs/` as MDX files
- Presentations are standalone HTML in `public/presentations/`
- Code samples live in `/samples/` directory
- Astro components in `src/components/`

## Content Guidelines
- All documentation must be sourced from official Microsoft/GitHub docs
- Never invent features or capabilities — research first
- Include links to official sources
- Keep content scannable with clear headings and bullet points
- Include keyboard shortcuts prominently

## Conventions
- Use TypeScript for all code
- Use Tailwind utility classes, prefer brand tokens
- MDX files use frontmatter for title, description, order
- Presentations are self-contained HTML with embedded CSS/JS
