import React from 'react';

import CircularProgress from '@mui/material/CircularProgress';
import { PageBlocksContext } from 'src/contexts/PageBlocksProvider';

interface ElementSize {
    width: number
    height: number
}

export default function MobilePreviewWidget() {

    const smartphoneContainerRef = React.useRef<HTMLDivElement | null>(null);
    const [containerScale, setContainerScale] = React.useState("1.0");
    const [previewReady, setPreviewReady] = React.useState(false);

    React.useEffect(() => {
        if (window !== null) {

            const getElementSize = (el: HTMLElement) => {

                var cs = getComputedStyle(el);

                var paddingX = parseFloat(cs.paddingLeft) + parseFloat(cs.paddingRight);
                var paddingY = parseFloat(cs.paddingTop) + parseFloat(cs.paddingBottom);

                var borderX = parseFloat(cs.borderLeftWidth) + parseFloat(cs.borderRightWidth);
                var borderY = parseFloat(cs.borderTopWidth) + parseFloat(cs.borderBottomWidth);

                // Element width and height minus padding and border
                var elementWidth = el.offsetWidth - paddingX - borderX;
                var elementHeight = el.offsetHeight - paddingY - borderY;

                return {
                    width: elementWidth,
                    height: elementHeight
                } as ElementSize

            }

            const rescalePreviewContainer = () => {
                var element = smartphoneContainerRef.current;
                if (!element) return;

                const elementSize = getElementSize(element);

                const hScale = (elementSize.height / 942.0);
                const vScale = (elementSize.height / 942.0);

                const finalScale = Math.min(hScale, vScale).toString();

                setContainerScale(finalScale);
                setPreviewReady(true);
            }

            window.addEventListener('resize', rescalePreviewContainer);
            window.dispatchEvent(new Event('resize'));
            return () => window.removeEventListener('resize', rescalePreviewContainer);

        }
    }, []);

    const {blocks} = React.useContext(PageBlocksContext);

    // TODO: transform the result with the actual object's data
    const payloadB64 = Buffer.from(encodeURIComponent(JSON.stringify({ blocks }))).toString("base64");

    return (
        <>
            <div className="bg-white justify-end
                            w-full
                            h-full
                            hidden
                            md:block
                            md:static md:pt-0 md:w-1/2
                            xl:w-[450px] xl:fixed xl:ml-[900px] xl:py-8
                            "
            >
                <div className={`flex bg-white h-full w-full items-center justify-center py-8`}
                    ref={smartphoneContainerRef}
                >
                    {previewReady ?
                        /* The mobile rendered */
                        (
                            <div className={`flex flex-col border-8 border-black rounded-[48px] w-[390px] box-content items-center grow-0 shrink-0 ${!previewReady ? 'hidden' : ''}`} style={{ scale: containerScale }}>
                                <div className='w-full h-[47px] bg-black relative flex justify-center box-border shrink-0 grow-0'>
                                    <div className='w-[190px] h-[24px] bg-gray-400 rounded-b-xl inline-block absolute top-0 z-10 shrink-0 grow-0' />
                                </div>
                                <iframe src={`/preview?payload=${payloadB64}`} className='w-full h-[845px] shrink-0 grow-0' />
                                <div className='w-full h-[34px] bg-black shrink-0 grow-0' />
                            </div>
                        ):
                        /* The spinner (CircularProgress) showing that the component is not ready yet; */
                        (
                            <div className='flex flex-col w-[390px] box-content items-center grow-0 shrink-0'>
                                <CircularProgress />
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    );
}