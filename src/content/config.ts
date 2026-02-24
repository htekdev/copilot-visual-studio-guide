import { defineCollection, z } from 'astro:content';

const docs = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number().optional(),
    section: z.string().optional(),
  }),
});

const videos = defineCollection({
  type: 'content', 
  schema: z.object({
    title: z.string(),
    description: z.string(),
    url: z.string().url(),
    duration: z.string().optional(),
    source: z.string(),
  }),
});

export const collections = { docs, videos };
