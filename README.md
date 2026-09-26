# Playdeck

Kushal's live side projects, pasted up as two-ink riso posters. Live at
[mishrakushal.github.io/playdeck](https://mishrakushal.github.io/playdeck/).

Every poster is a working deployment. There are no roadmaps and no "coming soon".

## Stack

- [Astro](https://astro.build), static and with zero client JS.
- Fonts from Google Fonts: Big Shoulders Display 900 and Archivo.
- Deployed to GitHub Pages by GitHub Actions on every push to `main`. This needs the repo's
  **Settings → Pages → Source** set to "GitHub Actions" once, before the first deploy.
- The hero's "checked at" time is stamped at build time in IST, so each deploy re-stamps it.

## Adding project N

1. **Art.** Draw two 1200×900 layers into `public/projects/`, using only the two inks: cobalt
   `#1f3fbf` and red `#e3312b`.
   - `<slug>-base.svg` (or `.png`) is the first ink. Keep it transparent so the poster's paper or
     yellow shows through.
   - `<slug>-reg.svg` is the second ink. It prints off-register and snaps into place on hover
     and focus.
   - Outline any text or draw it as paths. An SVG loaded through `<img>` can't load web fonts.
2. **Entry.** Add it to the top of `src/data/projects.ts`. The newest project gets top billing.

```ts
{
  slug: 'my-project',
  title: 'My Project',
  blurb: 'One or two sentences, in voice.',
  href: 'https://my-project.vercel.app/',
  stack: 'Vercel · Next.js',
  art: { base: 'my-project-base.svg', reg: 'my-project-reg.svg' },
  alt: 'What the two layers show together.',
}
```

The tint (paper or yellow) and the tilt alternate by position. The hero's count, its index list
and the CTA's host label all update on their own.

## Commands

| Command               | Action                                     |
| :--------------------- | :------------------------------------------ |
| `npm install`           | Install dependencies                        |
| `npm run dev`           | Start local dev server at `localhost:4321`  |
| `npm run build`         | Build production site to `./dist/`          |
| `npm run preview`       | Preview the build locally before deploying  |
| `npx astro check`       | Type-check the project                      |
