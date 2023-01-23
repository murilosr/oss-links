import React from 'react'

import Box from '@mui/material/Box'
import MUIAppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'
import Link from 'next/link'


const AppBar = () => {

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
                    {React.useMemo(() => (<Link className='flex flex-col justify-center' href={"/"}>
                        <Typography variant="h5">
                            OSS Links
                        </Typography>
                    </Link>), [])}
                    <Button
                        startIcon={(<Avatar sx={{ width: 32, height: 32 }} />)} className="ml-auto border-none py-2 flex"
                        variant="outlined" color="inherit"
                        onClick={openMenu}>
                        Login
                    </Button>
                    <Menu id="appbar-menu" anchorEl={anchorElMenu} open={isOpen} onClose={closeMenu}
                        PaperProps={{
                            elevation: 0,
                            sx: {
                                overflow: 'visible',
                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                mt: 1.5,
                                '& .MuiAvatar-root': {
                                    width: 32,
                                    height: 32,
                                    ml: -0.5,
                                    mr: 1,
                                },
                                '&:before': {
                                    content: '""',
                                    display: 'block',
                                    position: 'absolute',
                                    top: 0,
                                    right: 14,
                                    width: 10,
                                    height: 10,
                                    bgcolor: 'background.paper',
                                    transform: 'translateY(-50%) rotate(45deg)',
                                    zIndex: 0,
                                },
                            },
                        }}
                        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                        >
                        <Link href="/login"><MenuItem>Login</MenuItem></Link>
                        <Link href="/login"><MenuItem>Sign up</MenuItem></Link>
                </Menu>
            </Box>
        </Toolbar>
        </MUIAppBar >
    )
}

export default React.memo(AppBar);