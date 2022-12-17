import React from 'react'

import Box from '@mui/material/Box'
import MUIAppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import { MenuItem, Button, Avatar } from '@mui/material'
import Link from 'next/link'


export default function AppBar() {

    const [anchorElMenu, setAnchorElMenu] = React.useState<null | HTMLElement>(null);
    const isOpen = Boolean(anchorElMenu);
    const openMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorElMenu(event.currentTarget);
    }
    const closeMenu = () => {
        setAnchorElMenu(null);
    }

    return (
        <MUIAppBar position="fixed" color="primary">
            <Toolbar>
                <Box className="flex w-full">
                    <Link className='flex flex-col justify-center' href={"/"}>
                        <Typography variant="h5">
                            OSS Links
                        </Typography>
                    </Link>
                    <Button
                        startIcon={(<Avatar sx={{width: 32, height: 32}}/>)} className="ml-auto border-none py-2 flex"
                        variant="outlined" color="inherit"
                        onClick={openMenu}>
                        Login
                    </Button>
                    <Menu id="appbar-menu" anchorEl={anchorElMenu} open={isOpen} onClose={closeMenu}
                        className="w-full"
                        anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "right",
                        }}
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "right",
                        }}>
                        <MenuItem>Login</MenuItem>
                        <MenuItem>Sign up</MenuItem>
                    </Menu>
                </Box>
            </Toolbar>
        </MUIAppBar>
    )
}
