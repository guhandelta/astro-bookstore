import { defineCollection, z } from 'astro:content'

export const collections = {
    blog: defineCollection({
        schema: z.object({
            title: z.string(),
            slug: z.string(),
            date: z.date(),
            description: z.string().max(150),
        })
    })
}