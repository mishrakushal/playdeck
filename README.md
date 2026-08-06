# Playdeck

A gallery hub for mini-projects, live at [mishrakushal.github.io/playdeck](https://mishrakushal.github.io/playdeck/).

Each project gets a card that starts fogged over — a status badge stays readable, but the title
and blurb stay hazy until the project is further along. Hover or tap a card to thin the fog a
little; it never fully clears.

## Stack

- [Astro](https://astro.build) — static-first, ships ~0 JS by default
- [GSAP](https://gsap.com) + ScrollTrigger — one-shot and scroll-triggered animation
- Plain CSS keyframes for continuous ambient motion (fog blobs, shimmer)
- Deployed to GitHub Pages via GitHub Actions on every push to `main`

## Adding a project

Add an entry to `src/data/projects.ts`:

```ts
{
  slug: 'my-project',
  title: 'My Project',
  status: 'idea', // or 'in progress'
  blurb: 'One or two sentences.',
  fogDensity: 0.7, // 0 = no fog, 1 = fully obscured
}
```

## Commands

| Command               | Action                                     |
| :--------------------- | :------------------------------------------ |
| `npm install`           | Install dependencies                        |
| `npm run dev`           | Start local dev server at `localhost:4321`  |
| `npm run build`         | Build production site to `./dist/`          |
| `npm run preview`       | Preview the build locally before deploying  |
| `npx astro check`       | Type-check the project                      |
