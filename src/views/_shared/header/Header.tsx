import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar"
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import MeunuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import useTheme from "@material-ui/core/styles/useTheme";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Link, withRouter } from "react-router-dom";
import logo from "../../../images/cover.png";
import { getToken } from "../../util/TokenHelpers";
import ElevationScroll from "../ElevationScroll";
import HeaderAvatar from "./HeaderAvatar";
import HeaderTabs from "./HeaderTabs"
//import { ThemeContext } from "../../context/contexts";

//styling
const useStyles = makeStyles(theme => ({
   //This will give the navigation bar some extra padding bellow it.
   toolbarMargin: {
      ...theme.mixins.toolbar,
      marginBottom: "2em",
      [theme.breakpoints.down("md")]: {
         marginBottom: "2em",
      },
      [theme.breakpoints.down("xs")]: {
         marginBottom: "1.5em",
      },
   },
   appBar: {
      zIndex: theme.zIndex.modal + 1,
   },
   logoContainer: {
      "padding": 0,
      "&:hover": {
         backgroundColor: "transparent",
      },
   },
   //This will set a height for the logo
   logo: {
      height: "7em",
      [theme.breakpoints.down("md")]: {
         height: "7em",
      },
      [theme.breakpoints.down("xs")]: {
         height: "5.5",
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

const Header = (props: any) => {
   const [value, setValue] = useState(0);
   const [openDrawer, setOpenDrawer] = useState(false);
   //material ui hooks
   const classes = useStyles();
   const theme = useTheme();
   const matches = useMediaQuery(theme.breakpoints.down("md"));

   let routes = [{ name: "Home", link: "/", activeIndex: 0 }];
   const publicRoutes = [
      { name: "Login", link: "/login", activeIndex: 1 },
      { name: "Register", link: "/register", activeIndex: 2 },
   ];
   const PrivateRoutes = [
      { name: "Dashboard", link: "/home", activeIndex: 1 },
      { name: "Logout", link: "/logout", activeIndex: 2 },
   ];
   if (getToken()) {
      routes.push(...PrivateRoutes);
   } else routes.push(...publicRoutes);

   const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);


   useEffect(() => {
      routes.forEach(route => {
         switch (props.location.pathname) {
            case `${route.link}`:
               if (value !== route.activeIndex) {
                  setValue(route.activeIndex);
               }
               break;
            default:
               break;
         }
      });
   }, [routes, value, props.location.pathname]);

   const drawer = (
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
               {routes.map(route => (
                  <ListItem
                     key={`${route.activeIndex}`}
                     classes={{ selected: classes.drawerItemSelected }}
                     divider
                     button
                     component={Link}
                     to={route.link}
                     selected={value === route.activeIndex}
                     onClick={() => {
                        setOpenDrawer(false);
                        setValue(route.activeIndex);
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
            <MeunuIcon className={classes.drawerIcon} />
         </IconButton>
      </>
   );

   return (
      <>
         <ElevationScroll>
            <AppBar className={classes.appBar} position="fixed">
               <Toolbar disableGutters>
                  <Button
                     className={classes.logoContainer}
                     component={Link}
                     to="/"
                     onClick={() => setValue(0)}
                     disableRipple
                  >
                     <img
                        className={classes.logo}
                        src={logo}
                        alt="company logo"
                     />
                  </Button>
                  {matches ? drawer : <HeaderTabs value={value} routes={routes} />}
                  {getToken() ? <HeaderAvatar /> : null}
               </Toolbar>
            </AppBar>
         </ElevationScroll>
         <div className={classes.toolbarMargin} />
      </>
   );
};

//the withRouter higher order component gives the Header compononet access to react-router props
export default withRouter(Header);
