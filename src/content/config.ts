import { defineCollection, z } from "astro:content";

const selected = defineCollection({
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
  schema: ({ image }) =>
    z.object({
      project: z.string(),
      type: z.string().transform((value) => value.toLowerCase()),
      tags: z.array(z.string()),
      link: z.string(),
      year: z.number(),
    }),
});
const about = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      thumb: image(),
    }),
});
export const collections = {
  selected: selected,
  all: all,
  about: about,
};
