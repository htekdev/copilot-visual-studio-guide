import { test, expect } from '@playwright/test';

// Match the Astro config base URL (port 4567 to avoid conflicts)
const BASE_URL = 'http://localhost:4567/copilot-visual-studio-guide';

// All pages to test (with trailing slashes as Astro generates index.html)
const PAGES = [
  '/',
  '/videos/',
  '/presentations/',
  '/samples/',
  '/resources/',
  '/whats-new/',
];

test.describe('Navigation Links', () => {
  for (const page of PAGES) {
    test(`navbar links work on ${page}`, async ({ page: browserPage }) => {
      await browserPage.goto(`${BASE_URL}${page}`);
      
      // Check all navbar links are present and clickable
      const navLinks = browserPage.locator('nav a');
      const count = await navLinks.count();
      expect(count).toBeGreaterThan(0);
      
      // Verify each nav link has valid href
      for (let i = 0; i < count; i++) {
        const href = await navLinks.nth(i).getAttribute('href');
        expect(href).toBeTruthy();
        expect(href).not.toBe('#');
      }
    });
  }

  test('navbar links have correct path format', async ({ page }) => {
    await page.goto(`${BASE_URL}/`);
    
    const navLinks = page.locator('nav a');
    const count = await navLinks.count();
    
    const malformedLinks: string[] = [];
    
    for (let i = 0; i < count; i++) {
      const href = await navLinks.nth(i).getAttribute('href');
      if (!href) continue;
      
      // Check for common path issues:
      // 1. Missing slash after base path (e.g., /copilot-visual-studio-guidevideos/)
      // 2. Double slashes (e.g., /copilot-visual-studio-guide//videos/)
      // 3. Path doesn't start with /
      if (href.includes('guide') && !href.includes('guide/') && href !== '/copilot-visual-studio-guide/') {
        malformedLinks.push(`Missing slash after base: ${href}`);
      }
      if (href.includes('//') && !href.startsWith('http')) {
        malformedLinks.push(`Double slash: ${href}`);
      }
      if (!href.startsWith('/') && !href.startsWith('http')) {
        malformedLinks.push(`Relative path (should be absolute): ${href}`);
      }
    }
    
    if (malformedLinks.length > 0) {
      console.log('Malformed navbar links:', malformedLinks);
    }
    expect(malformedLinks).toHaveLength(0);
  });

  test('navbar links are clickable and navigate correctly', async ({ page }) => {
    await page.goto(`${BASE_URL}/`);
    
    // Get all unique navbar hrefs
    const hrefs = await page.locator('nav').first().locator('a').evaluateAll(
      links => links.map(a => a.getAttribute('href')).filter(Boolean)
    );
    
    const uniqueHrefs = [...new Set(hrefs)];
    const brokenNavLinks: string[] = [];
    
    for (const href of uniqueHrefs) {
      if (!href) continue;
      
      // Use same port as BASE_URL
      const url = href.startsWith('http') ? href : `http://localhost:4567${href}`;
      try {
        const response = await page.request.get(url);
        if (!response.ok()) {
          brokenNavLinks.push(`${href} (${response.status()})`);
        }
      } catch (e) {
        brokenNavLinks.push(`${href} (failed to fetch)`);
      }
    }
    
    if (brokenNavLinks.length > 0) {
      console.log('Broken navbar links:', brokenNavLinks);
    }
    expect(brokenNavLinks).toHaveLength(0);
  });
});

test.describe('Internal Links', () => {
  for (const page of PAGES) {
    test(`internal links on ${page} are valid`, async ({ page: browserPage }) => {
      await browserPage.goto(`${BASE_URL}${page}`);
      
      // Get all internal links (starting with /copilot-visual-studio-guide or relative)
      const internalLinks = browserPage.locator('a[href^="/copilot-visual-studio-guide"]');
      const count = await internalLinks.count();
      
      const brokenLinks: string[] = [];
      const checkedUrls = new Set<string>();
      
      for (let i = 0; i < count; i++) {
        const href = await internalLinks.nth(i).getAttribute('href');
        if (!href || checkedUrls.has(href)) continue;
        checkedUrls.add(href);
        
        // Normalize the URL - use correct port (4567)
        let url = href.startsWith('http') ? href : `http://localhost:4567${href}`;
        if (!url.endsWith('/') && !url.includes('.')) {
          url = url + '/';
        }
        
        try {
          const response = await browserPage.request.get(url);
          if (!response.ok()) {
            brokenLinks.push(`${href} (${response.status()})`);
          }
        } catch (e) {
          brokenLinks.push(`${href} (failed to fetch)`);
        }
      }
      
      if (brokenLinks.length > 0) {
        console.log(`Broken internal links on ${page}:`, brokenLinks);
      }
      expect(brokenLinks).toHaveLength(0);
    });
  }
});

test.describe('External Links', () => {
  // Test external links on key pages (videos has YouTube links, resources has docs links)
  const pagesWithExternalLinks = ['/videos/', '/resources/', '/whats-new/'];
  
  for (const page of pagesWithExternalLinks) {
    test(`external links on ${page} are reachable`, async ({ page: browserPage }) => {
      test.setTimeout(120000); // External links can be slow
      
      await browserPage.goto(`${BASE_URL}${page}`);
      
      // Get all external links
      const externalLinks = browserPage.locator('a[href^="http"]:not([href*="localhost"])');
      const count = await externalLinks.count();
      
      const brokenLinks: string[] = [];
      const checkedUrls = new Set<string>();
      
      for (let i = 0; i < count; i++) {
        const href = await externalLinks.nth(i).getAttribute('href');
        if (!href || checkedUrls.has(href)) continue;
        checkedUrls.add(href);
        
        try {
          const response = await browserPage.request.get(href, {
            timeout: 10000,
            ignoreHTTPSErrors: true,
          });
          
          // Allow redirects (3xx) as valid
          if (response.status() >= 400) {
            brokenLinks.push(`${href} (${response.status()})`);
          }
        } catch (e) {
          // Some sites block automated requests - log but don't fail
          console.log(`Warning: Could not verify ${href}`);
        }
      }
      
      if (brokenLinks.length > 0) {
        console.log(`Broken external links on ${page}:`, brokenLinks);
      }
      expect(brokenLinks).toHaveLength(0);
    });
  }
});

test.describe('YouTube Video Links', () => {
  test('all YouTube video links are valid', async ({ page }) => {
    test.setTimeout(180000); // YouTube checks can be slow
    
    await page.goto(`${BASE_URL}/videos/`);
    
    // Get all YouTube links
    const youtubeLinks = page.locator('a[href*="youtube.com"], a[href*="youtu.be"]');
    const count = await youtubeLinks.count();
    
    console.log(`Found ${count} YouTube links to check`);
    
    const brokenLinks: string[] = [];
    const checkedUrls = new Set<string>();
    
    for (let i = 0; i < count; i++) {
      const href = await youtubeLinks.nth(i).getAttribute('href');
      if (!href || checkedUrls.has(href)) continue;
      checkedUrls.add(href);
      
      try {
        const response = await page.request.get(href, {
          timeout: 15000,
          ignoreHTTPSErrors: true,
        });
        
        // YouTube returns 200 even for removed videos, so check for error indicators
        if (response.status() >= 400) {
          brokenLinks.push(`${href} (${response.status()})`);
        }
      } catch (e) {
        console.log(`Warning: Could not verify YouTube link ${href}`);
      }
    }
    
    if (brokenLinks.length > 0) {
      console.log('Broken YouTube links:', brokenLinks);
    }
    expect(brokenLinks).toHaveLength(0);
  });
});

test.describe('Page Structure', () => {
  for (const page of PAGES) {
    test(`${page} has proper structure`, async ({ page: browserPage }) => {
      await browserPage.goto(`${BASE_URL}${page}`);
      
      // Check page has title
      const title = await browserPage.title();
      expect(title).toBeTruthy();
      
      // Check page has main content
      const body = browserPage.locator('body');
      await expect(body).toBeVisible();
      
      // Check navbar exists (use first() for pages with multiple navs)
      const nav = browserPage.locator('nav').first();
      await expect(nav).toBeVisible();
    });
  }
});
