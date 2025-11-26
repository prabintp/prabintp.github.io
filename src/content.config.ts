import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
		}),
});

const projects = defineCollection({
	loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			heroImage: image().optional(),
			technologies: z.array(z.string()),
			github: z.string().url().optional(),
			demo: z.string().url().optional(),
			featured: z.boolean().default(false),
			order: z.number().default(999),
		}),
});

const experience = defineCollection({
	loader: glob({ base: './src/content/experience', pattern: '**/*.{md,mdx}' }),
	schema: () =>
		z.object({
			company: z.string(),
			position: z.string(),
			startDate: z.coerce.date(),
			endDate: z.coerce.date().optional(),
			location: z.string().optional(),
			current: z.boolean().default(false),
		}),
});

export const collections = { blog, projects, experience };
