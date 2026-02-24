# GitHub Copilot Custom Instructions Research

## Overview

Custom instructions enable you to define common guidelines and rules that automatically influence how Copilot generates code and handles development tasks. Instead of manually including context in every chat prompt, specify custom instructions in Markdown files to ensure consistent AI responses that align with your coding practices and project requirements.

---

## 1. Repository-Wide Instructions: `.github/copilot-instructions.md`

### Purpose
Provides repository-specific guidance that applies to **all** Copilot requests made in the context of that repository.

### File Location
```
.github/copilot-instructions.md
```

### Format
- Plain Markdown file with natural language instructions
- No frontmatter required
- Whitespace between instructions is ignored
- Can be written as a single paragraph, each on a new line, or separated by blank lines

### Example
```markdown
# Project Guidelines

## Code Style
- Use 4 spaces for indentation
- Follow PascalCase for public methods, camelCase for private
- Always include XML documentation for public APIs

## Architecture
- Follow Clean Architecture principles
- Keep business logic in Domain layer
- Use dependency injection for all services

## Testing
- Write unit tests for all business logic
- Use xUnit with FluentAssertions
- Mock external dependencies with Moq
```

### Sources
- [GitHub Docs: Adding repository custom instructions](https://docs.github.com/en/copilot/how-tos/configure-custom-instructions/add-repository-instructions)
- [Microsoft Learn: Visual Studio Copilot Chat Context](https://learn.microsoft.com/visualstudio/ide/copilot-chat-context?view=visualstudio)

---

## 2. Path-Specific Instructions: `.github/instructions/*.instructions.md`

### Purpose
Apply instructions to **specific file types or paths** rather than all requests. Useful for different programming languages, frameworks, or project areas.

### File Location
```
.github/instructions/<name>.instructions.md
```

### Frontmatter Format (Required)
```yaml
---
applyTo: "<glob-pattern>"
---
```

### applyTo Glob Pattern Examples

| Pattern | Matches |
|---------|---------|
| `*` | All files in current directory |
| `**` or `**/*` | All files in all directories |
| `*.py` | All `.py` files in current directory |
| `**/*.py` | All `.py` files recursively |
| `src/*.py` | `.py` files in `src/` only (not subdirs) |
| `src/**/*.py` | `.py` files in `src/` recursively |
| `**/*.ts,**/*.tsx` | All TypeScript files (multiple patterns) |
| `app/models/**/*.rb` | Ruby files in app/models/ recursively |
| `**/subdir/**/*.py` | `.py` files in any `subdir` at any depth |

### Optional: Exclude Agent
```yaml
---
applyTo: "**"
excludeAgent: "code-review"   # Only used by coding agent, not code review
---
```

### Example: TypeScript Instructions
**File:** `.github/instructions/typescript.instructions.md`
```yaml
---
applyTo: "**/*.ts,**/*.tsx"
---

# TypeScript Guidelines

- Use strict TypeScript configuration
- Prefer interfaces over type aliases for object shapes
- Use explicit return types on exported functions
- Avoid `any` - use `unknown` if type is truly unknown
- Use barrel exports (index.ts) for public module APIs
```

### Example: React Component Instructions
**File:** `.github/instructions/react.instructions.md`
```yaml
---
applyTo: "src/components/**/*.tsx"
---

# React Component Guidelines

- Use functional components with hooks
- Props interfaces should be named `<ComponentName>Props`
- Use React.FC only when children are expected
- Prefer named exports over default exports
- Co-locate tests with components: `Component.test.tsx`
```

### Example: API Routes Instructions
**File:** `.github/instructions/api.instructions.md`
```yaml
---
applyTo: "src/api/**/*.ts,src/routes/**/*.ts"
---

# API Development Guidelines

- Use async/await for all route handlers
- Validate input with Zod schemas
- Return consistent JSON response shapes
- Include proper error handling with status codes
- Log all errors with correlation IDs
```

### Sources
- [GitHub Docs: Path-specific custom instructions](https://docs.github.com/en/copilot/how-tos/configure-custom-instructions/add-repository-instructions#creating-path-specific-custom-instructions)
- [GitHub Blog: Copilot coding agent supports .instructions.md](https://github.blog/changelog/2025-07-23-github-copilot-coding-agent-now-supports-instructions-md-custom-instructions/)

---

## 3. Reusable Prompts: `.github/prompts/*.prompt.md`

### Purpose
Define reusable prompts for specific tasks that can be invoked manually. Unlike instructions (which are automatic), prompts are attached explicitly to chat requests.

### File Location
```
.github/prompts/<name>.prompt.md
```

### Format
```yaml
---
description: "Brief description shown in UI"
mode: "agent"  # Optional: "agent" or "ask" (default)
---

<prompt content in Markdown>
```

### Example: Code Review Prompt
**File:** `.github/prompts/code-review.prompt.md`
```yaml
---
description: "Perform a thorough code review"
---

Review this code for:

1. **Bugs & Logic Errors**: Check for null references, off-by-one errors, race conditions
2. **Security**: SQL injection, XSS, authentication/authorization issues
3. **Performance**: N+1 queries, unnecessary allocations, missing async
4. **Maintainability**: Complex methods, unclear naming, missing abstractions
5. **Testing**: Suggest test cases that should be added

Be specific about line numbers and provide corrected code snippets.
```

### Example: Documentation Prompt
**File:** `.github/prompts/document-api.prompt.md`
```yaml
---
description: "Generate API documentation"
---

Generate comprehensive documentation for this API endpoint including:

- **Summary**: One-line description
- **Parameters**: Name, type, required/optional, description
- **Request Body**: JSON schema with examples
- **Response**: Success and error response shapes
- **Examples**: curl command and response
- **Error Codes**: Possible error responses and meanings
```

### Example: Agent Mode Prompt
**File:** `.github/prompts/add-tests.prompt.md`
```yaml
---
description: "Add comprehensive unit tests"
mode: "agent"
---

Add unit tests for this code following these guidelines:

- Use the existing test framework in this project
- Cover happy path, edge cases, and error scenarios
- Use descriptive test names: Should_ExpectedResult_When_Condition
- Mock external dependencies
- Aim for high coverage of business logic
```

### Sources
- [Microsoft Learn: Use prompt files](https://learn.microsoft.com/visualstudio/ide/copilot-chat-context?view=visualstudio#use-prompt-files)
- [VS Code Docs: Custom instructions](https://code.visualstudio.com/docs/copilot/customization/custom-instructions)

---

## 4. Enabling Custom Instructions in Visual Studio

### Steps to Enable

1. Open **Tools** > **Options**
2. Navigate to **GitHub** > **Copilot** > **Copilot Chat**
   - Or: **All Settings** > **GitHub** > **Copilot** > **Copilot Chat**
3. Check: **"Enable custom instructions to be loaded from .github/copilot-instructions.md files and added to requests"**

### Visual Studio Version Requirements
- **Visual Studio 2022 version 17.10+** for basic Copilot Chat
- **Visual Studio 2022 version 17.12+** for guided chat experience
- **Visual Studio 2022 version 17.13+** for expanded slash commands

### Verifying Instructions Are Applied
- Custom instructions aren't visible in the Chat view or inline chat
- When used, the `.github/copilot-instructions.md` file appears in the **References list** of a response
- Click the reference to open and verify the file

### Sources
- [Microsoft Learn: Customize chat responses and set context](https://learn.microsoft.com/visualstudio/ide/copilot-chat-context?view=visualstudio)

---

## 5. Example Conventions to Include

### General Coding Standards
```markdown
## Code Style
- Use meaningful variable names (no single letters except loop counters)
- Maximum function length: 30 lines
- Maximum file length: 300 lines
- Prefer composition over inheritance

## Comments
- Code should be self-documenting; add comments only for "why", not "what"
- All public APIs must have XML documentation
- TODOs must include ticket number: // TODO(JIRA-123): description

## Error Handling
- Never swallow exceptions silently
- Use domain-specific exception types
- Log exceptions at the point of handling, not throwing
```

### Language-Specific (C#/.NET)
```markdown
## C# Conventions
- Use file-scoped namespaces
- Use primary constructors for simple classes
- Prefer records for DTOs and value objects
- Use `required` modifier for mandatory properties
- Initialize collections with collection expressions: [1, 2, 3]

## Async/Await
- Suffix async methods with "Async"
- Use ConfigureAwait(false) in library code
- Prefer ValueTask for hot paths that usually complete synchronously

## Dependency Injection
- Register services in extension methods: `services.AddMyFeature()`
- Use IOptions<T> pattern for configuration
- Prefer constructor injection over property injection
```

### Testing Conventions
```markdown
## Testing
- Test class naming: {ClassUnderTest}Tests
- Test method naming: {Method}_Should{ExpectedResult}_When{Condition}
- One assertion per test (or one logical assertion)
- Use builder pattern for complex test data setup
- Arrange-Act-Assert structure with blank line separators
```

### Project Structure
```markdown
## Architecture
- Follow Vertical Slice Architecture for features
- Keep handlers in Features/{FeatureName}/ directories
- Shared code goes in Common/ or Infrastructure/
- DTOs in Contracts/ are the public API contract

## File Organization
- One public type per file
- File name must match type name
- Group related files in feature folders, not by type
```

---

## 6. Source URLs

### Official Documentation
- **GitHub Docs**: [Adding repository custom instructions](https://docs.github.com/en/copilot/how-tos/configure-custom-instructions/add-repository-instructions)
- **GitHub Docs**: [About customizing Copilot responses](https://docs.github.com/en/copilot/concepts/prompting/response-customization)
- **GitHub Docs**: [Your first custom instructions tutorial](https://docs.github.com/en/copilot/tutorials/customization-library/custom-instructions/your-first-custom-instructions)
- **Microsoft Learn**: [Customize chat responses and set context (VS)](https://learn.microsoft.com/visualstudio/ide/copilot-chat-context?view=visualstudio)
- **VS Code Docs**: [Use custom instructions in VS Code](https://code.visualstudio.com/docs/copilot/customization/custom-instructions)

### Community Resources
- **GitHub Repository**: [awesome-copilot](https://github.com/github/awesome-copilot) - Community-contributed instructions and prompts
- **Design.dev Guide**: [GitHub Copilot Instructions Guide](https://design.dev/guides/copilot-instructions/)

### Changelogs & Updates
- **GitHub Blog**: [Copilot coding agent supports .instructions.md](https://github.blog/changelog/2025-07-23-github-copilot-coding-agent-now-supports-instructions-md-custom-instructions/)

---

## Summary: File Types at a Glance

| File | Location | Purpose | Auto-applied |
|------|----------|---------|--------------|
| `copilot-instructions.md` | `.github/` | Repository-wide context | ✅ Yes |
| `*.instructions.md` | `.github/instructions/` | Path-specific instructions | ✅ Yes (when path matches) |
| `*.prompt.md` | `.github/prompts/` | Reusable task prompts | ❌ Manual attachment |
| `AGENTS.md` | Anywhere in repo | Agent-specific instructions | ✅ Yes (nearest file) |

---

*Research compiled: 2025*
