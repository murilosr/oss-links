import AddIcon from '@mui/icons-material/Add'
import Button from '@mui/material/Button'
import Head from 'next/head'
import AppBar from 'src/components/AppBar'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="OSS Links" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <AppBar />
      </header>

      <main className="main-size flex flex-col items-center justify-center">
        <h1 className='text-6xl mb-4'>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <div className='border border-black/20 p-2 mb-2'>
          Tailwind CSS installed!
        </div>

        <div>
          <Button variant='contained' startIcon={(<AddIcon />)}>Material UI 5 installed!</Button>
        </div>

      </main>
    </>
  )
}
