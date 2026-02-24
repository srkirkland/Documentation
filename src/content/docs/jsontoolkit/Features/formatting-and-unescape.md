---
title: Formatting, Minify, and Unescape
description: Clean up JSON quickly with Beautify/Minify and convert escaped payloads back into editable JSON.
---

The editor toolbar is designed for quick cleanup and conversion workflows.

## Core actions

- **Beautify**: pretty-print valid JSON with consistent indentation.
- **Minify**: collapse valid JSON into compact one-line form.
- **Unescape**: appears automatically when the editor detects escaped JSON content.

### Example: same payload, escaped and unescaped

Start with regular JSON in the editor:

<img src="/jsontoolkit/features/escape-unescape-original.png" alt="Original JSON payload before escaping" />

```json
{
  "id": 42,
  "name": "Scott Kirkland",
  "email": "scott@example.com",
  "roles": ["admin", "editor"],
  "createdAt": "2026-02-24T19:00:00Z"
}
```

In the Mac app, **Edit → Escape JSON** converts that into a JSON string payload:

<img src="/jsontoolkit/features/escape-unescape-escaped.png" alt="Escaped form of the same JSON payload" />

```json
"{\n  \"id\": 42,\n  \"name\": \"Scott Kirkland\",\n  \"email\": \"scott@example.com\",\n  \"roles\": [\"admin\", \"editor\"],\n  \"createdAt\": \"2026-02-24T19:00:00Z\"\n}"
```

When that escaped form is present, **Unescape** appears in the toolbar. Clicking it restores the same editable JSON structure:

<img src="/jsontoolkit/features/escape-unescape-unescaped.png" alt="Unescaped payload restored back to editable JSON" />

## Desktop menu companion

In the Mac app, **Edit → Escape JSON** and **Edit → Unescape JSON** provide the same conversion actions from the menu.
