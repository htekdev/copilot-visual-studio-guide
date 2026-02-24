# GitHub Copilot AI Models Research

> **Last Updated:** February 2026  
> **Status:** Current as of GPT-5.2-Codex GA release

## Overview

GitHub Copilot supports multiple AI models from OpenAI, Anthropic, Google, xAI, and others. Users can switch models via the **model picker** in supported IDEs. The **Auto** selection feature automatically picks the best model based on availability and task type.

---

## Currently Available Models

### OpenAI Models

| Model | Task Area | Best For | Availability |
|-------|-----------|----------|--------------|
| **GPT-4.1** | General-purpose | Fast, accurate completions; default for code completion | All plans |
| **GPT-5 mini** | General-purpose | Fast responses, multimodal support, debugging | All plans |
| **GPT-5.1** | Deep reasoning | Multi-step problem solving, architecture analysis | Pro, Pro+, Business, Enterprise |
| **GPT-5.1-Codex** | Deep reasoning | Complex engineering tasks (features, tests, debugging, refactors) | Pro, Pro+, Business, Enterprise |
| **GPT-5.1-Codex-Max** | Agentic development | Agentic tasks, autonomous coding workflows | Pro+ |
| **GPT-5.1-Codex-Mini** | Deep reasoning | Lightweight reasoning with lower resource usage | All plans |
| **GPT-5.2** | Deep reasoning | Complex reasoning, code analysis, technical decisions | All plans (GA Jan 2026) |
| **GPT-5.2-Codex** | Agentic development | Agentic tasks, coding agent workflows | Pro, Pro+, Business, Enterprise |

### Anthropic Claude Models

| Model | Task Area | Best For | Availability |
|-------|-----------|----------|--------------|
| **Claude Haiku 4.5** | Fast tasks | Quick answers to lightweight coding questions | All plans |
| **Claude Sonnet 4.0** | Deep reasoning | Balanced performance for coding workflows | All plans |
| **Claude Sonnet 4.5** | General-purpose & agents | Complex problem-solving, sophisticated reasoning, agent tasks | All plans |
| **Claude Opus 4.5** | Deep reasoning | Complex problem-solving, sophisticated reasoning | Pro+, Enterprise |
| **Claude Opus 4.6** | Deep reasoning | Anthropic's most powerful model; improves on 4.5 | Pro+, Enterprise |
| **Claude Opus 4.6 (fast mode)** | Deep reasoning | Faster Opus with same capabilities (preview) | Pro+ |

### Google Gemini Models

| Model | Task Area | Best For | Availability |
|-------|-----------|----------|--------------|
| **Gemini 2.5 Pro** | Deep reasoning | Complex code generation, debugging, research | All plans |
| **Gemini 3 Flash** | Fast tasks | Fast, lightweight coding questions | All plans |
| **Gemini 3 Pro** | Deep reasoning | Advanced reasoning, long contexts, technical analysis | All plans |
| **Gemini 3.1 Pro** | Deep reasoning | Edit-then-test loops with high tool precision | All plans |

### Other Models

| Model | Provider | Task Area | Best For |
|-------|----------|-----------|----------|
| **Grok Code Fast 1** | xAI | General-purpose | Fast code completions, debugging across languages |
| **Qwen2.5** | Alibaba | General-purpose | Code generation, reasoning, debugging |
| **Raptor mini** | Microsoft | General-purpose | Fast inline suggestions (coming soon) |
| **Goldeneye** | Microsoft | Deep reasoning | Complex problem-solving, sophisticated reasoning |

---

## Deprecated Models (October 2025)

The following models were deprecated and should be replaced:

| Deprecated Model | Suggested Replacement |
|------------------|----------------------|
| Claude Sonnet 3.7 | Claude Sonnet 4.5 |
| Claude Sonnet 3.7 Thinking | Claude Sonnet 4.5 |
| Claude Opus 4 | Claude Opus 4.1 → 4.6 |
| GPT o3 | GPT-5 |
| GPT o1 mini | GPT-5 mini |

---

## Model Picker

The **model picker** allows users to switch models in real-time across supported environments:

### Where Available

- **Visual Studio Code** - All modes: chat, ask, edit, agent
- **Visual Studio 2022/2026** - Chat and inline suggestions
- **JetBrains IDEs** - All modes: ask, edit, agent
- **Xcode** - Ask and agent modes
- **Eclipse** - Ask and agent modes
- **GitHub.com** - Copilot Chat (immersive mode)
- **GitHub Mobile** - iOS and Android
- **Copilot CLI** - Terminal assistant

### Auto Model Selection

When set to **Auto**, Copilot automatically selects the best available model based on:
- Task complexity
- Model availability
- Rate limiting status
- Plan entitlements

Benefits of Auto:
- Faster responses
- Lower chance of rate limiting
- 10% discount on premium requests (paid users)

---

## Bring Your Own Key (BYOK)

> **Status:** Public Preview (November 2025+)

BYOK allows enterprises to connect their own LLM provider API keys to GitHub Copilot.

### Supported Providers

- **Anthropic** - Claude models
- **OpenAI** - GPT models
- **Microsoft Foundry** - Azure AI models
- **xAI** - Grok models
- **AWS Bedrock** - Various models
- **Google AI Studio** - Gemini models
- **OpenAI-compatible providers** - Any compatible endpoint

### Key Features

| Feature | Description |
|---------|-------------|
| **Direct billing** | Usage billed by your provider, not GitHub |
| **No quota impact** | BYOK usage doesn't count against Copilot request limits |
| **Custom models** | Use fine-tuned or specialized models |
| **Maximum context window** | Admins can configure context limits |
| **Streaming responses** | Enable/disable streaming for faster interaction |
| **Responses API support** | Structured outputs and multimodal interactions |

### Availability

- **Individual (Free, Pro, Pro+):** Supported in VS Code via settings
- **Business:** Not yet available
- **Enterprise:** Available via Copilot settings (admin-enabled)

### Setup (VS Code)

1. Open VS Code Settings
2. Navigate to GitHub Copilot Chat settings
3. Add provider API key (Anthropic, OpenAI, Gemini, OpenRouter, Ollama, Azure)
4. Models associated with key appear in model picker

---

## Model Selection Guide

### When to Use Which Model

| Scenario | Recommended Model |
|----------|-------------------|
| **Daily coding tasks** | GPT-4.1, GPT-5 mini, Auto |
| **Quick syntax questions** | Claude Haiku 4.5, Gemini 3 Flash |
| **Complex debugging** | GPT-5.2, Claude Opus 4.6, Gemini 3 Pro |
| **Multi-file refactoring** | GPT-5.1-Codex, Claude Sonnet 4.5 |
| **Architecture decisions** | GPT-5.2, Claude Opus 4.6 |
| **Working with images/UI** | GPT-5 mini, Claude Sonnet 4, Gemini 3 Pro |
| **Agentic/autonomous tasks** | GPT-5.2-Codex, GPT-5.1-Codex-Max |
| **Fast inline completions** | GPT-4.1 (default), Raptor mini |
| **Cost-sensitive workflows** | Claude Haiku 4.5, GPT-5.1-Codex-Mini |

### Premium Request Multipliers

Different models consume requests at different rates. Premium models (Opus, GPT-5.x-Codex) consume more quota per request. Check your plan's premium request allowance:

- **Free:** Limited premium requests
- **Pro:** Standard premium allocation
- **Pro+:** Expanded premium allocation
- **Business/Enterprise:** Organization-managed quotas

---

## Sources

### Official Documentation
- [AI Model Comparison - GitHub Docs](https://docs.github.com/en/copilot/reference/ai-models/model-comparison)
- [Supported AI Models in Copilot](https://docs.github.com/copilot/using-github-copilot/ai-models/supported-ai-models-in-copilot)
- [Changing the AI Model for Copilot Chat](https://docs.github.com/en/copilot/using-github-copilot/ai-models/changing-the-ai-model-for-copilot-chat)
- [Using Your LLM Provider API Keys](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/use-your-own-api-keys)

### GitHub Changelog Announcements
- [GPT-5.2-Codex GA (Jan 2026)](https://github.blog/changelog/)
- [GPT-5.1 and GPT-5.1-Codex GA (Dec 2025)](https://github.blog/changelog/2025-12-17-gpt-5-1-and-gpt-5-1-codex-are-now-generally-available-in-github-copilot/)
- [GPT-5.1 Family Preview (Nov 2025)](https://github.blog/changelog/2025-11-13-openais-gpt-5-1-gpt-5-1-codex-and-gpt-5-1-codex-mini-are-now-in-public-preview-for-github-copilot)
- [BYOK Public Preview (Nov 2025)](https://github.blog/changelog/2025-11-20-enterprise-bring-your-own-key-byok-for-github-copilot-is-now-in-public-preview/)
- [BYOK Enhancements (Jan 2026)](https://github.blog/changelog/2026-01-15-github-copilot-bring-your-own-key-byok-enhancements)
- [Model Deprecations (Oct 2025)](https://github.blog/changelog/2025-10-23-selected-claude-openai-and-gemini-copilot-models-are-now-deprecated/)
- [GPT-4.1 Default Model (May 2025)](https://github.blog/changelog/2025-05-08-openai-gpt-4-1-is-now-generally-available-in-github-copilot-as-the-new-default-model)
- [Multiple Models GA (Apr 2025)](https://github.blog/changelog/2025-04-04-multiple-new-models-are-now-generally-available-in-github-copilot)

### Blog Posts & Articles
- [Which AI Model Should I Use? - GitHub Blog](https://github.blog/ai-and-ml/github-copilot/which-ai-model-should-i-use-with-github-copilot)
- [A Guide to Deciding What AI Model to Use - GitHub Blog](https://github.blog/ai-and-ml/github-copilot/a-guide-to-deciding-what-ai-model-to-use-in-github-copilot/)
- [Under the Hood: AI Models Powering Copilot - GitHub Blog](https://github.blog/ai-and-ml/github-copilot/under-the-hood-exploring-the-ai-models-powering-github-copilot)
- [Choosing the Right Model - Microsoft Tech Community](https://techcommunity.microsoft.com/blog/azuredevcommunityblog/choosing-the-right-model-in-github-copilot-a-practical-guide-for-developers/4491623)
- [Auto Model Selection Preview - Visual Studio Blog](https://devblogs.microsoft.com/visualstudio/introducing-copilot-auto-model-selection-preview/)
- [New Default Model for VS Copilot - Visual Studio Magazine](https://visualstudiomagazine.com/articles/2025/06/26/new-default-model-for-visual-studio-copilot-so-how-do-you-choose.aspx)
- [How to Use Custom Models (BYOK) - Syntackle](https://syntackle.com/blog/github-copilot-with-custom-api-key/)

### Model Provider Documentation
- [GPT-4.1 Model Card](https://openai.com/index/gpt-4-1/)
- [GPT-5.1 System Card](https://cdn.openai.com/pdf/4173ec8d-1229-47db-96de-06d87147e07e/5_1_system_card.pdf)
- [GPT-5.2 System Card](https://cdn.openai.com/pdf/3a4153c8-c748-4b71-8e31-aecbde944f8d/oai_5_2_system-card.pdf)
- [Claude Sonnet 4.5 Model Card](https://assets.anthropic.com/m/12f214efcc2f457a/original/Claude-Sonnet-4-5-System-Card.pdf)
- [Claude Opus 4.6 Model Card](https://www-cdn.anthropic.com/14e4fb01875d2a69f646fa5e574dea2b1c0ff7b5.pdf)
- [Gemini 2.5 Pro Model Card](https://storage.googleapis.com/model-cards/documents/gemini-2.5-pro.pdf)
- [Gemini 3 Pro Model Card](https://storage.googleapis.com/deepmind-media/Model-Cards/Gemini-3-Pro-Model-Card.pdf)

---

## Key Takeaways

1. **Auto is recommended** for most users - it optimizes for speed, quality, and cost
2. **GPT-4.1** remains the default for code completions and general chat
3. **GPT-5.x-Codex models** are best for agentic workflows and complex engineering
4. **Claude Opus 4.6** is the premium choice for deep reasoning
5. **Claude Haiku 4.5 / Gemini 3 Flash** are best for fast, simple tasks
6. **BYOK** enables enterprise customization without quota consumption
7. **Model availability varies by plan** - Enterprise/Pro+ get access to premium models
