export default function sitemap() {
  const base = 'https://example.com';
  return [
    { url: `${base}/`, lastModified: new Date(), priority: 1.0 },
    { url: `${base}/about`, lastModified: new Date(), priority: 0.8 },
    { url: `${base}/donate`, lastModified: new Date(), priority: 0.8 },
    { url: `${base}/causes/education`, lastModified: new Date(), priority: 0.8 },
    { url: `${base}/causes/healthcare`, lastModified: new Date(), priority: 0.8 },
    { url: `${base}/impact`, lastModified: new Date(), priority: 0.7 },
    { url: `${base}/gallery`, lastModified: new Date(), priority: 0.6 },
    { url: `${base}/contact`, lastModified: new Date(), priority: 0.7 },
  ];
}