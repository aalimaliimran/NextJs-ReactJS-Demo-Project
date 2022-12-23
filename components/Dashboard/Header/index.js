import React, { useEffect, useState } from 'react'
import NotificationBell from '../../../components/Common/UI/NotificationBell/NotificationBell'
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import HelpIcon from '@mui/icons-material/Help';
import { headerStyles } from './styles';
import {useRouter} from 'next/router';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';

const Header = () => {

    const [title, setTitle] = useState(null);
    const router = useRouter();
    
    useEffect(() => {
       const routerPathLastIndex = router.pathname.split("/").pop();
      const parsedTitle =  routerPathLastIndex.replace(/\W/g, ' ');
      setTitle(parsedTitle);
    }, [router]);

    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
      };
      const drawerWidth = 240;
      const AppBar = styled(MuiAppBar, {
        shouldForwardProp: (prop) => prop !== 'open',
      })(({ theme, open }) => ({
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
          marginLeft: drawerWidth,
          width: `calc(100% - ${drawerWidth}px)`,
          transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
        }),
      }));

    return (
     <header className='dashboard_header'>
        <div className='row'>
            <div className='col-xl-4 flex_col left_left'>
            <AppBar position="fixed" open={open}>
                <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    sx={{
                    marginRight: 5,
                    ...(open && { display: 'none' }),
                    }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap component="div">
                    Mini variant drawer
                </Typography>
                </Toolbar>
            </AppBar>
                <h1>{title}</h1>
            </div>
            <div className='col-xl-8 flex_col right_col'>
            <NotificationBell/>
                <Avatar src="https://mui.com/static/images/avatar/1.jpg" />
                <Tooltip title="Help">
                    <IconButton sx={headerStyles.helpIcon}>
                        <HelpIcon />
                    </IconButton>
                </Tooltip>
            </div>
        </div>
        </header>   
    )
}

export default Header
