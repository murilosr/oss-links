import React from 'react';
import { IEditLinkBlock } from 'src/types';

export default function RenderLinkBlock(props: { data: IEditLinkBlock }) {

    const { data } = props;

    return (
        <a className='w-full' href={data.url} target="_blank" rel="noreferrer">
            <div className='flex justify-center border w-full py-2 px-4 min-h-[42px] text-center break-all'>
                {data.label}
            </div>
        </a>
    );
}