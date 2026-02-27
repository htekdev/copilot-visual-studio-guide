import { defineCollection, z } from 'astro:content';

const videos = defineCollection({
  type: 'content', 
  schema: z.object({
    title: z.string(),
    description: z.string(),
    url: z.string().url(),
    duration: z.string().optional(),
    source: z.string(),
    pillar: z.enum(['getting-started', 'completions', 'chat', 'edits', 'agent-mode', 'mcp', 'debugging', 'advanced']),
    date: z.string().optional(),
    thumbnail: z.string().optional(),
    order: z.number().optional(), // Learning path order within pillar
  }),
});

export const collections = { videos };
