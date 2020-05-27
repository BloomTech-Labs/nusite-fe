import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import {
   makeStyles,
   IconButton,
   SwipeableDrawer,
   List,
   ListItemText,
   ListItem,
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
   toolbarMargin: {
      ...theme.mixins.toolbar,
      [theme.breakpoints.down("md")]: {
         marginBottom: "4.5em",
      },
      [theme.breakpoints.down("xs")]: {
         marginBottom: "2.5em",
      },
   },
   drawerIconContainer: {
      "marginLeft": "auto",
      "&:hover": {
         backgroundColor: "transparent",
      },
   },
   drawerIcon: {
      height: "50px",
      width: "50px",
      color: theme.palette.secondary.main,
   },
   drawer: {
      backgroundColor: theme.palette.primary.main,
   },
   drawerItem: {
      ...theme.typography.tab,
      minWidth: "10",
      marginLeft: "15px",
      color: theme.palette.secondary.main,
      opacity: 0.5,
   },
   drawerItemSelected: {
      "& .MuiListItemText-root": {
         opacity: 1,
      },
   },
}));

const HeaderDrawer = (props: any) => {
   const [openDrawer, setOpenDrawer] = useState(false);
   const classes = useStyles();
   const { value, routes } = props;
   const [drawerTabValue, SetDrawerTabValue] = useState(value);
   //this checks if device is iOS to make the drawer swipable
   const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

   return (
      <>
         <SwipeableDrawer
            classes={{ paper: classes.drawer }}
            disableBackdropTransition={!iOS}
            disableDiscovery={iOS}
            open={openDrawer}
            onClose={() => setOpenDrawer(false)}
            onOpen={() => setOpenDrawer(true)}
         >
            <div className={classes.toolbarMargin} />

            <List disablePadding>
               {routes.map((route: any) => (
                  <ListItem
                     key={`${route.activeIndex}`}
                     classes={{ selected: classes.drawerItemSelected }}
                     divider
                     button
                     component={Link}
                     to={route.link}
                     selected={drawerTabValue === route.activeIndex}
                     onClick={() => {
                        setOpenDrawer(false);
                        SetDrawerTabValue(route.activeIndex);
                     }}
                  >
                     <ListItemText className={classes.drawerItem}>
                        {route.name}
                     </ListItemText>
                  </ListItem>
               ))}
            </List>
         </SwipeableDrawer>
         <IconButton
            className={classes.drawerIconContainer}
            onClick={() => setOpenDrawer(!openDrawer)}
            disableRipple
         >
            <MenuIcon className={classes.drawerIcon} />
         </IconButton>
      </>
   );
};

export default HeaderDrawer;
