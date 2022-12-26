import React, { Fragment, useEffect, useState } from "react";

import { mainNavbarList } from "./consts/navbarItems";
import { navbarStyles } from "./styles";

import { useRouter } from "next/router";
import MuiDrawer from "@mui/material/Drawer";
import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import { useTheme } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../../../shared/store/ui-slice";
import Image from "next/image";
import { Typography } from "@mui/material";
import Link from "next/link";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";

const Navbar = () => {
  /* Menu Persistent Drawer */
  const drawerWidth = 240;
  const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
  });

  const closedMixin = (theme) => ({
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
  });

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));

  const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
      ...openedMixin(theme),
      "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      "& .MuiDrawer-paper": closedMixin(theme),
    }),
  }));
  const theme = useTheme();
  /* Menu Persistent Drawer */

  /* Menu Toggle */
  const menuIsVisible = useSelector((state) => state.ui.menuIsVisible);
  const [open, setOpen] = React.useState(menuIsVisible);

  useEffect(() => {
    setOpen(menuIsVisible);
  }, [menuIsVisible]);

  const dispatch = useDispatch();
  const handleDrawerClose = () => {
    setOpen(false);
    dispatch(uiActions.toggle());
  };
  /* Menu Toggle */

  /* Menu Active Class Handing */
  const router = useRouter();
  const currentRoute = router.pathname;
  /* Menu Active Class Handing */

 


/* Mulitple List Collapse State */
const [nestedListOpen, setNestedListOpen] = useState({});
console.log(nestedListOpen);
function handleClick(id) {
  setNestedListOpen((prevState => ({...prevState, [id]: !prevState[id]})))
/* 
  Remove ...prevState if one collapse need to open at a time if both need to open then need to maintaine prev state.
  setNestedListOpen((prevState => ({[id]: !prevState[id]}))) 
*/
}
/* Multiple List Collapse State */
 // active menu item on page load

/*  useEffect(() => {
  
  setNestedListOpen((prevState => ({...prevState, [id]: !prevState[id]})))
}, []); */

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      className="menu_drawer_root"
      open={open}
      sx={navbarStyles.drawer}
    >
      <DrawerHeader className="drawer_header" onClick={handleDrawerClose}>
        <div className="wrap">
          <Image
            src="/images/hand_logo.png"
            width={45}
            height={45}
            alt="logo"
          />
          <Typography variant="h6">React Factory</Typography>
        </div>
      </DrawerHeader>
      <Divider />
      <List>
        {mainNavbarList.map((list, index) => (
          <Fragment key={index}>
             {list.items != null ? (
              <>
              <ListItemButton
                tabIndex={index}
                selected={nestedListOpen[list.id]}
                onClick={() => handleClick(list.id)}>
                <ListItemIcon sx={navbarStyles.icons}>{list.icon}</ListItemIcon>
                <ListItemText sx={navbarStyles.text} primary={list.label} />
                {nestedListOpen[list.id] ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse component="li" in={nestedListOpen[list.id]} timeout="auto" unmountOnExit>
              {list.items.map((item, index) => (
                <List key={index} component="div" disablePadding>
                  <ListItemButton 
                  sx={{ pl: 4 }}
                  component={Link}
                  to={item.route}
                  className={currentRoute === item.route ? "active" : ""}>
                    <ListItemIcon sx={navbarStyles.icons}>{list.icon}</ListItemIcon>
                    <ListItemText primary={item.label} />
                  </ListItemButton>
                </List>
                  ))}
              </Collapse>
            </>
            ) : (
              <ListItemButton
              component={Link}
              to={list.route}
              className={currentRoute === list.route ? "active" : ""}
              tabIndex={index}>
              <ListItemIcon sx={navbarStyles.icons}>{list.icon}</ListItemIcon>
              <ListItemText sx={navbarStyles.text} primary={list.label} />
            </ListItemButton>
              )}
          </Fragment>
        ))}
      </List>
    </Drawer>
  );
};

export default Navbar;
