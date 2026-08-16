/** @type {import('next').NextConfig} */
const nextConfig = {
  // Statischer Export: jede Seite wird beim Build zu echtem HTML vorgerechnet.
  // Das ist der Grund fuer die Framework-Wahl -- lokales SEO braucht fertiges Markup.
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};
export default nextConfig;
