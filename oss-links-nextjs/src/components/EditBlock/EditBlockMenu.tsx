import React from 'react';
import Menu from '@mui/material/Menu'
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuList from '@mui/material/MenuList';

export default function EditBlockMenu(props: {removeBlockCallback: () => void}) {

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
                <MenuList>
                    <MenuItem onClick={handleCloseMenu}>
                        <ListItemIcon>
                            <EditIcon fontSize='small' />
                        </ListItemIcon>
                        <ListItemText>Edit properties</ListItemText>
                    </MenuItem>
                    <MenuItem onClick={handleCloseMenu}>
                        <ListItemIcon>
                            <FileCopyIcon fontSize='small' />
                        </ListItemIcon>
                        <ListItemText>Duplicate</ListItemText>
                    </MenuItem>
                    <MenuItem className="text-red-500 font-bold align-middle" onClick={() => {props.removeBlockCallback(); handleCloseMenu()}}>
                        <ListItemIcon>
                            <DeleteIcon className="text-red-500" fontSize='small' />
                        </ListItemIcon>
                        <ListItemText>Delete</ListItemText>
                    </MenuItem>
                </MenuList>
            </Menu>
        </>

    );
}