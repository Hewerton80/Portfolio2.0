const UTSLocales = require('./UTSLocales.json')

const codeLocales = Object.keys(UTSLocales)

/** @type {import('next').NextConfig} */
module.exports = {
  webpack5: true,
  i18n: {
    locales: codeLocales,
    defaultLocale: codeLocales[0],
  },
  pageExtensions: ['tsx'],
  async redirects() {
    return [
      { source: '/home', destination: '/', permanent: true },
      { source: '/login', destination: '/', permanent: true },
    ]
  },
}
