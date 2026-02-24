# GitHub Copilot Chat Slash Commands in Visual Studio

> **Source:** Microsoft Learn - Customize chat responses and set context  
> **URL:** https://learn.microsoft.com/visualstudio/ide/copilot-chat-context

Slash commands in Copilot Chat help you set the intent quickly for common development tasks. Instead of writing verbose prompts, use these shortcuts to get better answers faster.

## Available Slash Commands

From the official Visual Studio documentation:

| Command | Usage | Chat Window | Inline Chat |
|---------|-------|:-----------:|:-----------:|
| `/doc` | Add comments for specified or selected code | ✅ | ✅ |
| `/explain` | Get code explanations | ✅ | ✅ |
| `/fix` | Propose a fix for problems in the selected code | ✅ | ✅ |
| `/generate` | Generate code to answer specified question | ✅ | ✅ |
| `/help` | Get help on using Copilot Chat | ✅ | ✅ |
| `/optimize` | Analyze and improve running time of the selected code | ✅ | ✅ |
| `/tests` | Create unit tests for the selected code | ✅ | ✅ |

## Command Examples (from Microsoft Learn)

### `/doc` - Generate Documentation

```
/doc DeleteBasketAsync method in BasketService.cs
```

Or select code and type:
```
/doc
```

### `/explain` - Understand Code

```
/explain the AddItemToBasket method in BasketService.cs
```

Or select code and type:
```
/explain
```

### `/fix` - Fix Problems

```
/fix the SetQuantities method in BasketService.cs
```

Or select code and type:
```
/fix
```

### `/generate` - Create New Code

```
/generate code to add two numbers in Calculator.cs
```

### `/optimize` - Improve Performance

```
/optimize the AddItemToBasket method in BasketService.cs
```

Or select code and type:
```
/optimize
```

### `/tests` - Create Unit Tests

Select code and type:
```
/tests using XUnit Framework
```

> **Note:** For .NET testing, Microsoft recommends using [GitHub Copilot Testing for .NET](https://learn.microsoft.com/visualstudio/test/github-copilot-test-dotnet-overview).

### `/help` - Get Assistance

```
/help
```

## How Slash Commands Work

According to the documentation:

> "You can use slash commands in a chat window, or directly inline in the code that you're looking to modify. Commands that help modify or add to the code file you have open in the editor work both in the inline code assistant and the chat windows whereas commands for more general coding questions work only in the chat pane."

### Visual Studio 2022 v17.13+

As of version 17.13, when you type a slash command, it expands into natural language to show what context Copilot will use.

## Context Menu Actions (Copilot Actions)

Visual Studio also provides right-click context menu actions that invoke these slash commands:

| Action | With Code Selected | Without Code Selected |
|--------|-------------------|----------------------|
| Explain | Explains the selected code | Explains code near cursor |
| Optimize Selection | Optimizes selected code | Not applicable |
| Generate Comments | Generates comments for selected code | Generates for code near cursor |
| Generate Tests | Generates tests for selected code | Generates for code near cursor |
| Add to Chat | Adds selected code to Chat as reference | Adds entire file as reference |

### Optimize Selection

The **Optimize Selection** action provides suggestions across:

- **Performance:** Faster algorithms, reduced memory usage, async patterns
- **Maintainability:** Simplified logic, clearer structure, better naming
- **Reliability:** Error handling, resource cleanup, thread safety
- **Architecture:** Dependency injection, better interfaces, modular design

## Prerequisites

- Visual Studio 2022 version 17.10 or later
- GitHub account with Copilot access
- Sign in via **Tools > Options > GitHub > Copilot**

## Related Documentation

- [AI-assisted development in Visual Studio](https://learn.microsoft.com/visualstudio/ide/ai-assisted-development-visual-studio)
- [Use Copilot Chat in Visual Studio](https://learn.microsoft.com/visualstudio/ide/visual-studio-github-copilot-chat)
- [GitHub Copilot Completions](https://learn.microsoft.com/visualstudio/ide/visual-studio-github-copilot-extension)
