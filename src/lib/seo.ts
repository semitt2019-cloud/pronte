import type { Pkg } from '../data/ais';
import { SITE } from '../config';

export function faqSchema(items: [string, string][]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(([q, a]) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };
}

export function offersSchema(name: string, items: Pkg[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    itemListElement: items.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Product',
        name: `เน็ต AIS ${p.net} ${p.mbps < 1 ? p.mbps * 1000 + ' Kbps' : p.mbps + ' Mbps'} ไม่อั้น ${p.days} วัน`,
        brand: { '@type': 'Brand', name: 'AIS' },
        offers: { '@type': 'Offer', price: p.price, priceCurrency: 'THB', availability: 'https://schema.org/InStock' },
      },
    })),
  };
}

export function breadcrumb(pairs: [string, string][]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: pairs.map(([name, path], i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name,
      item: new URL(path, SITE.url).href,
    })),
  };
}
