# Next Edit Suggestions (NES) - GitHub Copilot in Visual Studio

## Overview

**Next Edit Suggestions (NES)** is a GitHub Copilot feature that uses your recent edits to anticipate the next edit you might want to make—and where that edit should occur. Unlike traditional completions that only suggest code at your cursor position, NES can suggest edits anywhere in your file, predicting insertions, deletions, or mixed changes.

### How It Works

Copilot traditionally looks at the current snapshot of your code to suggest completions. NES expands this by analyzing the **history of edits** you've made to predict what comes next. This provides more context for better suggestions since it considers a sequence of changes rather than just a point-in-time snapshot.

> "You make a change and then Copilot predicts the changes that follow and presents them to you in sequence."
> — GitHub Next

## Prerequisites

- **Visual Studio 2022 version 17.14** or later (latest servicing release recommended)
- **Visual Studio 2026** (for the newest features)
- GitHub account with Copilot access (paid subscription or Copilot Free plan)

## How to Enable NES

### Visual Studio 2022 v17.14+

**Method 1:**
```
Tools > Options > GitHub > Copilot > Copilot Completions > Enable Next Edit Suggestions
```

**Method 2 (newer versions):**
```
Tools > Options > All Settings > Text Editor > Code Completions > General
→ Select "Copilot Next Edit Suggestions (Next-edit predictions from Copilot)" in Code Completions Providers
```

## Using NES

### Basic Workflow

1. **Start coding** - NES activates as you make edits
2. **Arrow indicator appears** - An arrow in the gutter shows when an edit suggestion is available
3. **Press Tab to navigate** - Jump to the suggested edit location
4. **Press Tab again to accept** - Apply the suggested change

### Visual Indicators

- **Right arrow (→)**: Edit suggestion is on a line below or to the right
- **Down arrow (↓)**: Edit suggestion is below the current editor view
- **Up arrow (↑)**: Edit suggestion is above your current position

### Edit Menu

Click the gutter arrow to access the edit suggestion menu with keyboard shortcuts:
- **Tab**: Navigate to suggestion / Accept suggestion
- **Esc**: Dismiss suggestion

### Diff View Display

When NES suggests a change, it displays in a diff view:
- **Red highlighting**: Original code to be replaced/removed
- **Green highlighting**: New code suggested by Copilot

## Display Modes

### Expanded Mode (Default)

Suggestions appear automatically as ghost text when available. The full suggestion is visible inline.

### Collapse Mode

Enable via: `Tools > Options > GitHub > Copilot > Copilot Completions > Collapse Next Edit Suggestions`

In Collapse Mode:
- Only the margin indicator (arrow) appears when suggestions are available
- The suggestion text remains hidden until you choose to view it
- Press **Tab** or click the arrow to reveal the suggestion
- After accepting a suggestion, related suggestions appear automatically
- Unrelated new suggestions remain collapsed

**Benefits of Collapse Mode:**
- Less visual distraction
- Review suggestions only when ready
- Maintains cleaner editor view during focused coding

### Manual Invocation Mode

For even more control:
```
Tools > Options > All Settings > Inline Suggestions > General
→ Set "Inline Suggestions Invocation" to "Manual"
```

Manually trigger suggestions with:
- **Alt + ,** (comma)
- **Alt + .** (period)

## Use Cases

### 1. Rename Cascades / Variable Refactoring

When you rename a variable once, NES suggests updating it throughout the file. It also recognizes naming patterns and suggests updates to subsequent code to match.

**Example:** Rename `userId` to `userIdentifier` → NES suggests updating all other occurrences

### 2. Pattern Matching / Code Modernization

NES recognizes when you're updating code patterns and suggests completing the transformation.

**Example (C++ STL migration):**
- You update `printf()` to `std::cout`
- NES suggests updating related functions like `fgets()` to their modern equivalents

### 3. Refactoring Classes

When refactoring a class (e.g., `Point` to `Point3D`), NES suggests all related changes:
- Constructor updates
- Method signature changes
- Property additions
- Usage site updates

### 4. Adding Fields/Parameters

When adding a new field to a data class or parameter to a method:
- NES suggests initializations
- Updates constructors
- Provides sensible default values at call sites

### 5. Catching Mistakes

NES helps fix:
- **Typos**: `bol` → `bool`
- **Logic errors**: Inverted ternary expressions
- **Operator mistakes**: `&&` should be `||`

### 6. Code Pasting Adjustments

After pasting code, NES suggests adjustments to match the style of surrounding code.

### 7. New Variable Integration

When you add a new variable, NES quickly suggests where and how to use it throughout your code.

## Suggestions vs Completions

| Feature | Completions | Next Edit Suggestions |
|---------|-------------|----------------------|
| Location | At cursor only | Anywhere in file |
| Trigger | Typing new code | After making an edit |
| Scope | Single completion | Series of related changes |
| Type | Insertions only | Insertions, deletions, replacements |
| Context | Current snapshot | Edit history |

## Configuration Options Summary

| Setting | Location | Description |
|---------|----------|-------------|
| Enable NES | Tools > Options > GitHub > Copilot > Copilot Completions | Turn NES on/off |
| Collapse Mode | Tools > Options > GitHub > Copilot > Copilot Completions | Hide suggestions until requested |
| Manual Invocation | Tools > Options > Inline Suggestions > General | Require manual trigger for suggestions |

## Keyboard Shortcuts

| Action | Shortcut |
|--------|----------|
| Navigate to suggestion | Tab |
| Accept suggestion | Tab (when on suggestion) |
| Dismiss suggestion | Esc |
| Manual trigger | Alt + , or Alt + . |

## Best Practices

1. **Let NES guide you** - Don't manually search for related edits; let the arrows lead
2. **Use Tab repeatedly** - Quickly cycle through a series of related changes
3. **Watch the gutter** - Arrows indicate direction to next edit
4. **Enable Collapse Mode** for complex refactoring to reduce visual noise
5. **Trust the diff view** - Red/green highlighting clearly shows what will change

## Technical Background

NES was developed by GitHub Next, with key contributors including:
- Krzysztof Cieślak
- Andrew Rice
- Tamás Szabó
- Albert Ziegler

The feature addresses a fundamental limitation of traditional completions: while completions excel at autocomplete under the cursor, real coding involves edits across entire files. NES expands Copilot's understanding by analyzing edit history rather than just the current code state.

## Sources

1. **Microsoft Learn - Get started with GitHub Copilot next edit suggestions**
   - https://learn.microsoft.com/visualstudio/ide/copilot-next-edit-suggestions?view=visualstudio

2. **Visual Studio Blog - Next edit suggestions available in Visual Studio**
   - https://devblogs.microsoft.com/visualstudio/next-edit-suggestions-available-in-visual-studio-github-copilot/

3. **GitHub Next - Copilot Next Edit Suggestions**
   - https://githubnext.com/projects/copilot-next-edit-suggestions/

4. **Visual Studio Code Blog - Copilot Next Edit Suggestions (preview)**
   - https://code.visualstudio.com/blogs/2025/02/12/next-edit-suggestions

5. **C++ Team Blog - Dynamically Update C++ syntax using Next Edit Suggestions**
   - https://devblogs.microsoft.com/cppblog/dynamically-update-c-syntax-using-next-edit-suggestions/

---

*Research compiled: 2025*
