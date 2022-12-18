import React from 'react';
import Menu from '@mui/material/Menu'
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MenuItem from '@mui/material/MenuItem';

export default function EditBlockMenu() {

    const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
    const menuIsOpen = Boolean(anchorEl);

    const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    }

    const handleCloseMenu = () => {
        setAnchorEl(null);
    }

    return (
        <>
            <IconButton
                id='menu-open-button'
                onClick={handleOpenMenu}
                aria-controls={menuIsOpen ? 'menu-edit-block' : undefined}
                aria-haspopup="true"
                aria-expanded={menuIsOpen ? 'true' : undefined}
                size='small'
            >
                <MoreVertIcon className='' />
            </IconButton>
            <Menu
                id='menu-edit-block'
                anchorEl={anchorEl}
                open={menuIsOpen}
                onClose={handleCloseMenu}
                MenuListProps={{
                    'aria-labelledby': 'menu-open-button',
                }}
            >
                <MenuItem onClick={handleCloseMenu}>Edit properties</MenuItem>
                <MenuItem onClick={handleCloseMenu}>Duplicate</MenuItem>
                <MenuItem className="text-red-500" onClick={handleCloseMenu}>
                    <span className='font-bold'>Delete</span>
                </MenuItem>
            </Menu>
        </>

    );
}