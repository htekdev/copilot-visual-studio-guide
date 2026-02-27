import { defineCollection, z } from 'astro:content';

const videos = defineCollection({
  type: 'content', 
  schema: z.object({
    title: z.string(),
    description: z.string(),
    url: z.string().url(),
    duration: z.string().optional(),
    source: z.string(),
    pillar: z.enum(['getting-started', 'autocomplete', 'chat', 'agent-mode', 'mcp', 'code-review', 'advanced']),
    date: z.string().optional(),
    thumbnail: z.string().optional(),
  }),
});

export const collections = { videos };
