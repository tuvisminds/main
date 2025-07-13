export function getImagePath(src: string): string {
  const basePath = process.env.NODE_ENV === 'production' ? '' : '';
  return `${basePath}${src}`;
}