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
    slug: 'imposter',
    title: 'Imposter',
    blurb:
      "Everyone gets the secret word except the imposter, who gets the category and a lot of confidence. One round in ten there's no word at all (everyone's bluffing, nobody's admitting it).",
    href: 'https://imposter-teal-eight.vercel.app/',
    stack: 'Vercel · Vite',
    art: { base: 'imposter-base.svg', reg: 'imposter-reg.svg' },
    alt: "Two tilted word cards. A cobalt outline card reads Biryani, Category: Indian Food. A solid red card tilted the other way reads You're the imposter, Category: Indian Food.",
  },
  {
    slug: 'cc-helper',
    title: 'CC-Helper',
    blurb:
      "Drops CLAUDE.md, DESIGN.md and EXAMPLES.md into a new project, so the rules show up before the code does. The whole installer is eight lines (I read it, so you don't have to, but you should).",
    href: 'https://cc-helper.vercel.app/',
    stack: 'Vercel · sh',
    art: { base: 'cc-helper-base.svg', reg: 'cc-helper-reg.svg' },
    alt: 'Three red folder tabs, CLAUDE.md, DESIGN.md and EXAMPLES.md, seated in a cobalt folder printed with the curl install line and its output. Below it: skip CLAUDE.md (exists).',
  },
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
