module.exports = {
  pathPrefix: '',
  siteUrl: 'https://nimritee.com',
  siteTitle: 'Nimritee Sirsalewala',
  siteDescription: 'Logbook of a software developer',
  author: 'Nimritee',
  postsForArchivePage: 3,
  defaultLanguage: 'en',
  disqusScript: process.env.DISQUS_SCRIPT || 'https://rolwinreevan.disqus.com/embed.js',
  pages: {
    home: '/',
    blog: 'blog',
    project: '/',
  },
  social: {
    github: 'https://github.com/nimritee',
    linkedin: 'https://www.linkedin.com/in/nimritee/',
    facebook: 'https://www.facebook.com/nimritee',
    twitter: 'https://twitter.com/nimritee',
    instagram: 'https://www.instagram.com/nimritee/',
    rss: '/rss.xml',
  },
  googleAnalyticTrackingId: process.env.GA_TRACKING_ID || '',
};
