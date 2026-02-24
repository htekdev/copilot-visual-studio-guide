# GitHub Copilot Chat for Visual Studio — Research Notes

> **Last Updated:** February 2026  
> **Covers:** Visual Studio 2022 17.14+ and Visual Studio 2026

---

## Table of Contents

1. [Ask Mode vs Agent Mode](#ask-mode-vs-agent-mode)
2. [Slash Commands](#slash-commands)
3. [Context References](#context-references)
4. [Built-in @Agents](#built-in-agents)
5. [Adding Context (+ Button)](#adding-context--button)
6. [Custom Instructions](#custom-instructions)
7. [Source URLs](#source-urls)

---

## Ask Mode vs Agent Mode

Visual Studio 2022 version 17.14+ introduces two distinct interaction modes in Copilot Chat:

### Ask Mode

- **Default mode** for conversational Q&A
- Provides answers in the chat pane without making code edits
- **100% confidence** that no code changes are made unless you explicitly select **Apply** or copy/paste
- Best for conceptual questions, explanations, and generating code examples without applying them
- Stops after a single response — you control when to continue

### Agent Mode

- **Agentic AI experience** that operates autonomously
- Creates a plan, makes code edits, runs terminal commands, invokes tools, and applies changes across your codebase
- **Iterates automatically** — monitors outcomes (build results, test failures, tool outputs) and refines steps until the goal is reached or input is required
- Can use **MCP (Model Context Protocol)** capabilities
- Requires confirmation before running terminal commands or using non-built-in tools
- Available in VS 2022 17.14+ with "Enable Agent mode in the chat pane" option enabled

**When to Choose:**

| Scenario | Recommended Mode |
|----------|------------------|
| Quick code questions | Ask |
| Explanations without changes | Ask |
| Multi-file code edits | Agent |
| Automated refactoring | Agent |
| MCP tool integrations | Agent |
| Build/test monitoring | Agent |

---

## Slash Commands

Slash commands provide quick, discoverable ways to set intent for common development tasks. Available in both the **chat window** and **inline chat**.

| Command | Description | Chat Window | Inline Chat |
|---------|-------------|:-----------:|:-----------:|
| `/explain` | Get code explanations. Example: `/explain the AddItemToBasket method in BasketService.cs` | ✓ | ✓ |
| `/fix` | Propose a fix for problems in selected code. Example: `/fix the SetQuantities method in BasketService.cs` | ✓ | ✓ |
| `/tests` | Create unit tests for selected code. Example: `/tests using XUnit Framework` | ✓ | ✓ |
| `/doc` | Add comments for specified or selected code. Example: `/doc DeleteBasketAsync method` | ✓ | ✓ |
| `/optimize` | Analyze and improve running time of selected code | ✓ | ✓ |
| `/generate` | Generate code to answer a specified question. Example: `/generate code to add two numbers` | ✓ | ✓ |
| `/help` | Get help on using Copilot Chat | ✓ | ✓ |

### Using Slash Commands

1. **In Chat Window:** Type `/` followed by the command name
2. **In Inline Chat:** Select code, press `Alt+/` (or right-click → Copilot → Inline Chat), then type the slash command
3. **VS 2022 17.13+:** Commands expand to show natural language context as you type

### Copilot Actions (Context Menu)

Right-click selected code to access preconfigured prompts:

| Action | With Code Selected | Without Code Selected |
|--------|-------------------|----------------------|
| Explain | Explains selected code | Explains code near cursor |
| Optimize Selection | Optimizes for performance, maintainability, reliability, architecture | N/A |
| Generate Comments | Generates comments for selection | Generates for code near cursor |
| Generate Tests | Generates tests for selection | Generates for code near cursor |
| Add to Chat | Adds selected code as reference | Adds entire file as reference |

---

## Context References

Context references let you scope Copilot's responses to specific parts of your codebase.

### Implicit Context (Automatic)

Visual Studio automatically includes:
- Currently selected text in the active editor
- The current file active in the editor

### Explicit Context References

#### File References with `#`

Reference files by adding `#` before the filename:

```
#BasketService.cs
#MyFile.cs:66-72    (specific line range)
```

#### Method/Class/Function References with `#`

Reference specific symbols (VS 2022 17.11+):

```
#BasketAddItem          (method)
#BasketService          (class)
#TestCalculator         (test method)
```

#### Solution-Wide Reference with `@workspace`

Use `@workspace` to reference the entire active solution:

```
@workspace where is the authentication logic?
Is there a delete basket method in this @workspace
```

This leverages information about files, projects, and configurations currently open in the IDE.

#### URL References (VS 2022 17.12+)

Reference public URLs for additional context:

```
Based on the README at https://github.com/example/repo, implement...
```

Note: Only static HTML from public URLs — no authentication or dynamic content.

### Usage Examples

| Example | Context Used |
|---------|--------------|
| `What is the purpose of #MyFile.cs:66-72?` | Exact section of file |
| `/explain the #AddItemToBasket in #BasketService.cs` | Specific method in specific file |
| `Could you explain differences between #BasketService and #OrderService?` | Both classes |
| `In my @workspace where is #AddItemToBasket?` | Full solution context |

---

## Built-in @Agents

Visual Studio ships with specialized **preset agents** that integrate deeply with IDE capabilities. Access them via the **agent picker** in the chat panel or by typing `@` in chat.

### @Profiler

**Purpose:** Performance testing and optimization

**Capabilities:**
- Analyze CPU usage, memory allocations, and runtime behavior
- Surface performance bottlenecks
- Generate and run BenchmarkDotNet benchmarks
- Analyze .NET Counters for ASP.NET scenarios
- Apply suggested optimizations
- Validate improvements in a guided loop

**Usage:**
```
@Profiler Please evaluate the performance of this code
@Profiler Help me optimize this LINQ query
```

**Best For:** Performance tuning, benchmark generation, bottleneck identification

### @Debugger

**Purpose:** Intelligent debugging assistance

**Capabilities:**
- Uses call stacks, variable state, and diagnostic tools
- Walks through error diagnosis systematically
- Analyzes exceptions with repository context (Azure DevOps, GitHub)
- Helps resolve unbound breakpoints automatically
- Provides AI-enhanced exception analysis
- Explains inline if-statement evaluations

**Integration Points:**
- Exception Helper with "Ask Copilot" button
- Call Stack window with "Analyze with Copilot"
- Data tips, Variables, LINQ queries
- Conditional breakpoints and tracepoints

**Usage:**
```
@Debugger Why is this exception occurring?
@Debugger Analyze this call stack
```

### @Modernize (a.k.a. App Modernization Agent)

**Purpose:** Framework and dependency upgrades (.NET and C++)

**Capabilities:**
- Upgrade projects to newer .NET versions
- Migrate from .NET Framework to modern .NET
- Assess code, configuration, and dependencies
- Create detailed upgrade documentation (assessment.md, plan.md, tasks.md)
- Execute upgrades with automatic fix attempts
- Migrate technologies to Azure

**Three-Stage Workflow:**
1. **Assessment** — Examines project structure, dependencies, breaking changes
2. **Planning** — Creates detailed specification for resolving issues
3. **Execution** — Breaks plan into sequential tasks with validation

**Usage:**
```
@modernize Upgrade this project to .NET 9
@modernize Migrate this .NET Framework app to .NET 8
```

**Access:** Right-click solution/project → **Modernize**, or type `@modernize` in chat

### @Test (When Solution Loaded)

**Purpose:** Unit test generation

**Capabilities:**
- Generates unit tests tuned to your project's framework and patterns
- Understands existing test patterns in your codebase
- Produces tests that CI won't reject (not boilerplate)

### @VS (Visual Studio Agent)

**Purpose:** IDE-specific assistance and commands

**Capabilities:**
- Helps with Visual Studio features and workflows
- Provides guidance on IDE configuration and options
- Assists with project/solution management

### @Context

**Purpose:** Context management and awareness

**Capabilities:**
- Helps manage and understand what context Copilot is using
- Assists with scoping questions appropriately

---

## Adding Context (+ Button)

The **+** button in the chat window lets you attach additional context to your prompts.

### How to Add Attachments

1. Click the **+** button in the chat input area
2. Select from available options:
   - **Files** — Add specific files from your solution
   - **Images** — Attach images (screenshots, diagrams, UI mockups)
   - **Solution** — Reference the entire solution (@workspace)

### Image Attachments

Visual Studio supports attaching images to provide visual context:
- Screenshots of UI you want to modify
- Error dialogs or messages
- Design mockups for implementation
- Diagrams explaining architecture

**Example:**
> "Update my UI in App.tsx to resemble this image" [attached screenshot]

### Best Practices

1. **Be specific** — Add only relevant files rather than entire solution when possible
2. **Use threads** — Start new threads for different topics to keep context clean
3. **Delete irrelevant history** — Remove prompts that didn't give desired results
4. **Review References dropdown** — Check what context Copilot used after each response

---

## Custom Instructions

Automatically add prespecified context to all chat requests.

### Repository-Level Instructions

Create `.github/copilot-instructions.md` in your repository root:

```markdown
# Copilot Instructions

- Use dependency injection patterns
- Follow company naming conventions
- Prefer async/await over synchronous code
- Always include XML documentation comments
```

**Enable in Visual Studio:**
Tools → Options → GitHub → Copilot → Enable custom instructions from .github/copilot-instructions.md

### Scoped Instructions (Multiple Files)

Create `.github/instructions/*.instructions.md` for specific file types:

```yaml
---
applyTo: "**/*.cs"
---
Use nullable reference types.
Prefer LINQ over foreach loops.
```

### Prompt Files

Create reusable prompt templates in `.github/prompts/*.prompt.md`:

```yaml
---
mode: agent
tools:
  - run_tests
  - file_operations
---
Create comprehensive unit tests for the selected code using xUnit.
Include edge cases and null checks.
```

---

## Source URLs

### Official Microsoft Documentation

- **Copilot Chat Overview:** https://learn.microsoft.com/visualstudio/ide/visual-studio-github-copilot-chat
- **Agent Mode:** https://learn.microsoft.com/visualstudio/ide/copilot-agent-mode
- **Context and References:** https://learn.microsoft.com/visualstudio/ide/copilot-chat-context-references
- **Customize Chat (Slash Commands):** https://learn.microsoft.com/visualstudio/ide/copilot-chat-context
- **Debug with Copilot:** https://learn.microsoft.com/visualstudio/debugger/debug-with-copilot
- **Profiler Agent:** https://learn.microsoft.com/visualstudio/profiling/profile-with-copilot-agent
- **App Modernization Overview:** https://learn.microsoft.com/dotnet/core/porting/github-copilot-app-modernization/overview
- **App Modernization How-To:** https://learn.microsoft.com/dotnet/core/porting/github-copilot-app-modernization/how-to-upgrade-with-github-copilot
- **Call Stack Analysis:** https://learn.microsoft.com/visualstudio/debugger/how-to-use-the-call-stack-window

### Visual Studio Blog Posts

- **Custom Agents (Built-in and Build-Your-Own):** https://devblogs.microsoft.com/visualstudio/custom-agents-in-visual-studio-built-in-and-build-your-own-agents/
- **Profiler Agent Deep Dive:** https://devblogs.microsoft.com/visualstudio/copilot-profiler-agent-visual-studio/
- **Visual Studio 2026 Debugging with Copilot:** https://devblogs.microsoft.com/visualstudio/visual-studio-2026-debugging-with-copilot/
- **Visual Studio September 2025 Update:** https://devblogs.microsoft.com/visualstudio/visual-studio-september-update/

### Release Notes

- **Visual Studio 2026 Release Notes:** https://learn.microsoft.com/visualstudio/releases/2026/release-notes

### GitHub Resources

- **Copilot Chat VS Code Extension (Reference):** https://github.com/microsoft/vscode-copilot-chat
- **Awesome Copilot Repo (Custom Agent Configs):** Referenced in Visual Studio Blog for community agent configurations

---

## Quick Reference Card

### Mode Selection
- **Ask Mode:** Q&A, explanations, no automatic edits
- **Agent Mode:** Autonomous, iterative, uses tools

### Common Slash Commands
```
/explain    — Explain code
/fix        — Fix problems
/tests      — Generate tests
/doc        — Add documentation
/optimize   — Improve performance
/generate   — Generate new code
```

### Context Shortcuts
```
#filename.cs        — Reference a file
#MethodName         — Reference a symbol
#file.cs:10-20      — Reference line range
@workspace          — Entire solution
```

### Built-in Agents
```
@Profiler    — Performance analysis
@Debugger    — Debug assistance
@modernize   — Upgrade .NET apps
@Test        — Generate unit tests
```
