---
name: Playdeck
description: Live side projects by Kushal, printed as two-ink riso posters pasted to a plaster wall.
colors:
  cobalt: "#1f3fbf"
  red: "#e3312b"
  yellow: "#ffd21a"
  paper: "#f6f6f1"
  plaster: "#d3d4ce"
  ink: "#141414"
typography:
  display:
    fontFamily: "Big Shoulders Display, sans-serif"
    fontSize: "clamp(78px, min(17vw, 24svh), 240px)"
    fontWeight: 900
    lineHeight: 0.8
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Big Shoulders Display, sans-serif"
    fontSize: "clamp(44px, 5.4vw, 104px)"
    fontWeight: 900
    lineHeight: 0.84
  title:
    fontFamily: "Big Shoulders Display, sans-serif"
    fontSize: "clamp(30px, 3.6vw, 60px)"
    fontWeight: 900
    lineHeight: 1
  lede:
    fontFamily: "Archivo, sans-serif"
    fontSize: "clamp(17px, 1.7vw, 24px)"
    fontWeight: 600
    lineHeight: 1.25
    fontVariation: "'wdth' 88"
  body:
    fontFamily: "Archivo, sans-serif"
    fontSize: "clamp(15px, 1.2vw, 17px)"
    fontWeight: 400
    lineHeight: 1.45
  label:
    fontFamily: "Archivo, sans-serif"
    fontSize: "13px"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "0.07em"
    fontVariation: "'wdth' 80"
  numeral:
    fontFamily: "Archivo, sans-serif"
    fontSize: "max(0.42em, 19px)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.06em"
  fine:
    fontFamily: "Archivo, sans-serif"
    fontSize: "12px"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.06em"
rounded:
  none: "0"
spacing:
  page: "clamp(16px, 3vw, 44px)"
  gutter: "clamp(14px, 2.2vw, 32px)"
  sheet: "clamp(14px, 1.9vw, 28px)"
components:
  hero-poster:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.cobalt}"
    rounded: "{rounded.none}"
    padding: "{spacing.sheet}"
  project-poster:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "{spacing.sheet}"
  project-poster-yellow:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "{spacing.sheet}"
  poster-title:
    textColor: "{colors.red}"
    typography: "{typography.headline}"
  poster-title-yellow:
    textColor: "{colors.cobalt}"
    typography: "{typography.headline}"
  index-entry:
    textColor: "{colors.cobalt}"
    typography: "{typography.title}"
  index-numeral:
    textColor: "{colors.red}"
    typography: "{typography.numeral}"
  cta-rule:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
---

# Design System: Playdeck

## Overview

**Creative North Star: "The Riso Poster Wall"**

Playdeck is a plaster wall with two-ink risograph posters pasted up by hand. Each live project is a printed sheet, not a card in a grid. The hero is one more sheet on the same wall. The sheets sit square-cornered on a grained plaster ground, each tilted a fraction of a degree, with a soft paste-up shadow under it. Cobalt and red are the only printing inks, and they overprint with multiply blending, so where they cross they make the dark third colour a real riso press makes.

The one signature device is misregistration. Every poster's second ink layer and its title ghost sit slightly off register, and on hover or keyboard focus they snap into register. The movement is small, eased, and physical, and it is the whole of the motion language. The page ships zero JavaScript. Everything is static HTML and CSS, and the snap is pure CSS.

The density is poster-scale: huge condensed caps, a single dry line of copy per project, and a hard ruled strip at the foot of each sheet. Artwork belongs to the projects. The wall frames it and prints it in the house inks, but never redraws the project's identity.

**Key Characteristics:**
- Two inks (cobalt, red) overprinted with multiply, on paper or yellow stock, over a grained plaster ground.
- Square sheets with a slight alternating tilt and a soft paste-up shadow.
- Off-register second ink that snaps into register on hover and focus-visible.
- Big Shoulders Display 900 caps for display, Archivo for everything read.
- Zero JS. Reduced motion zeroes every transition.

## Colors

A deliberately starved palette: two printing inks, two paper stocks, one wall, and a near-black for reading text.

### Primary
- **Press Cobalt** (cobalt): the first ink. Used for the hero's type, the index rules, the global focus ring, the text-selection fill, the scrollbar thumb, the title ghost on paper posters, and the title itself on yellow posters.

### Secondary
- **Riso Red** (red): the second ink. Used for poster titles on paper stock, the ghost on yellow stock, the halftone sun in the hero, the index numerals, and inside the artwork. It only ever appears as large text or as graphic mass.

### Tertiary
- **Fluoro Yellow Stock** (yellow): the alternate paper stock. Every second project poster (index 1, 3, 5...) is printed on it. It is never used as an ink.

### Neutral
- **Poster Paper** (paper): the default sheet stock for the hero and even-indexed posters. It is also the text colour on a cobalt selection.
- **Wall Plaster** (plaster): the page ground under a fixed fractal-noise grain (160px tile, 9% alpha black). It is also the browser `theme-color` and the scrollbar track.
- **Reading Ink** (ink): the near-black for blurbs, CTA strips, rules on project posters, and the footer. This is the one colour outside the two-ink conceit. It stands in for the typeset text layer, and it keeps small text fully legible.

### Named Rules
**The Two Inks Rule.** Graphic colour comes from cobalt and red only, overprinted with `mix-blend-mode: multiply`. A new tint means a new ink, and this system has none to give.

**The Large Red Rule.** Red on paper measures 4.09:1, which passes only for large text. Red is used as display type, as graphic mass, or as bold numerals floored at 19px. It is never used for body copy, labels, or fine print.

**The Alternating Stock Rule.** Poster stock and tilt alternate by index. Even-indexed posters use paper stock and tilt right (0.5deg). Odd-indexed posters use yellow stock and tilt left (-0.7deg). On yellow stock, the title and ghost inks swap, giving a cobalt title with a red ghost.

## Typography

**Display Font:** Big Shoulders Display 900 (with sans-serif fallback), always uppercase.
**Body Font:** Archivo, variable width 62-125 and weight 400-900 (with sans-serif fallback). A local subset (`src/assets/archivo-symbols.woff`, OFL) fills in → and ∞ via `unicode-range`, because Google's subsets omit them.

**Character:** Gig-poster wood type over a sturdy grotesque. The condensed caps shout, and Archivo, narrowed with its width axis, keeps the dry voice readable.

### Hierarchy
- **Display** (900, clamp(78px, min(17vw, 24svh), 240px), 0.8): the stacked PLAY / DECK wordmark only. Below 761px wide it becomes clamp(96px, 30vw, 200px).
- **Headline** (900, clamp(44px, 5.4vw, 104px), 0.84): poster titles, uppercase, `text-wrap: balance`, with an off-register ghost.
- **Title** (900, clamp(30px, 3.6vw, 60px), 1): entries in the hero's index list.
- **Lede** (600, clamp(17px, 1.7vw, 24px), 1.25, width 88%): the hero's single voice paragraph, capped at 21ch.
- **Body** (400, clamp(15px, 1.2vw, 17px), 1.45): poster blurbs, capped at 58ch.
- **Label** (700, 13px, 0.07em, width 80%, uppercase): the host and stack strip at the foot of each poster. The footer uses a sibling setting (600, 13px, 0.06em, uppercase).
- **Numeral** (700, max(0.42em, 19px), 0.06em): red two-digit index numbers (01, 02).
- **Fine** (500, 12px, 1.4, 0.06em, uppercase): the edition line at the foot of the hero, which wraps at narrow widths and keeps its last item unbroken.

### Named Rules
**The Caps Are Ink Rule.** Big Shoulders is reserved for display, headline, and index sizes. Anything that must be read in sentences is set in Archivo.

**The Outlined-Art Rule.** Text inside artwork SVGs is outlined to paths, from Big Shoulders Display 900 and Archivo 600/700, because an SVG loaded via `<img>` cannot load webfonts.

## Layout

A single wall, max 1600px wide, centred, with page padding (spacing.page). On desktop the wall is a 5:7 grid, with the hero sheet on the left and a single column of project posters on the right, separated by the gutter (spacing.gutter). Newest project first.

- **Sticky hero:** at ≥761px wide and ≥700px tall, the hero is `position: sticky`, offset by the page padding, with a minimum height of one viewport minus that padding. It stays one screen tall at any N while the posters scroll past, and the index and fine print pin to its foot via `margin-top: auto`.
- **Stacked:** at ≤760px, the wall collapses to one column. The hero comes first, and its index follows the lede directly.
- **Poster anatomy:** art (4:3, 1200×900 layers), then title, blurb, and the CTA strip (14px above, 9px padding, 2px top rule).
- **Scaling to N:** the hero count ("Two", "Three"...) and the verb wording ("It actually works" / "Both" / "All") derive from `projects.length`. The index list and the poster column are both generated from the same array. Adding a project means one entry in `src/data/projects.ts` plus two art layers in `public/projects/` (see README.md).

## Elevation & Depth

Depth is physical paper on a wall, and nothing else. Every sheet carries the same soft paste-up shadow: a hairline contact edge plus a short, tight drop that reads as paper lifting slightly off plaster. There is no hover lift and no stacked elevation scale. Within a sheet, depth comes from overprint: layers combine with multiply, never with opacity stacks or blur.

### Shadow Vocabulary
- **Paste-up** (`box-shadow: 0 1px 0 rgb(0 0 0 / 0.08), 0 14px 24px -18px rgb(0 0 0 / 0.45)`): on every sheet (hero and posters), at rest and always.

### Named Rules
**The One Shadow Rule.** Every sheet uses the same paste-up shadow. State is shown by register, never by elevation.

## Shapes

Square-cornered sheets (rounded.none) with a 2px rule vocabulary. The index list uses 2px rules in currentColor between entries. Poster CTA strips carry a 2px reading-ink top rule. Underlines are 2-3px with a 3px or 0.12em offset. The only curve on the wall is the hero's halftone sun: a circle filled with a 7px red dot screen (radial-gradient, 42% dot), multiplied, and cropped by the sheet edge (`overflow: hidden`). Tilts are small and alternate (-0.7deg / 0.5deg). The hero always tilts left.

## Components

### Project Poster (signature)
A printed sheet per live project, with the whole sheet as one link target.
- **Stock:** paper or yellow, alternating by index, with sheet padding and no radius.
- **Art:** a base layer `<img>` plus an absolutely positioned `.reg` second-ink layer, multiplied and offset `translate(1%, -1%)`. The alt text describes both layers together, and the reg layer is `alt=""`. The first poster loads eagerly and the rest lazily.
- **Title:** a single-cell grid where the link and a `::before` ghost (`content: attr(data-t) / ''`, so screen readers skip it) share an area. The ghost is the other ink, multiplied, offset `translate(0.055em, 0.045em)` at 0.9 opacity.
- **Stretched link:** the title link's `::after` covers the sheet (`inset: 0`), so the whole poster is the hit area. The link opens in a new tab.
- **CTA strip:** the host (underlined 2px) on the left and the stack with a trailing arrow on the right. It wraps at narrow widths.
- **Register snap:** on `:hover` or `:has(a:focus-visible)`, the reg layer and the ghost transition to `transform: none` (0.35s, ease). On focus, the sheet takes a 4px cobalt outline at 8px offset in place of the link's own ring.

### Hero Poster
The masthead sheet, printed in cobalt on paper. It holds the halftone red sun (off register by `translate(7px, -5px)`, which snaps home on hero hover), the stacked display wordmark, the lede with the build time, the index, and the fine print. On narrow screens the sun shrinks to 46% width and moves inboard.

### Index List
An ordered list labelled by a small tracked caps label (700, 12px, 0.12em), which is its accessible name via `aria-labelledby`. Each entry has a red numeral and a title-size cobalt link between 2px cobalt rules. Hover underlines the link at 3px.

### Footer
A wrap-flex strip under the wall in the footer label setting, with the sign-off on the left and the GitHub link (underline 2px, offset 3px) on the right.

### Focus
The global focus ring is a 4px solid cobalt outline at a 4px offset. Posters override it at the sheet level, as described above.

## Do's and Don'ts

### Do:
- **Do** print every new graphic in cobalt and red only, with multiply where the inks cross, on paper or yellow stock.
- **Do** give every new poster two 1200×900 art layers: a base, and an off-register reg layer that snaps into register on hover and focus-visible.
- **Do** keep red to large text, graphic mass, or bold numerals of 19px and up.
- **Do** outline text inside artwork SVGs, and embed the provenance of every shipped raster in its PNG tEXt.
- **Do** derive counts and wording from `projects.length`, never hard-code them.
- **Do** stamp "checked at" with the build time in IST (`en-IN`, Asia/Kolkata).
- **Do** keep the page zero-JS, and let `prefers-reduced-motion: reduce` zero all transitions.

### Don't:
- **Don't** add a third ink, gradients, or opacity tints to fake one. Reading ink is for text, not graphics.
- **Don't** round sheet corners or give posters a different shadow, a hover lift, or a border.
- **Don't** set body copy, labels, or fine print in red.
- **Don't** redraw a project's identity. Print its own artwork in the house inks.
- **Don't** place small tracked caps above headlines as eyebrows. The tracked label exists only to name the index list.
