import { mkdir, readdir, rm } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import { projects } from '../src/data/projects.ts';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, '../src/assets/fog-cards');

// Card is rendered ~2:1 (min-height 14rem against a >=260px-wide column).
// Supersample 2x so the baked-in blur stays smooth after downscale.
const SUPERSAMPLE = 2;
const FINAL_WIDTH = 320;
const FINAL_HEIGHT = 176;
const WIDTH = FINAL_WIDTH * SUPERSAMPLE;
const HEIGHT = FINAL_HEIGHT * SUPERSAMPLE;

// Matches the CSS floor this replaces: max(..., 0.42) * 16px.
const FLOOR_BLUR_PX = 0.42 * 16 * SUPERSAMPLE;

const TITLE_COLOR = '#f5f4ff'; // --text
const BLURB_COLOR = '#a8a5c0'; // --text-dim

const PADDING = 24 * SUPERSAMPLE;
const TITLE_FONT_SIZE = 22 * SUPERSAMPLE;
const BLURB_FONT_SIZE = 15 * SUPERSAMPLE;
const BLURB_LINE_HEIGHT = BLURB_FONT_SIZE * 1.5;

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function wrapText(text: string, maxChars: number): string[] {
  const words = text.split(/\s+/);
  const lines: string[] = [];
  let current = '';

  for (const word of words) {
    const candidate = current ? `${current} ${word}` : word;
    if (candidate.length > maxChars && current) {
      lines.push(current);
      current = word;
    } else {
      current = candidate;
    }
  }
  if (current) lines.push(current);

  return lines;
}

function buildCardSvg(title: string, blurb: string): string {
  const contentWidth = WIDTH - PADDING * 2;

  // Rough average glyph width for a generic sans-serif at this weight/size.
  const titleMaxChars = Math.floor(contentWidth / (TITLE_FONT_SIZE * 0.56));
  const blurbMaxChars = Math.floor(contentWidth / (BLURB_FONT_SIZE * 0.52));

  const titleLines = wrapText(title, titleMaxChars);
  const blurbLines = wrapText(blurb, blurbMaxChars);

  const titleTspans = titleLines
    .map(
      (line, i) =>
        `<tspan x="${PADDING}" dy="${i === 0 ? 0 : TITLE_FONT_SIZE * 1.2}">${escapeXml(line)}</tspan>`,
    )
    .join('');

  const titleBlockHeight = titleLines.length * TITLE_FONT_SIZE * 1.2;
  const blurbStartY = PADDING + TITLE_FONT_SIZE + titleBlockHeight + BLURB_FONT_SIZE * 0.6;

  const blurbTspans = blurbLines
    .map(
      (line, i) =>
        `<tspan x="${PADDING}" dy="${i === 0 ? 0 : BLURB_LINE_HEIGHT}">${escapeXml(line)}</tspan>`,
    )
    .join('');

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}">
    <text x="${PADDING}" y="${PADDING + TITLE_FONT_SIZE}" font-family="sans-serif" font-weight="700" font-size="${TITLE_FONT_SIZE}" fill="${TITLE_COLOR}">${titleTspans}</text>
    <text x="${PADDING}" y="${blurbStartY}" font-family="sans-serif" font-weight="400" font-size="${BLURB_FONT_SIZE}" fill="${BLURB_COLOR}">${blurbTspans}</text>
  </svg>`;
}

async function main() {
  if (existsSync(OUT_DIR)) {
    const stale = await readdir(OUT_DIR);
    await Promise.all(stale.map((file) => rm(path.join(OUT_DIR, file))));
  } else {
    await mkdir(OUT_DIR, { recursive: true });
  }

  await Promise.all(
    projects.map(async (project, index) => {
      const svg = buildCardSvg(project.title, project.blurb);
      const outPath = path.join(OUT_DIR, `card-${index}.webp`);

      await sharp(Buffer.from(svg))
        .blur(FLOOR_BLUR_PX)
        .resize(FINAL_WIDTH, FINAL_HEIGHT)
        .webp({ quality: 82 })
        .toFile(outPath);
    }),
  );

  console.log(`Generated ${projects.length} fog card image(s) in ${path.relative(process.cwd(), OUT_DIR)}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
