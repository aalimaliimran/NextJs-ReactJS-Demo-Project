import React, { useEffect } from 'react'

import { mainNavbarItems } from './consts/navbarItems';
import { navbarStyles } from './styles';

import { useRouter } from 'next/router';
import MuiDrawer from '@mui/material/Drawer';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import List from '@mui/material/List';
import {useTheme } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../../../shared/store/ui-slice';
import Image from 'next/image';
import {Link as MUILink, Typography } from '@mui/material';

const Navbar = () => {

/* Menu Persistent Drawer */
  const drawerWidth = 240;
  const openedMixin = (theme) => ({
  
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
  });
  
  const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
  });
  
  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));
  

  const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
      ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
      }),
      ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
      }),
    }),
  );
  const theme = useTheme();
  /* Menu Persistent Drawer */


/* Menu Toggle */
  const menuIsVisible = useSelector((state) => state.ui.menuIsVisible);
  const [open, setOpen] = React.useState(menuIsVisible);

    useEffect(() => {
      setOpen(menuIsVisible);
    }, [menuIsVisible])
    
    const dispatch = useDispatch();
    const handleDrawerClose = () => {
      setOpen(false);
    dispatch(uiActions.toggle());
  };
  /* Menu Toggle */

  
  const router = useRouter();

  const [selectedIndex, setSelectedIndex] = React.useState(0);
console.log(selectedIndex)
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

    return (

      <Drawer variant="permanent" anchor="left" className='menu_drawer_root' open={open} sx={navbarStyles.drawer}>
        <DrawerHeader className='drawer_header' onClick={handleDrawerClose}>
          <div className='wrap'>
            <Image src="/images/hand_logo.png" width={45} height={45} alt="logo" />
            <Typography variant="h6">React Factory</Typography>
          </div>
        </DrawerHeader>
        <Divider />
        <List>
        {mainNavbarItems.map((item, index) => (
            <ListItemButton
                key={index}
                component={MUILink} 
                to={item.route}
                selected={selectedIndex === index}
                onClick={(event) => handleListItemClick(event, index)}>
              
              <ListItemIcon
                sx={navbarStyles.icons}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                sx={navbarStyles.text}
                primary={item.label}
              />
              
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    );
};

export default Navbar
