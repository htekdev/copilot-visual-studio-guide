# GitHub Copilot Keyboard Shortcuts for Visual Studio

A comprehensive reference of all GitHub Copilot keyboard shortcuts in Visual Studio 2022 (version 17.8+).

## Inline Code Completions

| Action | Shortcut |
|--------|----------|
| Accept entire suggestion | `Tab` |
| Reject/Dismiss suggestion | `Esc` |
| Manually trigger completion | `Alt+.` or `Alt+,` |
| Cycle to next completion | `Alt+.` |
| Cycle to previous completion | `Alt+,` |
| Accept word by word | `Ctrl+Right Arrow` |
| Accept line by line | `Ctrl+Down Arrow` |

**Source:** [Get started with GitHub Copilot completions](https://learn.microsoft.com/visualstudio/ide/visual-studio-github-copilot-extension?view=visualstudio)

## Next Edit Suggestions (NES)

| Action | Shortcut |
|--------|----------|
| Navigate to NES suggestion | `Tab` (first press) |
| Accept NES suggestion | `Tab` (second press) |
| Dismiss NES suggestion | `Esc` |
| Manually trigger NES (when hidden) | `Alt+.` or `Alt+,` |

**Source:** [Get started with GitHub Copilot next edit suggestions](https://learn.microsoft.com/visualstudio/ide/copilot-next-edit-suggestions?view=visualstudio)

## Copilot Chat Window

| Action | Shortcut |
|--------|----------|
| Open Copilot Chat window | `Ctrl+\, C` |
| Create new chat thread | `Ctrl+N` (in chat window) |
| Switch to previous thread | `Ctrl+PgDown` (in chat window) |
| Switch to next thread | `Ctrl+PgUp` (in chat window) |
| Expand thread dropdown | `Ctrl+Shift+T` (in chat window) |

**Source:** [What is the GitHub Copilot Chat experience for Visual Studio?](https://learn.microsoft.com/visualstudio/ide/visual-studio-github-copilot-chat?view=visualstudio)

## Inline Chat

| Action | Shortcut |
|--------|----------|
| Close inline chat | `Esc` |

**Note:** Inline chat is invoked via right-click context menu → "Ask Copilot" or through the editor margin indicator.

**Source:** [What is the GitHub Copilot Chat experience for Visual Studio?](https://learn.microsoft.com/visualstudio/ide/visual-studio-github-copilot-chat?view=visualstudio)

## Copilot Edits

| Action | Shortcut |
|--------|----------|
| Accept edit proposal | `Tab` |
| Reject edit proposal | `Alt+Delete` |
| Navigate to next proposal | `F8` |

**Source:** [What is GitHub Copilot Edits?](https://learn.microsoft.com/visualstudio/ide/copilot-edits?view=visualstudio)

## Code Review (Local Changes)

The code review feature uses the sparkle button in the Git Changes window. After reviewing:

| Action | Shortcut |
|--------|----------|
| Navigate through suggested changes | Standard diff navigation |

**Note:** Enable via **Tools → Options → Preview Features → Pull Request Comments** and **Tools → Options → GitHub → Copilot → Source Control Integration → Enable Git preview features**.

**Source:** [Visual Studio 2026 release notes](https://learn.microsoft.com/visualstudio/releases/2026/release-notes)

## Chat Thread Management

| Action | Shortcut |
|--------|----------|
| New chat thread | `Ctrl+N` |
| Previous thread | `Ctrl+PgDown` |
| Next thread | `Ctrl+PgUp` |
| Expand thread dropdown | `Ctrl+Shift+T` |

**Source:** [Manage chat context with references](https://learn.microsoft.com/visualstudio/ide/copilot-chat-context-references?view=visualstudio)

## Related Visual Studio Shortcuts

These general Visual Studio shortcuts complement Copilot functionality:

| Action | Shortcut |
|--------|----------|
| Feature Search / Command Palette | `Ctrl+Shift+P` |
| Quick Actions (light bulb) | `Alt+Enter` or `Ctrl+.` |
| Toggle completion mode (IntelliSense) | `Ctrl+Alt+Space` |
| Peek Definition | `Alt+F12` |
| Go to Definition | `F12` |

**Source:** [Productivity guide for Visual Studio](https://learn.microsoft.com/visualstudio/ide/productivity-features?view=visualstudio)

## Customizing Shortcuts

You can customize any Copilot keyboard shortcut:

1. Go to **Tools → Options**
2. Expand **Environment → Keyboard**
3. Search for commands containing "copilot" or "GitHub"
4. Assign your preferred shortcuts

### Configurable Completion Settings

- **Change accept key:** By default, `Tab` accepts suggestions. You can change it to `Right Arrow` via **Tools → Options → Text Editor → Inline Suggestions**.
- **Manual trigger mode:** Disable automatic completions and use `Alt+,` or `Alt+.` to manually trigger via **Tools → Options → Text Editor → Inline Suggestions → General**.

**Source:** [Identify and customize keyboard shortcuts in Visual Studio](https://learn.microsoft.com/visualstudio/ide/identifying-and-customizing-keyboard-shortcuts-in-visual-studio?view=visualstudio)

## Slash Commands Reference

While not keyboard shortcuts, these are essential chat commands:

| Command | Purpose |
|---------|---------|
| `/doc` | Generate documentation comments |
| `/explain` | Explain selected code |
| `/fix` | Propose fixes for code issues |
| `/generate` | Generate new code |
| `/help` | Get Copilot Chat help |
| `/optimize` | Improve code performance |
| `/tests` | Generate unit tests |

**Source:** [Customize chat responses and set context](https://learn.microsoft.com/visualstudio/ide/copilot-chat-context?view=visualstudio)

---

## Summary Table: All Copilot Shortcuts

| Feature | Action | Shortcut |
|---------|--------|----------|
| Completions | Accept | `Tab` |
| Completions | Reject | `Esc` |
| Completions | Manual trigger | `Alt+.` / `Alt+,` |
| Completions | Cycle next | `Alt+.` |
| Completions | Cycle previous | `Alt+,` |
| Completions | Accept word | `Ctrl+Right Arrow` |
| Completions | Accept line | `Ctrl+Down Arrow` |
| NES | Navigate to | `Tab` |
| NES | Accept | `Tab` (2nd press) |
| NES | Dismiss | `Esc` |
| Chat | Open window | `Ctrl+\, C` |
| Chat | New thread | `Ctrl+N` |
| Chat | Previous thread | `Ctrl+PgDown` |
| Chat | Next thread | `Ctrl+PgUp` |
| Chat | Thread dropdown | `Ctrl+Shift+T` |
| Inline Chat | Close | `Esc` |
| Edits | Accept | `Tab` |
| Edits | Reject | `Alt+Delete` |
| Edits | Next proposal | `F8` |

---

*Last updated: Based on Visual Studio 2022 version 17.14+ and Visual Studio 2026 documentation*

## Sources

- [Get started with GitHub Copilot completions](https://learn.microsoft.com/visualstudio/ide/visual-studio-github-copilot-extension?view=visualstudio)
- [Get started with GitHub Copilot next edit suggestions](https://learn.microsoft.com/visualstudio/ide/copilot-next-edit-suggestions?view=visualstudio)
- [What is the GitHub Copilot Chat experience for Visual Studio?](https://learn.microsoft.com/visualstudio/ide/visual-studio-github-copilot-chat?view=visualstudio)
- [What is GitHub Copilot Edits?](https://learn.microsoft.com/visualstudio/ide/copilot-edits?view=visualstudio)
- [Manage chat context with references](https://learn.microsoft.com/visualstudio/ide/copilot-chat-context-references?view=visualstudio)
- [Customize chat responses and set context](https://learn.microsoft.com/visualstudio/ide/copilot-chat-context?view=visualstudio)
- [Productivity guide for Visual Studio](https://learn.microsoft.com/visualstudio/ide/productivity-features?view=visualstudio)
- [Identify and customize keyboard shortcuts in Visual Studio](https://learn.microsoft.com/visualstudio/ide/identifying-and-customizing-keyboard-shortcuts-in-visual-studio?view=visualstudio)
