import './globals.css'

import type { Metadata } from 'next'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import { Footer, Layout, Navbar } from 'nextra-theme-docs'

import { NextraSearchDialog } from '@/components/nextra-search-dialog'
import { getPagesFromPageMap } from '@/lib/getPagesFromPageMap'

export const metadata: Metadata = {
  // Define your metadata here
  // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
}

// const banner = <Banner storageKey="some-key">This template was created with 🩸 and 💦 by <Link href="https://github.com/phucbm">PHUCBM</Link> 🐧</Banner>
const navbar = (
  <Navbar
    projectLink='https://github.com/dataxpdtn/mui-json-viewer'
    logo={'@dataxpdtn/mui-json-viewer'}
  />
)
const footer = <Footer>MIT {new Date().getFullYear()} © Hendrik Luecke-Tieke.</Footer>

export default async function RootLayout ({ children }) {
  const pageMap = await getPageMap()
  const pages = await getPagesFromPageMap({
    pageMapArray: pageMap
    // modify page data if needed
    // filterItem: async (item) => {
    //     return {
    //         ...item,
    //     };
    // }
  })

  return (
    <html
            // Not required, but good for SEO
      lang='en'
            // Required to be set
      dir='ltr'
            // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head>
        <link rel='shortcut icon' href='/images/general/icon.svg' />
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
            // banner={banner}
          navbar={navbar}
          pageMap={pageMap}
          docsRepositoryBase='https://github.com/dataxpdtn/mui-json-viewer/tree/main'
          footer={footer}
          search={<NextraSearchDialog pages={pages} />}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
