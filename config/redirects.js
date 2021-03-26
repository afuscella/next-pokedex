module.exports = [
  {
    source: '/pokemon/:slug/(.+)/',
    destination: '/pokemon/:slug/',
    permanent: true,
  },
];
