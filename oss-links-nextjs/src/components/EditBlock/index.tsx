import React from 'react';

import LinkIcon from '@mui/icons-material/Link';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Switch from '@mui/material/Switch';
import EditBlockMenu from './EditBlockMenu';
import { PageBlocksContext } from "src/contexts/PageBlocksProvider";
import { IconProps } from '@mui/material/Icon/Icon';
import { OverridableComponent } from '@mui/material/OverridableComponent';

export default function EditBlock(props: React.PropsWithChildren & {
    id: string,
    icon: React.ReactElement
}) {

    const { removeBlock } = React.useContext(PageBlocksContext);

    const removeBlockHandler = () => removeBlock(props.id);

    return (
        <div className='flex flex-col bg-white border md:rounded-md
                        pb-4 px-2 shrink-0 grow-0
                        shadow-md'>
            <div className='flex justify-center cursor-grab text-gray-400'>
                <MoreHorizIcon />
            </div>
            <div className='flex items-center grow font-bold'>
                {/* <IconButton size='small'> */}
                {/* <LinkIcon className="ml-1.5" /> */}
                <div className='p-[5px] w-[24] h-[24] text-gray-600'>{props.icon}</div>
                {/* </IconButton> */}
                <div className='ml-auto'>
                    <Switch
                        value="on"
                        checked={true}
                        onChange={() => null}
                        inputProps={{ "aria-label": '' }}
                        size="small"
                    />
                    <EditBlockMenu
                        removeBlockCallback={removeBlockHandler}
                    />
                </div>
            </div>

            {props.children}
        </div>
    );
}