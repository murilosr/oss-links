import React from 'react';

import Head from 'next/head';
import RenderBlockWidget from 'src/components/RenderBlockWidget';
import { PageBlocksContext, PageBlocksProvider } from 'src/contexts/PageBlocksProvider';
import PreviewPageLayout from 'src/layouts/PreviewPage';

export default function Preview() {

    return (
        <>
            <Head>
                <title></title>
                <meta name="description" content="OSS Links Preview" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <PageBlocksProvider>
                <PreviewPageLayout />
            </PageBlocksProvider>
        </>
    )
}
