# GitHub Copilot in Visual Studio - Getting Started Research

> Research compiled: February 24, 2026

## Prerequisites

### Visual Studio Version Requirements
- **Minimum:** Visual Studio 2022 version 17.8 or later
- **Recommended:** Latest version for full feature access
- **Copilot Free activation at first launch:** Requires Visual Studio 17.14 or later
- **Copilot state management features:** Requires Visual Studio 2022 version 17.10 or later

### Subscription Requirements
- GitHub account (required for authentication)
- One of the following Copilot plans:
  - **Copilot Free** - Limited access, no cost
  - **Copilot Pro** - $10/month or $100/year (free for students, teachers, open source maintainers)
  - **Copilot Pro+** - $39/month or $390/year
  - **Copilot Business** - $19/seat/month (organization)
  - **Copilot Enterprise** - $39/seat/month (enterprise)

---

## Installation Steps

### Method 1: Via Visual Studio Installer (Recommended for VS 17.10+)
1. Launch the **Visual Studio Installer**
2. Select the installation of Visual Studio you want to modify
3. Click **Modify**
4. Select any workload (e.g., ".NET desktop development")
5. In the list of **Optional** components, ensure **GitHub Copilot** is selected
6. Click **Modify** to install the extension

### Method 2: From Within Visual Studio
1. Launch Visual Studio (version 17.8 or later)
2. Create a new project, open an existing project, or continue without code
3. Select the **GitHub Copilot** badge in the upper right corner
4. If Copilot isn't installed, select **Install Copilot** from the dropdown
5. Follow the installer prompts

### Method 3: Via Manage Extensions (VS 17.9 or earlier)
1. Go to **Extensions** > **Manage Extensions**
2. Search for "GitHub Copilot"
3. Install the extension
4. Restart Visual Studio

---

## Sign-In Process

### For Users with Existing GitHub Account
1. Launch Visual Studio
2. Select the **GitHub Copilot** badge in the upper-right corner
3. Select **Open Chat Window**
4. Visual Studio prompts you to sign in with GitHub
5. Complete sign-in in your browser
6. Return to Visual Studio - Copilot is now active

### For New Users (Copilot Free)
1. Open Chat window with **Ctrl+\+C** or via Copilot badge
2. Enter a prompt to trigger the "Get started with Copilot Free" dialog
3. Select **Continue with GitHub** or **Continue with Google**
4. If you have an existing GitHub account, sign in when prompted
5. If not, follow steps to create a new GitHub account
6. You're redirected back to Visual Studio when finished

### Sign-In via First Launch (VS 17.14+)
- Visual Studio 17.14 or later allows activating Copilot Free at first launch
- The "Get started with Copilot Free" dialog appears when trying to use any Copilot feature

---

## First-Time Configuration

### Understanding Copilot States
The Copilot status icon in the upper-right corner indicates:
- **Active (green)** - Copilot is fully functional
- **Inactive** - Signed out, no subscription, or credentials need refresh
- **Unavailable** - Network issues or server problems
- **Not Installed** - Copilot component not installed

### Initial Setup Steps
1. Verify Copilot is active via the status badge
2. Open Chat window (**Ctrl+\+C**) to test functionality
3. Configure settings via **GitHub Copilot badge** > **Settings**

### Key Settings to Configure
- **Enable/Disable Completions:** Settings > Options or via Copilot badge
- **Block suggestions matching public code:** Configure at [github.com/settings/copilot](https://github.com/settings/copilot)
- **Custom Instructions:** Add `.github/copilot-instructions.md` to your repository
- **Prompt Files:** Add files to `.github/prompts` directory for reusable prompts

### Available Features
- **Completions:** Gray text suggestions as you type code
- **Next Edit Suggestions:** Suggestions for edits to existing code
- **Chat Window:** Ask questions, get explanations, generate code
- **Agent Mode:** Enable via Chat window Ask > Agent toggle
- **Model Context Protocol (MCP):** Access via tools icon in Chat window
- **Copilot Actions:** Available in editor context menu, Error List, Feature Search

---

## Copilot Free vs Pro Differences

### Copilot Free (No Cost)
| Feature | Limit |
|---------|-------|
| Code completions | 2,000 per month |
| Chat messages | 50 per month |
| Premium requests | 50 per month |
| Models available | Limited selection |
| Copilot coding agent | ❌ |
| Agent mode | ❌ |
| Copilot code review | "Review selection" in VS Code only |
| MCP support | ❌ |
| Next edit suggestions | ❌ |
| Copilot CLI | ❌ |

### Copilot Pro ($10/month or $100/year)
| Feature | Limit |
|---------|-------|
| Code completions | **Unlimited** |
| Chat messages | **Unlimited** with included models |
| Premium requests | 300 per month |
| Models available | Access to premium models |
| Copilot coding agent | ✅ |
| Agent mode | ✅ |
| Copilot code review | ✅ Full access |
| MCP support | ✅ |
| Next edit suggestions | ✅ |
| Copilot CLI | ✅ |

### Copilot Pro+ ($39/month or $390/year)
- Everything in Pro, plus:
- **1,500 premium requests** per month
- **Full access to all available models** in Copilot Chat
- Ideal for AI power users

### Key Differences Summary
1. **Completions:** Free = 2,000/month; Pro/Pro+ = Unlimited
2. **Chat:** Free = 50 messages/month; Pro/Pro+ = Unlimited
3. **Agent Mode:** Pro/Pro+ only
4. **Coding Agent:** Pro/Pro+ only  
5. **Next Edit Suggestions:** Pro/Pro+ only
6. **MCP Support:** Pro/Pro+ only
7. **Premium Models:** Pro/Pro+ only

### Who Cannot Use Copilot Free
- Users with EMU (Enterprise Managed User) accounts
- Users with access to Copilot through an organization
- Users with existing Copilot Pro subscription or trial
- Students, teachers, or open-source maintainers with free Pro access

### Usage Limit Behavior
When limits are reached:
- **Completions limit reached:** IntelliCode suggestions replace Copilot completions
- **Chat limit reached:** No chat responses; badge stays green
- **Resolution:** Wait for monthly reset or upgrade to Pro

---

## Keyboard Shortcuts

| Action | Shortcut |
|--------|----------|
| Open Chat Window | **Ctrl+\+C** |
| Accept suggestion | **Tab** |
| Dismiss suggestion | **Esc** |
| Next suggestion | **Alt+]** |
| Previous suggestion | **Alt+[** |

---

## Troubleshooting

### Common Issues
- **Copilot inactive:** Sign in with a GitHub account that has Copilot access
- **Credentials need refresh:** Select "Refresh your GitHub credentials" from dropdown
- **Network issues:** Check troubleshooting page via Copilot badge dropdown
- **Wrong account active:** Switch active account in account settings if multiple GitHub accounts added

### Hiding Copilot
If you don't want to use Copilot:
1. **Hide badge:** Tools > Options > Environment > Hide Copilot Badge
2. **Uninstall:** Visual Studio Installer > Individual components > Uncheck GitHub Copilot > Modify

---

## Source URLs

### Microsoft Learn Documentation
1. **Get Started with GitHub Copilot**
   - https://learn.microsoft.com/visualstudio/ide/visual-studio-github-copilot-get-started

2. **Use GitHub Copilot for Free in Visual Studio**
   - https://learn.microsoft.com/visualstudio/ide/copilot-free-plan

3. **Manage GitHub Copilot Installation and State**
   - https://learn.microsoft.com/visualstudio/ide/visual-studio-github-copilot-install-and-states

4. **Visual Studio 2022 Release History**
   - https://learn.microsoft.com/visualstudio/releases/2022/release-history

### GitHub Documentation
5. **Plans for GitHub Copilot**
   - https://docs.github.com/en/copilot/about-github-copilot/subscription-plans-for-github-copilot

6. **Installing the GitHub Copilot Extension**
   - https://docs.github.com/en/copilot/how-tos/set-up/install-copilot-extension

7. **Quickstart for GitHub Copilot**
   - https://docs.github.com/en/copilot/get-started/quickstart

8. **About GitHub Copilot Free**
   - https://aka.ms/ghdocscopilotfreepage

### Additional Resources
9. **How to Install GitHub Copilot in Visual Studio (Blog)**
   - https://devblogs.microsoft.com/visualstudio/how-to-install-github-copilot-in-visual-studio/

10. **GitHub Copilot Free Announcement**
    - https://devblogs.microsoft.com/visualstudio/github-copilot-free-is-here-in-visual-studio/

11. **GitHub Copilot Settings**
    - https://github.com/settings/copilot

12. **GitHub Copilot Trust Center FAQ**
    - https://copilot.github.trust.page/faq

---

## Quick Start Summary

1. **Install:** Visual Studio 2022 v17.8+ with GitHub Copilot component
2. **Sign in:** Use GitHub account via Copilot badge > Open Chat Window
3. **Choose plan:** Copilot Free (limited) or Pro ($10/month, unlimited)
4. **Start coding:** Get completions automatically, use Ctrl+\+C for Chat
5. **Customize:** Add `.github/copilot-instructions.md` for project-specific guidance
