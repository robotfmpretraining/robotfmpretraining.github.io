# Robot FM Pre-Training — CoRL 2026 Workshop website

A small, dependency-free static website for the workshop
**"What Should Pre-Training Objectives for Robotics Foundation Models Be?"**

It is plain HTML + CSS + a few lines of JavaScript — no build step, no
framework. Edit the files directly and refresh your browser.

## Files

```
index.html              All page content (sections are marked with comments)
assets/css/styles.css   All styling. Design tokens (colors/fonts) are at the top.
assets/js/main.js       Mobile menu toggle + footer year. That's it.
assets/img/             Photos and icons (see "Adding photos" below)
```

## Editing common things

| I want to change…            | Where                                                        |
| ---------------------------- | ----------------------------------------------------------- |
| Title / tagline              | `index.html` → `HERO` section                               |
| Date & location              | `index.html` → `HERO` (`hero__meta`) and footer             |
| Overview text                | `index.html` → `OVERVIEW` section                           |
| Research questions            | `index.html` → `TOPICS` section (copy a `qa-card` block)    |
| Call for papers / topics     | `index.html` → `CALL FOR PAPERS` section                    |
| Important dates              | `index.html` → the `dates-card` (all set to **TBA**)        |
| Schedule                     | `index.html` → `SCHEDULE` table (edit/add `<tr>` rows)      |
| Speakers / organizers        | `index.html` → copy a `person-card` block                   |
| Submission / template links  | search `index.html` for `TODO` and replace `href="#"`       |
| Contact email                | `index.html` → footer (`mailto:`)                           |
| Colors / theme               | `assets/css/styles.css` → `:root` design tokens             |

## Photos

Each speaker/organizer photo lives in `assets/img/` named after the person
(e.g. `assets/img/abhishek-gupta.jpeg`). These were sourced from each person's
own academic/personal website — a comment above every `<img>` in `index.html`
records the source page. The CSS crops them to a circle, so any roughly square
or portrait image works.

To swap a photo: drop a new image into `assets/img/` and update that person's
`<img src="...">` in `index.html` to match (mind the file extension —
most are `.jpg`, but a couple are `.jpeg`/`.png`).

`assets/img/placeholder.svg` is the generic fallback avatar; it is no longer
referenced but is kept in case you add a new person before you have their photo.

## Things still marked as placeholder

- **Important dates** — all `TBA`.
- **Date / location** in the hero and schedule.
- Links marked `TODO` in `index.html` (OpenReview submission, CoRL template,
  contact email).

## Previewing locally

Just open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploying (GitHub Pages)

This repo is named `robotfmpretraining.github.io`, so pushing to the default
branch publishes it at `https://robotfmpretraining.github.io`. The included
`.nojekyll` file tells GitHub Pages to serve the files as-is (no Jekyll build).
