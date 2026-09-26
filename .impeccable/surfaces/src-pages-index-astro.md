---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: []
---

# Playdeck index (the wall)

Scope: `src/pages/index.astro`, the only route. Mode: Experience. Visitor: a friend or recruiter from a shared link, under a minute, phone or desktop. Job: see what each live project is, then open one.

## Direction contract

THESIS: A plaster wall of two-ink risograph posters pasted up by hand. Each live project is a printed poster, not a card in a grid. It refuses the screenshot-card gallery.

OWN-WORLD: Plaster ground (#d3d4ce) with grain. Posters in paper (#f6f6f1) or yellow (#ffd21a), each slightly tilted. Two inks only, cobalt #1f3fbf and red #e3312b, overprinted with multiply. Heavy condensed caps in Big Shoulders Display 900, text in Archivo. Every poster's second ink sits off-register.

STORY: The visitor sees a wall of posters by Kushal, all live and all working, reads one line per project in his dry voice, and clicks straight through to the deployment.

FIRST VIEWPORT: Desktop has a 5:7 split. On the left, a tall PLAY/DECK hero poster with a halftone red sun, a voice lede stamped with the real build time, an "On the wall (so far)" index, and the fine print. On the right, a column of project posters with Vitruvian first. Each poster is printed graphic art (thumbnail style C), a red/cobalt ghosted title, the blurb, and a host plus stack CTA rule. Phone stacks them to one column.

FORM: Riso poster wall, the picked direction (1st on the list), seed key 6e38fde7. Signature interaction: register snap. On hover or focus-visible, the misregistered ink layer and the title ghost slide into register.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Decisions
- Thumbnails: style C, the printed graphic. Artwork ships as static base and reg image layers in `public/projects/`.
- Copy: Kushal's voice only, with no toggle.
- The "checked at" time is the build time in IST, restamped on every deploy.
