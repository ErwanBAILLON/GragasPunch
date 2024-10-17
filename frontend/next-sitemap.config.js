/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://grasapunch.live', // Site web
    generateRobotsTxt: true, // Génère un fichier robots.txt
    exclude: ['/admin/*'], // Exclure certaines routes si besoin
    changefreq: 'daily', // Fréquence de mise à jour des pages
    priority: 0.7, // Priorité des pages
  };