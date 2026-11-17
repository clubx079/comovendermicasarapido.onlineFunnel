# Vender mi casa rápido

**comovendermicasarapido.online** · Guías para vender una propiedad en Paraguay cuando el caso es difícil: sucesiones, embargos, varios dueños, casas sin terminar y ventas con apuro.

Reader: propietarios que tienen que vender en una situación difícil: herencia, deudas, varios dueños, viaje o separación. A lead form on every guide; after sending, the visitor goes on to Casa-Libre to publish for free.

## Run it

```
npm install
npm run build
npm run local      # http://localhost:3052
```

`npm start` uses the platform's PORT. Only the real domain is indexable: any other host gets
`X-Robots-Tag: noindex` and a closed robots.txt (middleware.js, app/robots.txt).

## Where things are

- `lib/site.js`: name, domain, tagline, tracking keys, the "Contenido revisado" date.
- `content/pages/`: one file per guide (`home.js` = the home page).
- `lib/data/`: the order and groups of the guides, the glossary, the "Cómo escribimos" text.
- `components/Article.js`: the page (answer in brief, key points, lead form, byline, contents, sections, Q&A, sources, cite).
- `components/Shell.js`: edition strip, masthead, menu, footer. `app/globals.css`: styles.
- `app/robots.txt`, `app/sitemap.xml`, `app/llms.txt`.

## Tracking

- Every Casa-Libre link: `utm_source=comovendermicasarapidoonline`, `utm_medium=funnel`, `utm_campaign=seo-<country>`, `utm_content=<page slug or spot>`.
- PostHog (same project as Casa-Libre; key from env `POSTHOG_KEY`, optional `POSTHOG_HOST`, read at request time by /api/analytics-config/): `funnel_site=owners2`, `funnel_country`, `funnel_page`, `funnel_domain=comovendermicasarapido.online`. Nothing is sent from localhost or without POSTHOG_KEY.
- Leads: `/api/lead` saves to the country's `funnel_leads` table (env `AIROBASE_URL_<CC>`, `AIROBASE_SECRET_KEY_<CC>`) with `site='owners2'`, else to `data/leads.jsonl`. Run `migrations/001_funnel_leads_owners2.sql` so the table accepts this site key.

## Checks

```
npm run check                                   # the built pages: links, UTM tags, form rule
npm run check:sitemap                           # with npm run local running: sitemap, robots.txt, llms.txt (every URL 200)
node scripts/check-content.mjs                  # the guides: language, links, structure
python scripts/autocomplete.py py "frase"       # what people in this country type into Google
```

## Rules

- Headlines are the phrases locals type; copy in the country's voice.
- Every outside link goes to Casa-Libre; no other site or company is named.
- Use every natural opportunity to link to Casa-Libre (card, body, "why Casa-Libre" section); the check caps a page at 22.
