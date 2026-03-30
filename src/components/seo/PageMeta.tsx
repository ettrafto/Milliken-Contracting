import { Helmet } from 'react-helmet-async';
import { getSiteUrl } from '../../seo/siteUrl';

interface PageMetaProps {
  title: string;
  description: string;
  /** Pathname including leading slash, e.g. `/` or `/projects/foo` */
  path: string;
  /** When true, ask crawlers not to index (e.g. soft 404) */
  noindex?: boolean;
}

export function PageMeta({ title, description, path, noindex }: PageMetaProps) {
  const base = getSiteUrl();
  const normalized = path.startsWith('/') ? path : `/${path}`;
  const canonical = `${base}${normalized}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      {noindex ? <meta name="robots" content="noindex, follow" /> : null}
    </Helmet>
  );
}
