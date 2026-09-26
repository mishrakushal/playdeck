export interface Project {
  slug: string;
  title: string;
  blurb: string;
  href: string;
  stack: string;
  /** Two 1200×900 layers in public/projects/: base prints first, reg is the off-register second ink. */
  art: { base: string; reg: string };
  /** Describes both layers together. */
  alt: string;
}

// Newest first: it gets top billing on the wall.
export const projects: Project[] = [
  {
    slug: 'vitruvian',
    title: 'Vitruvian Pokémon',
    blurb:
      "Leonardo never met a Pikachu. This fixes that. Every Pokémon's real 3D model, measured from its own mesh and bones and drawn into his notebook (the measures are true, the meetings are not).",
    href: 'https://vitruvian-sigma.vercel.app/#25',
    stack: 'Vercel · three.js',
    art: { base: 'vitruvian-base.png', reg: 'vitruvian-reg.svg' },
    alt: "Pikachu printed in red inside Leonardo's circle and square, drawn in cobalt, with three head-height ticks and the label r = 0.607 times s.",
  },
  {
    slug: 'find-me-a-place',
    title: 'Find Me A Place',
    blurb:
      "Somewhere to meet that's fair to the whole group. Places are ranked by how evenly everyone's travel time is spread, not by the midpoint (the midpoint is usually a lake).",
    href: 'https://find-me-a-place-liart.vercel.app/',
    stack: 'Vercel · Next.js',
    art: { base: 'fmap-base.svg', reg: 'fmap-reg.svg' },
    alt: 'Three friend dots with dashed lines into a red cross. Below, a travel-time strip: Asha 21, Ravi 27, Meera 28 minutes; Kabir not placed yet.',
  },
];
