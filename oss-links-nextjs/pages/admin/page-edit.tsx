import Head from 'next/head'
import BlockManagerWidget from 'src/components/BlockManagerWidget'
import MobilePreviewWidget from 'src/components/MobilePreviewWidget'
import AdminPanel from 'src/layouts/AdminPanel'
import { PageBlocksProvider } from 'src/contexts/PageBlocksProvider'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="OSS Links" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageBlocksProvider>
        <AdminPanel>
          <BlockManagerWidget />
          <MobilePreviewWidget />
        </AdminPanel>
      </PageBlocksProvider>
    </>
  )
}
