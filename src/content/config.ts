import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
    // Using glob loader to find README.md files in the root /projects directory
    loader: glob({ pattern: '**/README.md', base: './projects' }),
    schema: z.object({
        title: z.string().optional(),
        description: z.string().optional(),
        date: z.date().optional(),
        tags: z.array(z.string()).optional().default([]).default([]),
        featured: z.boolean().optional().default(false),
    }),
});

export const collections = { projects };
