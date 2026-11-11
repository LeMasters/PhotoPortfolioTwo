# Kiyomi theme test

An experiment: a third-party Hugo theme, edited through Pages CMS.

**Theme:** [kiyomi-portfolio](https://github.com/mathscantor/hugo-theme-kiyomi-portfolio) by mathscantor, MIT License (see `themes/kiyomi-portfolio/LICENSE`). Copied unmodified from commit `e2d03b5`. The sample person, text and images are placeholders.

## What's where

| Path | What it is | Edited through |
|---|---|---|
| `themes/kiyomi-portfolio/` | The theme, unmodified | Nobody |
| `layouts/partials/*.html`, `assets/js/contact-fab.js` | Site-level overrides of theme parts (see below). Hugo uses these in place of the theme's files of the same name. | Template author |
| `config/_default/hugo.toml` | Technical settings, including `theme = "kiyomi-portfolio"` | Template author |
| `config/_default/params.yaml` | Name, tagline, photos, email, links, résumé | Pages CMS → Profile |
| `content/_index.md` | About text | Pages CMS → About |
| `data/*.yaml` | One file per section: projects, experience, skills, education, awards | Pages CMS, one form each |
| `static/images/`, `static/files/` | Uploaded images and the résumé | Pages CMS |
| `.pages.yml` | Pages CMS forms | Template author |
| `.github/workflows/hugo.yml` | Builds with Hugo extended and publishes | Template author |

A section disappears when its data file is missing or empty (theme behavior).

## Overrides of the theme

| File | Change from the theme |
|---|---|
| `linkedin-url.html` | New helper. Turns whatever is typed in the LinkedIn field (full address, `www.linkedin.com/in/name`, or just `name`) into a working `https://` address. |
| `head.html` | Browser-tab and sharing title built from the student's name (not `hugo.toml`); description falls back to the tagline when empty. |
| `hero.html` | Repaired LinkedIn link, hidden when empty. "View My Work" goes to Projects when there are any. |
| `contact.html` | Contact message editable in the Profile form (the theme hard-coded "cyber security researcher"). Repaired LinkedIn link, hidden when empty. "Download Resume" appears only when a résumé is uploaded. |
| `contact-fab.html`, `assets/js/contact-fab.js` | Repaired LinkedIn link in the floating contact button. The button stays hidden while the top of the page is on screen, so it no longer covers "Get in Touch" on phones. |
| `nav.html` | Menu lists only sections that exist, and includes Projects. "Contact" item dropped (the "Let's Talk" button goes there). |
| `skills.html` | "Language Proficiency" column and "& Languages" appear only when there are languages; the click hint only when skills have explanations. |
| `education.html` | Education and Certifications columns appear only when they have entries. |
| `presentations.html` | Retitled "Projects"; link label editable per project (default "View project"); images load lazily. |

One-time setup for publishing: **Settings → Pages → Source: GitHub Actions**.
