module.exports = {
  ci: {
    collect: {
      url: ['http://localhost/de/index.html'],
      staticDistDir: 'public',
    },
    assert: {
      preset: 'lighthouse:recommended',
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
}
