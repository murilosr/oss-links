import React from 'react';

import TextField from '@mui/material/TextField';
import EditBlock from 'src/components/EditBlock';
import { IEditBlockTypes, IEditLinkBlock } from 'src/types';
import LinkIcon from '@mui/icons-material/Link';

export default function EditLinkBlock(props : {
    data : IEditLinkBlock,
    updateBlock : (block : IEditBlockTypes) => void
}){

    const {data, updateBlock} = props;

    const labelOnChangeHandler : React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (event) => {
        updateBlock({
            ...data,
            label: event.currentTarget.value
        })
    }

    const urlOnChangeHandler : React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (event) => {
        updateBlock({
            ...data,
            url: event.currentTarget.value
        })
    }

    return(
        <EditBlock icon={<LinkIcon />} id={data.id}>
            <div className='flex grow mx-2 my-2'>
                <TextField
                    label="Link text"
                    size='small'
                    variant='standard'
                    className='w-full'
                    onChange={labelOnChangeHandler}
                    value={data.label}
                />
            </div>
            <div className='flex grow mx-2 my-2'>
                <TextField
                    label="URL"
                    size='small'
                    variant='standard'
                    className='w-full'
                    onChange={urlOnChangeHandler}
                    value={data.url}
                />
            </div>
        </EditBlock>
    );
}