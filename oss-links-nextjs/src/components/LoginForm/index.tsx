import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from 'next/link';

export default function LoginForm() {
    return (
        <div className='flex flex-col px-6 py-6 items-center
                        border rounded-md w-full sm:w-[400px] bg-white'>

            <div className='flex justify-center mb-6'>
                <AccountCircleIcon className='text-7xl text-indigo-900' />
            </div>

            <form className='flex flex-col items-center w-full'>
                <TextField className="w-full mb-2" label="Email" variant="outlined" autoFocus={true}/>
                <TextField className="w-full mb-6" label="Password" variant="outlined" type="password" />
                <Button className='px-8 mb-6' variant='contained'>Login</Button>
            </form>

            <Link href={"/"}>
                <Button variant='text'>Create an account</Button>
            </Link>

        </div>
    );
}