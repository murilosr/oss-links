import React from 'react'
import Button from '@mui/material/Button'
import Head from 'next/head'
import Link from 'next/link'
import AdminPanel from 'src/layouts/AdminPanel'
import { AuthContext, AuthProvider } from 'src/contexts/AuthProvider'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

const TmpAuthModule: React.FC = () => {

  const { isLoggedIn, login, logout } = React.useContext(AuthContext);
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");
  const [isLoggingIn, setIsLoggingIn] = React.useState(false);

  const clearInputs = () => {
    setUsername("");
    setPassword("");
  }

  const executeLogin = async (event: React.MouseEvent) => {
    setIsLoggingIn(true);
    try{
      const response = await login(username, password);
      if (response.errorMessage !== undefined) {
        setErrorMessage(response.errorMessage);
        return;
      }
      clearInputs();
    }
    finally{
      setIsLoggingIn(false);
    }
  }

  return isLoggedIn() ? (
    <Button variant='outlined' onClick={() => logout()}> Logout</Button>
  ) : (
    <div className='flex flex-col my-4'>
      <div className='flex my-2 space-x-2'>
        <TextField placeholder='Username' disabled={isLoggingIn} value={username} onChange={(e) => setUsername(e.target.value)} />
        <TextField placeholder='Password' disabled={isLoggingIn} value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <Button disabled={isLoggingIn} variant='outlined' onClick={executeLogin}> Login </Button>
      <Typography className='flex justify-center my-2' variant='body2'>{errorMessage}</Typography>
    </div>
  )
}

export default function Home() {

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
          <Link href={"/admin/page-edit"}>
            <Button variant='outlined'>Page Edit</Button>
          </Link>

          <TmpAuthModule />

        </AdminPanel>
      </AuthProvider>
    </>
  )
}
