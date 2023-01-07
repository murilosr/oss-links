import React from 'react';
import RenderBlockWidget from 'src/components/RenderBlockWidget';
import { PageBlocksContext, PageBlocksProvider } from 'src/contexts/PageBlocksProvider';

export default function PreviewPageLayout() {

    const [payloadJson, setPayloadJson] = React.useState<string>("");
    const { blocks, setBlocks } = React.useContext(PageBlocksContext);

    React.useEffect(() => {
        let payload: any = (new URLSearchParams(window.location.search)).get("payload");
        let payloadData = JSON.parse(decodeURIComponent(atob(payload)));

        setPayloadJson(JSON.stringify(payloadData, null, 2));
        setBlocks(payloadData['blocks']);
    }, []);

    return (
        <>
            <div className='w-full h-screen bg-black text-white flex flex-col items-center justify-center p-2 overflow-x-hidden overflow-y-auto'>
                <RenderBlockWidget />
                <div className='flex flex-col h-1/4'>
                    <a className="shrink-0" href="#" target="_blank">
                        <h1 className='text-2xl text-center'>Preview page</h1>
                    </a>
                    <pre className='w-full break-words whitespace-pre-wrap overflow-y-auto' dangerouslySetInnerHTML={{ __html: payloadJson }} />
                </div>
            </div>
        </>
    );
}