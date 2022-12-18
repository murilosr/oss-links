import React from 'react';

interface ElementSize {
    width: number
    height: number
}

export default function MobilePreviewWidget() {

    const smartphoneContainerRef = React.useRef<HTMLDivElement | null>(null);
    const [containerScale, setContainerScale] = React.useState("1.0");

    React.useEffect(() => {

        const getElementSize = (el : HTMLElement) => {

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

        if(window !== null){

            window.addEventListener('resize', () => {

                var element = smartphoneContainerRef.current;
                if(!element) return;

                const elementSize = getElementSize(element);

                setContainerScale( (elementSize.height / 942.0).toString() );
                console.log(elementSize);
            });

            var element = smartphoneContainerRef.current;
            if(!element) return;

            const elementSize = getElementSize(element);

            setContainerScale( (elementSize.height / 942.0).toString() );
        }
    }, []);

    return (
        <>
            <div className="absolute bg-white right-0 top-0 justify-end
                            w-full
                            h-vh
                            main-size
                            md:border md:w-[450px]"
            >
                <div className='flex bg-white h-full w-full items-center justify-center py-8'
                    ref={smartphoneContainerRef}
                >
                    <div className='flex flex-col border-8 border-black rounded-[48px] w-[390px] box-content items-center grow-0 shrink-0' style={{ scale: containerScale }}>
                        <div className='w-full h-[47px] bg-black relative flex justify-center box-border shrink-0 grow-0'>
                            <div className='w-[190px] h-[24px] bg-gray-400 rounded-b-xl inline-block absolute top-0 z-10 shrink-0 grow-0' />
                        </div>
                        <iframe src='https://mf.thorson.tech' className='w-full h-[845px] shrink-0 grow-0' />
                        <div className='w-full h-[34px] bg-black shrink-0 grow-0' />
                    </div>
                </div>
            </div>
        </>
    );
}