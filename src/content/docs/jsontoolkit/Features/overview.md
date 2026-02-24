---
title: Features
description: Discover the key features and behaviors that make JSON Toolkit a powerful tool for working with JSON data.
---

## Feature deep dives

- [Validation & Error Navigation](/jsontoolkit/features/validation-and-error-navigation/)
- [Formatting, Minify, and Unescape](/jsontoolkit/features/formatting-and-unescape/)
- [Tree View Workflows](/jsontoolkit/features/tree-view-workflows/)
- [Settings & Personalization](/jsontoolkit/features/settings-and-personalization/)
- [Diff Viewer](/jsontoolkit/features/diff-viewer/)
- [Desktop Menu & Shortcuts](/jsontoolkit/features/desktop-menu-and-shortcuts/)

## Validation and feedback loop

- Every edit runs through `jsonc-parser` so validation occurs in real-time.
- Errors become in-editor markers, surface in the status pill, and can be focused via "Jump to error."
- Successful parses refresh the tree view instantly.

## Editing experience

- The rich editor is tuned for JSON: word wrap, format-on-paste/type, 2-space tab size, padded gutters for readability.
- Paste detection can auto-beautify valid input after a short debounce, preserving selection (optional).
- Escaped JSON detection watches for quoted payloads and reveals the Unescape button when relevant.

## Tree view behavior

- Expand All/Collapse All controls plus a default partial expansion depth.
- Supports several configurable display options: show/hide values, trim long strings, show array indices, and more.
- Theming matches the editor (light/dark) with GitHub-inspired palettes.
- Renders only when the JSON is valid.

## Privacy and data handling

- All parsing, anonymizing, and diffing are local. There is no telemetry or network usage.
- Anonymizer uses faker data; linked keys share deterministic replacements, and numeric fuzzing is optional.
- Escape/Unescape and Diff actions re-run validation so status and tree stay trustworthy after conversions.

## Diff viewer

- Compare two JSON documents side-by-side in a dedicated workspace.
- Each side validates independently, with parse feedback inline.
- See full walkthrough: [Diff Viewer](/jsontoolkit/features/diff-viewer/).

## Windowing and bootstrap flows

- New windows inherit the current size/position with a small offset. Handy so you don't misplace them.
- Diff view can be opened in its own window to compare documents while keeping the main editor intact.
- Loading from file opens a new window to avoid disrupting your current work.

## Personalization

- Settings persist in localStorage: theme preference (system/light/dark), auto-beautify toggle, tree display options, string trimming, and zoom level.
- Zoom responds to Cmd/Ctrl +/-/0 and applies to the main app; diff view maintains its own scaling while respecting stored zoom.
