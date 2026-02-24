# MCP Servers for GitHub Copilot in Visual Studio

## What is MCP (Model Context Protocol)?

**Model Context Protocol (MCP)** is an open standard that enables AI models to interact with external tools and services through a unified interface. MCP provides a standardized way to connect AI models to different data sources and tools, enabling them to work together more effectively.

In Visual Studio, MCP support enhances GitHub Copilot agent mode by allowing you to connect any MCP-compatible server to your agentic coding workflow.

### How MCP Works

MCP operates through a client-server architecture:

1. **MCP Clients** (like Visual Studio) connect to MCP servers and request actions on behalf of the AI model
2. **MCP Servers** provide one or more tools that expose specific functionalities through a well-defined interface
3. **The Protocol** defines the message format for communication between clients and servers, including:
   - Tool discovery
   - Invocation
   - Response handling

By standardizing this interaction, MCP eliminates the need for custom integrations between each AI model and each tool.

---

## Configuration File Locations

MCP servers are configured using `.mcp.json` files in one of two locations:

| Location | Scope | Path |
|----------|-------|------|
| **Solution-level** | Available only in the current solution | `<SOLUTIONDIR>\.mcp.json` |
| **Global (User-level)** | Available across all solutions | `%USERPROFILE%\.mcp.json` |

> **Tip:** Use Visual Studio to edit `.mcp.json` files so the JSON schema is automatically applied.

---

## MCP Configuration Format

### Basic Structure

```json
{
  "inputs": [],
  "servers": {
    "ServerName": {
      // Server configuration
    }
  }
}
```

### Transport Types

Visual Studio supports three MCP server transport options:

| Type | Description |
|------|-------------|
| `stdio` | Local standard input/output (for local servers) |
| `sse` | Server-sent events |
| `http` | Streamable HTTP (for remote servers) |

---

## GitHub MCP Server Setup

The GitHub MCP server is provided and maintained by GitHub, allowing you to interact with repositories, issues, pull requests, and other GitHub features directly from Copilot Chat.

### Remote GitHub MCP Server (Recommended)

**Requirements:** Visual Studio 2022 version 17.14.9 or later

1. Create `.mcp.json` at solution or global level
2. Add the following configuration:

```json
{
  "servers": {
    "github": {
      "url": "https://api.githubcopilot.com/mcp/"
    }
  }
}
```

3. Save the file
4. Use CodeLens to authenticate through your GitHub account
5. Open GitHub Copilot Chat and select **Agent** mode

### Local GitHub MCP Server (Alternative)

For running the MCP server locally using Docker:

```json
{
  "servers": {
    "github": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "-e",
        "GITHUB_PERSONAL_ACCESS_TOKEN",
        "ghcr.io/github/github-mcp-server"
      ],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "<YOUR_TOKEN>"
      }
    }
  }
}
```

### GitHub MCP Server Capabilities

The GitHub MCP server provides tools to:

- List repositories
- Create and manage pull requests
- Manage issues
- Search code
- View commits and branches
- Generate commit messages
- Analyze pull requests
- Review code changes

---

## Tool Approval and Security

### How Tool Approval Works

When Copilot needs to use a tool from an MCP server:

1. A confirmation dialog appears
2. You can select **Allow** with different scopes:
   - **This time only** - One-time approval
   - **For this session** - Approved for current session
   - **For this solution** - Approved for current solution
   - **Always** - Approved for all future invocations

### Managing Tool Approvals

To reset tool confirmation selections:

1. Go to **Tools** > **Options**
2. Navigate to **GitHub** > **Copilot** > **Tools**
3. Reset approvals as needed

### OAuth Authentication for Remote Servers

Visual Studio supports authentication for remote MCP servers using any OAuth provider, following the [MCP authorization specification](https://modelcontextprotocol.io/specification/draft/basic/authorization).

To manage authentication:

1. In the `.mcp.json` file, select **Manage Authentication** from CodeLens
2. Provide credentials in the browser pop-up dialog

### Enterprise Policy Control

Administrators can control MCP server usage via GitHub Copilot dashboard settings:

- If disabled, users under that subscription cannot use agent mode or connect to MCP servers in Visual Studio
- Policy: **MCP servers in Copilot** (disabled by default for enterprises/organizations)

---

## MCP Capabilities

Visual Studio supports the full range of MCP features:

### 1. Tools

Execute actions and operations through Copilot agent mode.

**Examples:**
- GitHub: List issues, create PRs, search code
- Azure: Manage resources, query services
- File system: Read, write, search files

### 2. Prompts and Prompt Templates

Reusable prompt templates tailored to specific tasks with customizable arguments.

**How to use MCP prompts:**

1. Select **+ Add Reference** in chat
2. Select **Prompts** > **MCP prompts**
3. Choose a prompt and select **Insert Prompt**

**Examples from GitHub MCP Server:**
- Analyzing pull requests
- Generating commit messages
- Reviewing code changes

### 3. Resources and Resource Templates

Access external data and context through URI-based resources.

**How to use MCP resources:**

- Reference using hashtag: `#<resource-uri>`
- Or via **+ Add Reference** > **MCP resources**

**Examples:**
- Azure DevOps: Work items, sprint info, team capacity
- Figma: Design components, style guides, specifications

### 4. Sampling

Enhanced AI model interactions that enable servers to make LLM calls, supporting complex multi-step operations.

**How it works:**
- When Copilot needs a sampling call, a confirmation dialog appears
- Review and approve before the action proceeds
- Maintains user control over automated operations

**Example:** Playwright MCP server uses sampling to generate test scenarios based on application DOM structure and user flows.

---

## Other MCP Servers

### Azure MCP Server

**Via NPM:**
```json
{
  "servers": {
    "Azure MCP Server": {
      "command": "npx",
      "args": [
        "-y",
        "@azure/mcp@latest",
        "server",
        "start"
      ]
    }
  }
}
```

**Via NuGet (using dnx):**
```json
{
  "servers": {
    "Azure MCP Server": {
      "command": "dnx",
      "args": [
        "Azure.Mcp",
        "--source",
        "https://api.nuget.org/v3/index.json",
        "--yes",
        "--",
        "azmcp",
        "server",
        "start"
      ],
      "type": "stdio"
    }
  }
}
```

### Custom MCP Server (C#/.NET)

**Stdio Transport:**
```json
{
  "inputs": [],
  "servers": {
    "MyMcpServer": {
      "type": "stdio",
      "command": "dotnet",
      "args": [
        "run",
        "--project",
        "<relative-path-to-project-file>"
      ]
    }
  }
}
```

**HTTP Transport:**
```json
{
  "inputs": [],
  "servers": {
    "MyMCPServer": {
      "url": "http://localhost:6278",
      "type": "http",
      "headers": {}
    }
  }
}
```

---

## Prerequisites

| Requirement | Details |
|-------------|---------|
| **Visual Studio 2022** | Version 17.14 or later (latest servicing release recommended) |
| **Visual Studio 2026** | Any version |
| **GitHub Copilot** | Active subscription |

> **Note:** Visual Studio 2026 with the Azure and AI development workload includes Azure MCP Server tools built-in.

---

## Source URLs

- [Use MCP servers - Visual Studio Documentation](https://learn.microsoft.com/en-us/visualstudio/ide/mcp-servers?view=vs-2022)
- [About Model Context Protocol (MCP) - GitHub Docs](https://docs.github.com/en/copilot/concepts/about-mcp)
- [Using the GitHub MCP Server - GitHub Docs](https://docs.github.com/en/copilot/how-tos/provide-context/use-mcp/use-the-github-mcp-server)
- [Extending GitHub Copilot Chat with MCP - GitHub Docs](https://docs.github.com/en/copilot/how-tos/provide-context/use-mcp/extend-copilot-chat-with-mcp)
- [GitHub MCP Server Repository](https://github.com/github/github-mcp-server)
- [MCP Specification](https://modelcontextprotocol.io/specification/draft)
- [MCP Authorization Specification](https://modelcontextprotocol.io/specification/draft/basic/authorization)
- [Azure MCP Server - Visual Studio Setup](https://learn.microsoft.com/azure/developer/azure-mcp-server/get-started/tools/visual-studio)
