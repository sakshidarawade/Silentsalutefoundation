export default function robots() {
  const base = 'https://example.com';
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
    ],
    sitemap: `${base}/sitemap.xml`,
  };
}