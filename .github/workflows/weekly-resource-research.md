---
name: Weekly Resource Research
description: Researches new GitHub Copilot in Visual Studio resources using Exa, Perplexity, and MS Learn, then updates the site's resources data file.
strict: false

on:
  schedule: weekly
  workflow_dispatch:

permissions:
  contents: read

tools:
  bash: true

mcp-servers:
  exa:
    type: http
    url: "https://mcp.exa.ai/mcp?tools=web_search_exa,web_search_advanced_exa,crawling_exa&exaApiKey=${{ secrets.EXA_API_KEY }}"
  perplexity:
    type: stdio
    command: npx
    args: ["-y", "perplexity-mcp"]
    env:
      PERPLEXITY_API_KEY: "${{ secrets.PERPLEXITY_API_KEY }}"
  mslearn:
    type: http
    url: "https://learn.microsoft.com/api/mcp"

network:
  allowed:
    - mcp.exa.ai
    - learn.microsoft.com
    - registry.npmjs.org

safe-outputs:
  create-pull-request:
    title-prefix: "docs: "
    labels: ["automation", "resources"]
    draft: false
---

# Weekly Resource Research

You are a research agent that keeps the GitHub Copilot in Visual Studio resource page up-to-date by discovering new documentation, blog posts, training modules, and community resources.

## Your Task

1. **Read the current resources** from `src/data/resources.json` to understand what already exists.

2. **Search for new resources** using the available tools. Focus on these categories:

   ### Official Documentation (learn.microsoft.com)
   - Use the MS Learn MCP to search for new or updated Copilot documentation for Visual Studio
   - Search queries: "GitHub Copilot Visual Studio", "Copilot agent mode Visual Studio", "Copilot MCP Visual Studio"
   - Only include docs from `learn.microsoft.com/visualstudio/ide/` or `docs.github.com/copilot`

   ### Visual Studio Blog (devblogs.microsoft.com)
   - Use Exa to search `devblogs.microsoft.com/visualstudio` for recent Copilot blog posts
   - Search for posts from the last 30 days

   ### GitHub Blog (github.blog)
   - Use Exa to search `github.blog` for recent Copilot posts
   - Focus on posts about Copilot features, agent mode, MCP, and Visual Studio integration

   ### Microsoft Learn Training
   - Use the MS Learn MCP to find new training modules related to GitHub Copilot
   - Search for modules with "GitHub Copilot" in the title

   ### Community & Support
   - Use Perplexity to find any new official community resources or support channels

3. **Compare against existing resources**: For each discovered resource, check if it already exists in `resources.json` by comparing URLs. Only add genuinely new resources.

4. **Reset stale "New" badges**: For any resource where `isNew` is `true` and `dateAdded` is older than 14 days from today, set `isNew` to `false`.

5. **Add new resources**: For each new resource found, add it to the appropriate category in `resources.json` with:
   - `title`: The article/page title
   - `description`: A concise 1-line description (max 80 chars)
   - `url`: The canonical URL
   - `isNew`: `true`
   - `dateAdded`: Today's date in YYYY-MM-DD format

6. **Write the updated file**: Save the updated `resources.json` back to `src/data/resources.json`. Ensure valid JSON formatting.

7. **Create a pull request** if any changes were made:
   - Title: `docs: update resources with newly discovered content`
   - Body: List each new resource added with its category and URL

## Quality Rules

- Only add resources from **official Microsoft or GitHub sources** — no third-party blogs
- Each resource must have a working URL
- Descriptions must be concise and informative
- Do not duplicate existing resources (match by URL)
- Do not remove any existing resources
- Maintain the existing category structure
- Keep JSON formatting consistent (2-space indentation)
