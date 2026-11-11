# Kiyomi theme test

An experiment: a third-party Hugo theme, edited through Pages CMS.

**Theme:** [kiyomi-portfolio](https://github.com/mathscantor/hugo-theme-kiyomi-portfolio) by mathscantor, MIT License (see `themes/kiyomi-portfolio/LICENSE`). Copied unmodified from commit `e2d03b5`. The sample person, text and images are placeholders.

## What's where

| Path | What it is | Edited through |
|---|---|---|
| `themes/kiyomi-portfolio/` | The theme, unmodified | Nobody |
| `layouts/partials/presentations.html` | Site-level override of one theme section: retitled "Projects", link text changed | Template author |
| `config/_default/hugo.toml` | Technical settings, including `theme = "kiyomi-portfolio"` | Template author |
| `config/_default/params.yaml` | Name, tagline, photos, email, links, résumé | Pages CMS → Profile |
| `content/_index.md` | About text | Pages CMS → About |
| `data/*.yaml` | One file per section: projects, experience, skills, education, awards | Pages CMS, one form each |
| `static/images/`, `static/files/` | Uploaded images and the résumé | Pages CMS |
| `.pages.yml` | Pages CMS forms | Template author |
| `.github/workflows/hugo.yml` | Builds with Hugo extended and publishes | Template author |

A section disappears when its data file is missing or empty (theme behavior).

One-time setup for publishing: **Settings → Pages → Source: GitHub Actions**.
