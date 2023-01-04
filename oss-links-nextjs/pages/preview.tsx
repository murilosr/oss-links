import React from 'react';

import Head from 'next/head';

export default function Preview() {

    const [payloadData, setPayloadData] = React.useState<any>(null);

    React.useEffect(() => {
        let payload : any = (new URLSearchParams(window.location.search)).get("payload");
        if(payload === null){
            setPayloadData(JSON.stringify({label: 'Testando', url: 'https://google.com'}));
        }else{
            setPayloadData(atob(payload));
        }
    }, []);

    return (
        <>
            <Head>
                <title></title>
                <meta name="description" content="OSS Links Preview" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className='w-full h-screen bg-black text-white flex flex-col items-center justify-center'>
                <h1 className='text-2xl'>Preview page</h1>
                <span>Data: {payloadData}</span>
            </div>
        </>
    )
}
