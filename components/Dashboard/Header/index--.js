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
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../../shared/store/ui-slice';

const Header = () => {

    /* Set Title Router Query String URL Path */
    const [title, setTitle] = useState(null);
    const router = useRouter();
    
    useEffect(() => {
       const routerPathLastIndex = router.pathname.split("/").pop();
      const parsedTitle =  routerPathLastIndex.replace(/\W/g, ' ');
      setTitle(parsedTitle);
    }, [router]);
    /* Set Title Router Query String URL Path */

    /* Menu Toggle */
   /*  const menuIsVisible = useSelector((state) => state.ui.menuIsVisible);
    const [open, setOpen] = React.useState(menuIsVisible);
    const dispatch = useDispatch();

    useEffect(() => {
        setOpen(menuIsVisible);
      }, [menuIsVisible])

    const handleDrawerOpen = () => {
        setOpen(true);
        dispatch(uiActions.toggle());
      }; */
    /* Menu Toggle */



      /* Menu Persistent Drawer */
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
      /* Menu Persistent Drawer */

    return (
     <header className='dashboard_header' /* open={open} */>
        <div className='row'>
            <div className='col-xl-4 flex_col left_left'>
            {/* Hamburger */}
            
               {/*  <Toolbar>
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
                    <h1>{title}</h1>
                </Toolbar> */}
           
             {/* Hamburger */}
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
