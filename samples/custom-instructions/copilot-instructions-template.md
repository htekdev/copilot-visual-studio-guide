# GitHub Copilot Custom Instructions Template

> **Sources:**  
> - GitHub Docs: https://docs.github.com/en/copilot/customizing-copilot/adding-custom-instructions-for-github-copilot  
> - Microsoft Learn: https://learn.microsoft.com/visualstudio/ide/copilot-chat-context

This template shows how to create custom instructions files for GitHub Copilot based on official documentation.

---

## Repository-Wide Instructions

**File location:** `.github/copilot-instructions.md`

These instructions apply to all Copilot requests made in the context of your repository.

### Template

```markdown
# Project Custom Instructions

## Project Overview
[Brief description of what this repository does]

## Tech Stack
- Language: [e.g., C# 12]
- Framework: [e.g., .NET 8, ASP.NET Core]
- Database: [e.g., SQL Server, PostgreSQL]
- Testing: [e.g., xUnit, NUnit]

## Coding Standards

### Naming Conventions
- Use PascalCase for public members
- Use camelCase for private fields with underscore prefix: _fieldName
- Use meaningful, descriptive names

### Error Handling
- Always use structured exception handling
- Log exceptions before rethrowing
- Use custom exception types for domain errors

### Code Style
- Maximum line length: 120 characters
- Use file-scoped namespaces
- Prefer expression-bodied members for single-line implementations

## Architecture Guidelines
- Follow Clean Architecture principles
- Use dependency injection for all services
- Keep controllers thin, business logic in services

## Testing Requirements
- All public methods must have unit tests
- Use [Arrange-Act-Assert] pattern
- Mock external dependencies

## Build & Validation
- Build command: `dotnet build`
- Test command: `dotnet test`
- Lint command: `dotnet format --verify-no-changes`
```

---

## Path-Specific Instructions

**File location:** `.github/instructions/<name>.instructions.md`

These instructions apply only to files matching a specific glob pattern.

### Template with YAML Frontmatter

```markdown
---
description: Instructions for C# service classes
applyTo: "**/Services/**/*.cs"
---

# Service Class Guidelines

- All services must implement an interface
- Use constructor injection for dependencies
- Include XML documentation on public methods
- Services should be registered as scoped in DI container
- Follow async/await patterns for I/O operations
```

### Example: Test Files Instructions

```markdown
---
description: Instructions for unit test files
applyTo: "**/*Tests.cs"
---

# Test File Guidelines

- Use xUnit framework
- Follow Arrange-Act-Assert pattern
- Use Moq for mocking dependencies
- Name tests: MethodName_Scenario_ExpectedResult
- One assertion per test when possible
```

### Example: Controller Instructions

```markdown
---
description: Instructions for API controllers
applyTo: "**/Controllers/**/*.cs"
---

# Controller Guidelines

- Inherit from ControllerBase
- Use [ApiController] attribute
- Return ActionResult<T> from actions
- Use [ProducesResponseType] attributes
- Keep controllers thin - delegate to services
```

---

## Enabling Custom Instructions in Visual Studio

1. Go to **Tools > Options**
2. Navigate to **GitHub > Copilot > Copilot Chat**
3. Check: **Enable custom instructions to be loaded from .github/copilot-instructions.md files**

When instructions are used, they appear in the **References** list of Copilot responses.

---

## Best Practices from GitHub Documentation

### Writing Effective Instructions

From the official docs, instructions should:

1. **Reduce build failures** - Include build and validation commands
2. **Minimize exploration** - Provide high-level repo structure
3. **Be concise** - No longer than 2 pages
4. **Be task-agnostic** - Don't include task-specific details

### What to Include

- **Project summary** - What the repository does
- **Tech stack** - Languages, frameworks, runtimes
- **Build instructions** - How to bootstrap, build, test, lint
- **Code standards** - Naming, patterns, architecture
- **Common gotchas** - Things that often trip up developers

### What NOT to Include

- Sensitive information (secrets, credentials)
- Task-specific instructions
- Information that changes frequently
- Redundant standard language features

---

## Example: Full `.github/copilot-instructions.md`

```markdown
# Copilot Instructions for ContosoApp

## Overview
ContosoApp is a .NET 8 REST API for inventory management with SQL Server backend.

## Structure
- `src/ContosoApp.Api` - ASP.NET Core Web API
- `src/ContosoApp.Core` - Domain models and interfaces  
- `src/ContosoApp.Infrastructure` - Data access and external services
- `tests/` - Unit and integration tests

## Build & Test
- Restore: `dotnet restore`
- Build: `dotnet build`
- Test: `dotnet test`
- Run: `dotnet run --project src/ContosoApp.Api`

## Conventions
- Use nullable reference types
- Async methods end with "Async" suffix
- Repository pattern for data access
- FluentValidation for input validation

## Dependencies
- Entity Framework Core 8 for ORM
- MediatR for CQRS
- Serilog for logging
- xUnit + Moq for testing
```

---

## Related Resources

- [Custom instructions examples on GitHub](https://github.com/github/awesome-copilot)
- [Microsoft Learn: Copilot Chat Context](https://learn.microsoft.com/visualstudio/ide/copilot-chat-context)
- [GitHub Docs: Adding custom instructions](https://docs.github.com/en/copilot/customizing-copilot/adding-custom-instructions-for-github-copilot)
