import Button from '@mui/material/Button'
import Head from 'next/head'
import Link from 'next/link'
import AdminPanel from 'src/layouts/AdminPanel'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="OSS Links" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AdminPanel>
        <Link href={"/admin/page-edit"}>
          <Button variant='outlined'>Page Edit</Button>
        </Link>
      </AdminPanel>
    </>
  )
}
