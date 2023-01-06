import React from 'react';

import Head from 'next/head';

export default function Preview() {

    const [payloadData, setPayloadData] = React.useState<string>("");

    React.useEffect(() => {
        let payload : any = (new URLSearchParams(window.location.search)).get("payload");
        let tmpPayloadData = "";
        if(payload === null){
            tmpPayloadData = JSON.stringify({label: 'Testando', url: 'https://google.com'}, null, 2);
        }else{
            tmpPayloadData = (JSON.stringify(JSON.parse(atob(payload)),null,2));
        }

        tmpPayloadData = "Data:<br />" + tmpPayloadData.replaceAll('\n','<br />');
        setPayloadData(tmpPayloadData);
    }, []);

    return (
        <>
            <Head>
                <title></title>
                <meta name="description" content="OSS Links Preview" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className='w-full h-screen bg-black text-white flex flex-col items-center justify-center p-2'>
                <h1 className='text-2xl'>Preview page</h1>
                <pre className='w-full break-words whitespace-pre-wrap' dangerouslySetInnerHTML={{__html: payloadData}} />
            </div>
        </>
    )
}
