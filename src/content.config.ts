import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/** Accept string / Date / numeric timestamps from Markdown YAML & Pages CMS. */
const contentDate = z.preprocess((value) => {
	if (value instanceof Date) return value;
	if (typeof value === 'string' || typeof value === 'number') return new Date(value);
	if (value && typeof value === 'object' && 'toISOString' in value && typeof (value as Date).toISOString === 'function') {
		return value;
	}
	return value;
}, z.date());

const blog = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
	schema: z.object({
		title: z.string().min(1),
		description: z.string().optional(),
		pubDate: contentDate,
		updatedDate: contentDate.optional(),
		heroImage: z.string().optional(),
		series: z.string().optional(),
		seriesOrder: z.coerce.number().optional(),
	}),
});

export const collections = { blog };
