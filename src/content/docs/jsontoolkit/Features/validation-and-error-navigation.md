---
title: Validation & Error Navigation
description: Catch JSON/JSONC issues instantly, understand where parsing failed, and jump directly to the exact error location.
---

JSON Toolkit validates your input continuously with `jsonc-parser` as you type.

## What to expect

- The status bar updates in real time with **valid** or **error** state.
- Parse errors include a human-readable message plus **line/column** details.
- Use **Jump to error** to move the editor caret directly to the failing token.
- The tree view only renders once your input parses successfully.

<img src="/jsontoolkit/features/validation-error-workflow.png" alt="Validation error state with line/column feedback and Jump to error" />

## Notes

- JSONC is supported, so comments and trailing commas are accepted.
- Even after actions like Escape/Unescape or Diff workflows, validation is re-run so status stays trustworthy.
