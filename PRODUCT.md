# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Friends and peers** who follow a link to see what Kushal has been making.
- **Recruiters** skimming for evidence of shipped work. They need to see at a glance what each project is and where it lives, then click through.

Visitors arrive on a phone or a desktop, usually from a shared link, and spend under a minute before opening one of the projects.

## Product Purpose

Playdeck is Kushal's gallery of **live** side projects. Each entry points to a working deployment hosted elsewhere (Vercel, GitHub Pages, Netlify). The gallery exists to frame those projects and send visitors to them. Success means a visitor understands what each project is and opens it.

## Positioning

A hand-curated shelf of finished, running things. Every entry is live and clickable. There are no roadmaps, statuses or "coming soon" cards.

## Operating Context

- Static Astro site on GitHub Pages under base path `/playdeck`, built by the GitHub Actions workflow in `.github/workflows/main.yml`.
- Projects are listed in `src/data/projects.ts`. Adding one should mean adding one entry plus two artwork layers.

## Capabilities and Constraints

- **Live projects only.** No status badges, "idea" entries or work-in-progress cards.
- The list is short (two today) and grows one project at a time. The layout must make two entries feel deliberate and still scale to N.
- Each project has a strong visual identity of its own. The gallery frames their artwork and does not restyle it.
- Every project link must be obvious and scannable.
- Content stays visible without JavaScript.

## Brand Commitments

- **Binding visual references (the user's Pinterest boards):**
  - screen-printed duotone movie and gig posters with heavy condensed type;
  - Indian pop remix collage (a डाइट Coke collage over truck-art and mehendi, Krishna × Matrix) with irreverent copy ("be chalant, who cares?");
  - Pichwai, Kalamkari, Madhubani and Mughal-miniature pattern language: lotus, tree of life, cusped arches, dense floral borders, madder red, indigo, leaf green and turmeric.
- **Voice:** conversational, self-aware, lightly funny. This carries over from Kushal's portfolio ("A day at a time"; "somewhere between a vector database and a whiteboard").

## Evidence on Hand

1. **Find Me A Place**: https://find-me-a-place-liart.vercel.app/ (source `~/Code/find-me-a-place/find-me-a-place`, Next.js). Finds a fair place for a group spread across a city to meet. It ranks places by how evenly everyone's travel time is spread, not by the raw midpoint. OG image at `/opengraph-image`.
2. **Vitruvian Pokémon**: https://vitruvian-sigma.vercel.app/ (source `~/Code/vitruvian/vitruvian`, Vite + three.js). Every Pokémon's real 3D model, measured from its own mesh and drawn as a plate from Leonardo's notebook. OG image `public/og.jpg`; `/#25` deep-links to Pikachu.

Nothing else may be claimed. There are no metrics, user counts, testimonials or other projects.

## Product Principles

1. The projects are the show. The gallery frames them and never outshines them.
2. One click from glance to live project.
3. Only real, running work. Honesty over padding.
4. Personality in the voice, clarity in the links.
