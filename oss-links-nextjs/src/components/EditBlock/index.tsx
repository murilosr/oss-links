import React from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import LinkIcon from '@mui/icons-material/Link';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import IconButton from '@mui/material/IconButton';
import EditBlockMenu from './EditBlockMenu';

export default function EditBlock() {
    return (
        <div className='flex flex-col bg-white border md:rounded-md
                        pb-4 px-2 shrink-0 grow-0
                        shadow-md'>
            <div className='flex justify-center cursor-grab text-gray-400'>
                <MoreHorizIcon />
            </div>
            <div className='flex items-center grow font-bold'>
                {/* <IconButton size='small'> */}
                    <LinkIcon className="ml-1.5" />
                {/* </IconButton> */}
                <div className='ml-auto'>
                    <Switch
                        value="on"
                        checked={true}
                        onChange={() => null}
                        inputProps={{ "aria-label": '' }}
                        size="small"
                    />
                    <EditBlockMenu />
                </div>
            </div>
            <div className='flex grow mx-2 my-2'>
                <TextField
                    label="Link text"
                    size='small'
                    variant='standard'
                    className='w-full'
                />
            </div>
            <div className='flex grow mx-2 my-2'>
                <TextField
                    label="URL"
                    size='small'
                    variant='standard'
                    className='w-full'
                />
            </div>
        </div>
    );
}