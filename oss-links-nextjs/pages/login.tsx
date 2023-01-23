import Head from 'next/head'
import LoginForm from 'src/components/LoginForm'
import { AuthProvider } from 'src/contexts/AuthProvider'
import AdminPanel from 'src/layouts/AdminPanel'

export default function Login() {

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="OSS Links" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AuthProvider>
        <AdminPanel>
          <LoginForm />
        </AdminPanel>
      </AuthProvider>
    </>
  )
}
