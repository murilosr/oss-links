import Head from 'next/head'
import BlockManagerWidget from 'src/components/BlockManagerWidget'
import AdminPanel from 'src/layouts/AdminPanel'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="OSS Links" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AdminPanel>
        <BlockManagerWidget />
      </AdminPanel>
    </>
  )
}
