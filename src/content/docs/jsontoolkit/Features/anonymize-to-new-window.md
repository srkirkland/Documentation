---
title: Anonymize to New Window
description: Generate share-safe fake data while preserving JSON structure, then open the anonymized result in a separate window.
---

Use **File → Anonymize to New Window** (or **Shift+Cmd+A**) to sanitize sensitive payloads without losing shape, keys, or nesting.

## How the flow works

1. Start with valid JSON in the main editor.
2. Open the anonymize modal from the File menu.
3. Configure options:
   - **Preserve properties** (leave fields untouched)
   - **Linked properties** (same fake value across occurrences)
   - **Fuzz numbers** (optional)
   - **Seed** (optional deterministic output)
4. Click **Anonymize To New Window**.

<img src="/jsontoolkit/features/anonymize-modal-filled.png" alt="Anonymize modal configured with preserve/linked keys and seed" />

A new window opens with anonymized JSON content so your original payload remains unchanged.

<img src="/jsontoolkit/features/anonymize-result-window.png" alt="Resulting anonymized payload in a new JSON Toolkit window" />

## Practical tips

- Put timestamps (like `createdAt`) in **Preserve properties** when you need realistic timelines in examples.
- Put identifiers/emails in **Linked properties** when repeated references should stay internally consistent.
- Use a fixed **Seed** when you want stable docs or test fixtures across runs.
