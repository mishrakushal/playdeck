export type ProjectStatus = 'in progress' | 'idea';

export interface Project {
  slug: string;
  title: string;
  status: ProjectStatus;
  blurb: string;
  href?: string;
  /** 0 = no fog, 1 = fully obscured */
  fogDensity: number;
}

export const projects: Project[] = [
  {
    slug: 'anatomy-atlas',
    title: '3D Anatomy Atlas',
    status: 'in progress',
    blurb: 'An interactive 3D human body you can peel apart layer by layer, right in the browser.',
    fogDensity: 0.55,
  },
  {
    slug: 'video-to-game',
    title: 'Video → Game',
    status: 'idea',
    blurb: 'Feed it a video clip, get back a playable mini-game built from what it saw.',
    fogDensity: 0.8,
  },
];
