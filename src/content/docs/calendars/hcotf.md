---
title: HCOTF Schedule Calendar
description: Add the HCOTF schedule to your calendar app so it stays up to date.
---

Subscribe to the HCOTF schedule calendar so new events, changes, and cancellations appear automatically in your calendar app.

## Calendar Feed URL

Copy/paste this URL when your calendar app asks for a subscription/iCal feed:

```text
https://calendar.srkirkland.dev/hcotf-schedule.ics
```

## Apple Calendar (iPhone / iPad / Mac)

### One-tap subscribe (recommended)

On Apple devices, this link usually opens Calendar and prompts you to add it as a subscription:

[Subscribe in Apple Calendar](webcal://calendar.srkirkland.dev/hcotf-schedule.ics)

### Manual subscribe

If the link doesn’t work, add it from within Calendar:

**iPhone / iPad**

1. Open **Calendar**.
2. Tap **Calendars** (bottom).
3. Tap **Add Calendar** → **Add Subscription Calendar**.
4. Paste the feed URL.
5. Tap **Subscribe** / **Add**.

**Mac**

1. Open **Calendar**.
2. Choose **File** → **New Calendar Subscription…**
3. Paste the feed URL, then click **Subscribe**.
4. Choose your refresh settings, then click **OK**.

## Google Calendar (web)

Google Calendar can subscribe to an iCal URL (it refreshes periodically).

1. Open Google Calendar in a browser: https://calendar.google.com/
2. In the left sidebar, next to **Other calendars**, click **+** → **From URL**.
3. Paste the feed URL.
4. Click **Add calendar**.

Optional “click to add” link (works for many users):
[Add to Google Calendar](https://calendar.google.com/calendar/render?cid=https%3A%2F%2Fcalendar.srkirkland.dev%2Fhcotf-schedule.ics)

## Outlook (Microsoft 365 / Outlook on the web)

1. Open Outlook on the web and go to **Calendar**.
2. Select **Add calendar**.
3. Choose **Subscribe from web** (wording may vary).
4. Paste the feed URL.
5. (Optional) Name it and choose a color.
6. Select **Import** / **Add** / **Save**.

## Other Calendar Apps

Most calendar apps support subscribing to an iCal feed. Look for an option like **Add calendar by URL**, **Subscribe to calendar**, or **Internet calendar**, then paste the feed URL.

## Important: Subscribe, don’t import

Avoid downloading the `.ics` file and opening it. That typically creates a **one-time import** (a snapshot) instead of a subscription that stays in sync.

If your browser immediately downloads a file when you open the URL, use the **manual subscribe** steps above and paste the feed URL into your calendar app.

## How Fast Do Updates Appear?

Subscribed calendars refresh on a schedule controlled by the calendar app/provider:

- Some apps update quickly.
- Some subscriptions (especially Google and Outlook) can take hours to show changes.

If something looks missing right after an update, check again later (or use a manual refresh option if your app supports it).

## Troubleshooting

- **No updates?** Confirm you added the calendar as a **subscription** (not an imported file), then give it time to refresh.
- **Duplicate events?** Remove any one-time imported copy of the calendar and keep only the subscribed version.
- **Nothing shows up at all?** Double-check the feed URL and try adding it again.
