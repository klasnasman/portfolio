import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const selected = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/selected" }),
  schema: ({ image }) =>
    z.object({
      project: z.string(),
      type: z.string().transform((value) => value.toLowerCase()),
      tags: z.array(z.string()),
      link: z.string(),
      year: z.number(),
      thumb: image(),
    }),
});
const all = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/all" }),
  schema: z.object({
    project: z.string(),
    type: z.string().transform((value) => value.toLowerCase()),
    tags: z.array(z.string()),
    link: z.string(),
    year: z.number(),
  }),
});
export const collections = {
  selected: selected,
  all: all,
};
