# GitHub Copilot Inline Completions in Visual Studio

> Research compiled for the Visual Studio Copilot Guide
> Last updated: February 2026

## How Completions Work (Ghost Text)

GitHub Copilot acts as an AI-powered pair programmer that provides **context-aware code completions** directly in the editor as you write code. Copilot provides two kinds of inline suggestions:

### Ghost Text Completions

As you type in the editor, Copilot provides **ghost text suggestions** with colorized syntax highlighting at your current cursor location. These suggestions appear as semi-transparent text that shows what Copilot predicts you'll type next.

**How it works:**
1. GitHub Copilot uses advanced machine-learning models trained on a vast dataset of publicly available code from GitHub repositories
2. As you type code, the AI analyzes the context and provides relevant suggestions in real time
3. You can also receive suggestions by writing a comment in natural language that describes what you want the code to do

**Types of completions:**
- **Line completions** - Sometimes the completion of the current line
- **Block completions** - Sometimes a whole new block of code (multi-line)
- **Partial completions** - You can accept all, or part of a suggestion

### Next Edit Suggestions (NES)

Based on your current editing patterns, NES predicts both:
- **Where** your next code edit will be
- **What changes** you'll make

This is a more advanced feature that understands the editing flow, not just what you're currently typing.

---

## Keyboard Shortcuts

### Essential Shortcuts (Visual Studio)

| Action | Shortcut |
|--------|----------|
| **Accept suggestion** | `Tab` |
| **Dismiss suggestion** | `Esc` |
| **Manually trigger completion** | `Alt+.` or `Alt+,` |
| **Cycle to next completion** | `Alt+.` |
| **Cycle to previous completion** | `Alt+,` |
| **Accept word by word** | `Ctrl+Right Arrow` |
| **Accept line by line** | `Ctrl+Down Arrow` |

### Click-to-Accept Feature

Visual Studio also supports **click-to-accept** for partial completions:
1. When an inline suggestion appears, hover over it
2. As you move the pointer, Visual Studio highlights the segment that will be accepted
3. Click at the point in the suggestion where you want to stop accepting text

This provides a mouse-based alternative to the keyboard shortcuts for partial acceptance.

---

## Settings and Configuration Options

### Accessing Settings

All inline suggestions settings can be found via:
- **Tools** → **Options** → **Text Editor** → **Inline Suggestions**
- Via shortcuts from the **Copilot badge menu**
- Via the context menu from Copilot inline suggestions **margin indicator**

### Key Configuration Options

#### 1. Disable Automatic Completions

By default, each keystroke triggers inline suggestions. To disable this:
- **Path:** Tools → Options → All Settings → Text Editor → Inline Suggestions → General
- **Setting:** Set **Inline Suggestions Invocation** to **Manual**
- **Result:** You can then manually trigger suggestions with `Alt+,` or `Alt+.`

#### 2. Adjust Completion Timing

If completions appear too quickly and interrupt your typing:
- **Path:** Tools → Options → All Settings → Text Editor → Inline Suggestions → Preferences
- **Setting:** Enable **Show inline suggestions only after a pause in typing**
- **Result:** Adds a debounce delay so completions don't flash and disappear while you type

#### 3. Change Accept Keyboard Shortcut

- **Default:** Tab key accepts suggestions
- **Alternative:** Can be changed to the Right Arrow key instead

### Appearance Customization

**Path:** Tools → Options → Environment → Font and Colors → Code Completions

Customize:
- Font type
- Font size
- Foreground/background color
- Style (italic, etc.)
- Opacity

---

## VS 2026 Syntax Highlighting Feature

Visual Studio 2026 introduced a significant improvement to code completions: **colorized syntax highlighting**.

### What's New

Code completions from GitHub Copilot or IntelliCode are now colorized with syntax highlighting to help you quickly parse suggested code. Previously, completions appeared in a **single color**, making it harder to distinguish between different code elements.

### How It Looks

With colorization enabled:
- **Variables** - distinct color
- **Functions** - distinct color  
- **Keywords** - distinct color
- **Strings** - distinct color
- **Other code elements** - distinct colors matching your syntax theme

### Visual Differentiation

To differentiate suggestions from actual code:
- Colorized completions use **lower opacity**
- Colorized completions use **italic styling**

### Enable/Disable Colorization

**To enable:**
- **Path:** Tools → Options → Text Editor → Code Completions
- **Setting:** Check **Use colorized text for code completions**

**To disable:**
- Same path, uncheck the setting to return to original single-color appearance

### Release Info

This feature was announced in the **Visual Studio 2026 February Update (18.3.0)** released February 10, 2026.

---

## Comment-First Development Pattern

One of the most powerful ways to use GitHub Copilot completions is the **comment-first development pattern**.

### How It Works

1. **Write a natural language comment** describing what you want the code to do
2. **Press Enter** to move to the next line
3. **Copilot generates the code** that accomplishes your described task
4. **Accept** with Tab or refine the suggestion

### Example

```csharp
// method to add two numbers
```

After pressing Enter, Copilot suggests:
```csharp
public int AddNumbers(int a, int b)
{
    return a + b;
}
```

### Best Practices

- **Be specific** in your comments for better suggestions
- **Describe intent** rather than implementation details
- **Use domain-specific language** that matches your codebase
- **Break complex tasks** into smaller, commented steps

### Use Cases

You can use comment-first development to:
- **Convert comments to code** - Describe functionality, get implementation
- **Create unit tests** - Describe test scenarios in comments
- **Create SQL queries** - Describe the data you need
- **Generate boilerplate** - Describe patterns and structures

---

## Prerequisites

To use GitHub Copilot completions in Visual Studio:

1. **Visual Studio 2026** or **Visual Studio 2022 version 17.14+** (latest servicing release recommended)
2. **GitHub account** signed in to Visual Studio with Copilot access
3. **Copilot subscription** - Or use **Copilot Free plan** for monthly limit of inline suggestions and chat interactions

---

## Content Exclusion

Completions and suggestions aren't available for **content excluded by your admin**. This is a security feature managed at the organization level.

---

## Code Referencing

If you or your organization **enable suggestions that match public code**, Copilot notifies you when a completion matches code from a public GitHub repository.

**To view details:**
- Select **View code matches** in the notification
- Check the GitHub Copilot logs in the **Output** window
- Log entry includes link to GitHub.com page with license type details
- Includes references to similar code in public repositories

This enables informed decisions about code attribution or removal.

---

## Source URLs

### Primary Microsoft Documentation
- [Get started with GitHub Copilot completions - Visual Studio](https://learn.microsoft.com/en-us/visualstudio/ide/visual-studio-github-copilot-extension?view=visualstudio)
- [Visual Studio 2026 Release Notes](https://learn.microsoft.com/visualstudio/releases/2026/release-notes)
- [AI-assisted development in Visual Studio](https://learn.microsoft.com/visualstudio/ide/ai-assisted-development-visual-studio?view=visualstudio)

### GitHub Documentation
- [GitHub Copilot code suggestions in your IDE](https://docs.github.com/en/copilot/concepts/completions/code-suggestions?tool=visualstudio)
- [Keyboard shortcuts for GitHub Copilot in the IDE](https://docs.github.com/en/copilot/reference/keyboard-shortcuts-for-github-copilot-in-the-ide)
- [Getting code suggestions in your IDE with GitHub Copilot](https://docs.github.com/copilot/using-github-copilot/getting-code-suggestions-in-your-ide-with-github-copilot)

### Community Resources
- [DEV.to - Complete Guide to GitHub Copilot in Visual Studio](https://dev.to/htekdev/the-complete-guide-to-github-copilot-in-visual-studio-every-feature-every-shortcut-every-pattern-2b97)
- [GitHub Community Discussions - Copilot Settings](https://github.com/orgs/community/discussions/65015)

---

## Summary

GitHub Copilot inline completions in Visual Studio provide:

1. **Ghost text suggestions** - Real-time, context-aware code completions
2. **Multiple acceptance options** - Full, partial (word/line), or click-based
3. **Flexible configuration** - Manual/automatic triggering, timing adjustments
4. **VS 2026 colorization** - Syntax-highlighted completions for better readability
5. **Comment-first development** - Natural language to code generation
6. **Enterprise controls** - Content exclusion and code referencing features
