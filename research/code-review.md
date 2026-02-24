# GitHub Copilot Code Review in Visual Studio

## Overview

GitHub Copilot Code Review is a feature that lets you review your local code changes before committing them. It identifies potential performance, security, and logic issues early, ensuring you maintain a higher quality codebase.

## How to Trigger Code Review

### The Sparkle Button in Git Changes Window

1. Open the **Git Changes** window in Visual Studio
2. Look for the **sparkle comment button** (✨) in the Git Changes window
3. Click the sparkle button to initiate code review
4. Copilot will examine your uncommitted changes and provide inline suggestions directly in your editor

![Code Review Button](https://learn.microsoft.com/visualstudio/releases/2026/media/18.0/17.14_local_code_review_icon.png)

## What It Reviews

- **Uncommitted changes** — Reviews your local working changes before they become part of a commit
- **Changed code across your changeset** — Generates comments for the entire change set at once, rather than file-by-file
- **Staged and unstaged files** — All modified files in your Git Changes window

## Types of Issues It Catches

GitHub Copilot Code Review identifies several categories of issues:

### 1. Logic Errors
- Catches subtle bugs that might be overlooked by traditional methods
- Example: Using `disable()` when you likely meant `enable()` based on variable naming context

### 2. Security Issues
- Identifies potential security vulnerabilities in code changes
- Flags unsafe patterns before they enter the codebase

### 3. Performance Issues
- Detects potential performance bottlenecks
- Suggests optimizations for better efficiency

### 4. Code Quality
- Provides suggestions to improve overall code quality
- More insightful and precise reviews using newer reasoning models

## How to Apply Suggested Fixes

1. **Review inline comments** — Suggestions appear directly in your editor as inline comments
2. **Navigate between comments** — Use the up arrow icon in the top right corner of comment boxes to collapse or navigate
3. **Accept or reject** — Review each suggestion for accuracy and apply as needed
4. **Apply changes** — Make modifications based on Copilot's feedback before committing

> **Important:** As with all AI-powered features, always review Copilot's suggestions for accuracy before applying them.

## Settings to Enable the Feature

### Required Feature Flags

Enable both of the following settings in Visual Studio:

1. **Enable Git preview features:**
   - Navigate to: `Tools` → `Options` → `GitHub` → `Copilot` → `Source Control Integration`
   - Check: **Enable Git preview features**

2. **Pull Request Comments:**
   - Navigate to: `Tools` → `Options` → `Preview Features`
   - Check: **Pull Request Comments**

### Prerequisites

- **Active GitHub Copilot subscription** enabled within Visual Studio
- **Visual Studio 2022 version 17.13** or later
- **Signed in** to Visual Studio with a GitHub account that has Copilot access

### Free Tier Available

If you don't already have GitHub Copilot, you can [sign up for free](https://github.com/features/copilot).

## Additional Features

### Git Context in Copilot Chat

Copilot Chat now supports referencing your commits and changes:
- Use `#changes` to reference your uncommitted changes
- Ask Copilot to summarize your changes
- Ask Copilot to explain specific commits

### Enhanced Code Review in Visual Studio 2026

The latest updates include:
- **Enhanced Comment Quality** — Newer reasoning models provide more insightful reviews
- **Optimized Comment Generation** — Reviews entire changeset at once for comprehensive feedback
- **Updated Prompting Techniques** — Clearer, more direct prompts for accurate, relevant feedback

## Availability Across IDEs

As of September 2025, Copilot code review is available in:
- Visual Studio
- Visual Studio Code
- JetBrains IDEs (IntelliJ IDEA, PyCharm, WebStorm, etc.)
- Xcode
- GitHub Web UI (for pull requests)

---

## Sources

1. **Visual Studio Blog** — "Catch issues before you commit to Git"
   - https://devblogs.microsoft.com/visualstudio/catch-issues-before-you-commit-to-git/
   - Author: Jessie Houghton, Product Manager II
   - Published: February 27, 2025

2. **Visual Studio 2026 Release Notes**
   - https://learn.microsoft.com/visualstudio/releases/2026/release-notes#november-update-1800

3. **GitHub Docs** — "Using GitHub Copilot code review"
   - https://docs.github.com/en/enterprise-cloud@latest/copilot/how-tos/agents/copilot-code-review/using-copilot-code-review?tool=visualstudio

4. **GitHub Changelog** — "Copilot code review: Now in JetBrains IDEs and Visual Studio"
   - https://github.blog/changelog/2025-09-18-copilot-code-review-now-in-jetbrains-ides-and-visual-studio/
   - Published: September 18, 2025

5. **Microsoft Learn Show** — "Catch issues at commit time and review changes with GitHub Copilot"
   - https://learn.microsoft.com/en-us/shows/github-copilot-for-visual-studio/catch-issues-at-commit-time-and-review-changes-with-github-copilot-miniseries

6. **What's New for C++ in Visual Studio**
   - https://learn.microsoft.com/cpp/overview/what-s-new-for-visual-cpp-in-visual-studio

---

*Research compiled: January 2025*
