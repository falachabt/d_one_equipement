<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into D-ONE EQUIPMENT. Here is a summary of all changes made:

**New files created:**
- `instrumentation-client.ts` — initializes posthog-js on the client side (Next.js 15.3+ pattern) with reverse-proxy routing, exception capture, and debug mode in development.
- `src/lib/posthog-server.ts` — singleton PostHog Node.js client for server-side event capture.
- `src/components/fleet-item-tracker.tsx` — client components for tracking fleet page views and PDF spec downloads.
- `src/components/contact-links.tsx` — client component wrapping contact method links and WhatsApp CTA with click tracking.

**Modified files:**
- `next.config.ts` — added PostHog reverse-proxy rewrites (`/ingest/*`) and `skipTrailingSlashRedirect: true`.
- `.env.local` — added `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN` and `NEXT_PUBLIC_POSTHOG_HOST`.
- `src/components/quote-form.tsx` — added `quote_form_submitted`, `quote_form_succeeded`, `quote_form_failed` capture calls; forwards PostHog distinct ID and session ID headers to the API.
- `src/components/whatsapp-button.tsx` — converted to client component; added `whatsapp_clicked` capture.
- `src/app/flotte/[slug]/page.tsx` — integrated `FleetItemTracker` and `SpecDownloadButton` components.
- `src/app/contact/page.tsx` — replaced inline contact items with `ContactLinks` component.
- `src/app/api/quote/route.ts` — added server-side `quote_received` and `quote_email_sent` events; reads client distinct ID and session ID from `X-POSTHOG-DISTINCT-ID` / `X-POSTHOG-SESSION-ID` headers for client–server session correlation.

---

## Tracked events

| Event | Description | File |
|---|---|---|
| `quote_form_submitted` | User clicked the submit button on the quote request form | `src/components/quote-form.tsx` |
| `quote_form_succeeded` | Quote form submitted successfully; user received confirmation | `src/components/quote-form.tsx` |
| `quote_form_failed` | Quote form submission failed (API error or network failure) | `src/components/quote-form.tsx` |
| `whatsapp_clicked` | User clicked a WhatsApp button (floating button or contact page CTA) | `src/components/whatsapp-button.tsx`, `src/components/contact-links.tsx` |
| `fleet_item_viewed` | User viewed a specific equipment detail page (top of conversion funnel) | `src/components/fleet-item-tracker.tsx` |
| `pdf_spec_downloaded` | User clicked to download the PDF spec sheet for an equipment item | `src/components/fleet-item-tracker.tsx` |
| `contact_info_clicked` | User clicked a contact method (phone, email, or map link) | `src/components/contact-links.tsx` |
| `quote_received` | Server received a valid quote request (server-side) | `src/app/api/quote/route.ts` |
| `quote_email_sent` | Server successfully sent the quote notification email via Resend (server-side) | `src/app/api/quote/route.ts` |

---

## Next steps

We've built a dashboard and five insights for you to keep an eye on user behavior, based on the events we just instrumented:

- [Analytics basics dashboard](/dashboard/1556731)
- [Quote Request Conversion Funnel](/insights/fMxjDxwT) — 3-step funnel: fleet item viewed → form submitted → quote succeeded
- [Quote Requests Over Time](/insights/hXQy5D18) — daily trend of quotes received and emails sent (server-side)
- [Quote Form Success Rate](/insights/ztwz95wW) — percentage of form submissions that succeed
- [WhatsApp Engagement](/insights/tDa6OpgP) — unique daily users clicking WhatsApp, broken down by source
- [Most Viewed Fleet Equipment](/insights/UdoM5AKK) — equipment pages ranked by view count

### Agent skill

We've left an agent skill folder in your project at `.claude/skills/integration-nextjs-app-router/`. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
