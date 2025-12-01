import nextra from 'nextra'

const withNextra = nextra({
  search: true,
  defaultShowCopyCode: true,
  contentDirBasePath: '/docs'
})

export default withNextra({
  reactStrictMode: true,
  images: {
    remotePatterns: [{ hostname: 'i.imgur.com' }, { hostname: 'www.netlify.com' }]
  },
  transpilePackages: ['@helt/mui-json-viewer'],
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/docs'
      }
    ]
  }

  // ... Other Next.js config options
  // output: 'export'
})
