# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A beginner-level static HTML educational project written in Korean. Contains a personal introduction page and an HTML tutorial guide.

## Development

No build tools, package managers, or frameworks. To view the pages, open the HTML files directly in a browser:

- `index.html` — Personal self-introduction page
- `html-tutorial.html` — HTML tutorial for beginners (10 sections, Korean)

## Architecture

Two standalone HTML files with no external dependencies, no CSS files, and no JavaScript. Internal anchor links in `html-tutorial.html` provide navigation; it also links back to `index.html`.

The `.bkit/` directory is auto-generated Claude Code state — do not edit manually.
