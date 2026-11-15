// This site. Everything that makes it this site and not another lives here and in lib/data/.
// kind: 'owners' (lead form, then Casa-Libre's publishing flow) | 'agents' | 'library' (no form, straight to Casa-Libre).
export const SITE = {
  "domain": "comovendermicasarapido.online",
  "kind": "owners",
  "funnelSite": "owners2",
  "medium": "funnel",
  "name": "Vender mi casa rápido",
  "nameNote": "casos difíciles",
  "rootCountry": "py",
  "countries": [
    "py"
  ],
  "tagline": {
    "py": "Qué hacer cuando tenés que vender ya: herencias, deudas, varios dueños y apuros"
  },
  "reader": "propietarios que tienen que vender en una situación difícil: herencia, deudas, varios dueños, viaje o separación",
  "description": "Guías para vender una propiedad en Paraguay cuando el caso es difícil: sucesiones, embargos, varios dueños, casas sin terminar y ventas con apuro.",
  "cta": {
    "voseo": "Publicá gratis"
  },
  "ctaPath": "/publicar",
  "recordCta": {
    "voseo": "Publicá tu propiedad gratis"
  },
  "recordWhat": "Marketplace inmobiliario: propietarios, agentes e inmobiliarias publican gratis"
};

// "Contenido revisado": the date of the last editorial pass over the guides. Set it to the day the native
// reviewer signs off.
export const REVIEWED = '2026-11-16';

// The line under the byline: 'visible' = shown on every guide; 'quiet' = only on "Cómo escribimos" and in the footer.
export const TRANSPARENCY = 'visible';

export const siteUrl = () => `https://${SITE.domain}`;
/** utm_source on every Casa-Libre link: the domain without dots. */
export const utmSource = () => SITE.domain.replace(/\./g, '');
/** True only on the real domain: pages there may be indexed; every other host is noindex. */
export const isProductionHost = (host) => String(host || '').toLowerCase().replace(/^www\./, '').replace(/:\d+$/, '') === SITE.domain;
